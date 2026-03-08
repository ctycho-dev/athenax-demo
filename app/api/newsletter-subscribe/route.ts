import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ZodError } from "zod";
import { newsletterSubscriptionSchema } from "@/lib/validation";
import { getSMTPConfig, getAdminEmail } from "@/lib/smtp-config";
import {
   generateNewsletterAdminNotification,
} from "@/lib/email-templates";
import { checkRateLimit } from "@/lib/rate-limiter";
import { API_BASE_URL } from "@/lib/api";

const NEWSLETTER_API_URL = `${API_BASE_URL}/newsletter-subscribers`;

export async function POST(request: NextRequest) {
   try {
      // Get client IP for rate limiting
      const forwarded = request.headers.get("x-forwarded-for");
      const ip = forwarded
         ? forwarded.split(",")[0]
         : request.headers.get("x-real-ip") || "unknown";

      // Check rate limit - allow 5 requests per hour for newsletter
      const rateLimit = checkRateLimit(`newsletter:${ip}`);
      if (!rateLimit.allowed) {
         const resetDate = new Date(rateLimit.resetTime);
         return NextResponse.json(
            { error: "Too many subscription attempts. Please try again later." },
            {
               status: 429,
               headers: {
                  "X-RateLimit-Limit": "5",
                  "X-RateLimit-Remaining": "0",
                  "X-RateLimit-Reset": resetDate.toISOString(),
               },
            }
         );
      }

      // Parse and validate request body
      const body = await request.json();
      const validatedData = newsletterSubscriptionSchema.parse(body);

      // Get SMTP configuration
      const smtpConfig = getSMTPConfig();
      const adminEmail = getAdminEmail();

      // Create transporter
      const transporter = nodemailer.createTransport({
         host: smtpConfig.host,
         port: smtpConfig.port,
         secure: smtpConfig.secure,
         auth: {
            user: smtpConfig.auth.user,
            pass: smtpConfig.auth.pass,
         },
      });

      // Generate admin notification email
      const adminNotification = generateNewsletterAdminNotification(validatedData);

      // Run API call and email send in parallel
      const [apiResponse] = await Promise.all([
         fetch(NEWSLETTER_API_URL, {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify({ email: validatedData.email }),
         }),
         transporter.sendMail({
            from: `"${smtpConfig.from.name}" <${smtpConfig.from.email}>`,
            to: adminEmail,
            subject: adminNotification.subject,
            html: adminNotification.html,
            replyTo: validatedData.email,
         }),
      ]);

      // Check API response (email failure is logged but doesn't block)
      if (!apiResponse.ok) {
         const errorData = await apiResponse.json().catch(() => ({}));
         throw new Error(errorData.message || "Failed to subscribe to newsletter");
      }

      return NextResponse.json(
         { message: "Subscription successful" },
         {
            status: 200,
            headers: {
               "X-RateLimit-Limit": "5",
               "X-RateLimit-Remaining": rateLimit.remaining.toString(),
            },
         }
      );
   } catch (error) {
      console.error("Error processing newsletter subscription:", error);

      // Handle Zod validation errors
      if (error instanceof ZodError) {
         const firstError = error.issues[0];
         return NextResponse.json(
            { error: firstError.message || "Invalid form data" },
            { status: 400 }
         );
      }

      // Handle API/SMTP errors
      if (error instanceof Error) {
         return NextResponse.json(
            { error: error.message || "Failed to process subscription. Please try again." },
            { status: 500 }
         );
      }

      // Generic error
      return NextResponse.json(
         { error: "Failed to process subscription. Please try again." },
         { status: 500 }
      );
   }
}
