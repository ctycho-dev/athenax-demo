import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ZodError } from "zod";
import { applicationFormSchema } from "@/lib/validation";
import { getSMTPConfig, getAdminEmail } from "@/lib/smtp-config";
import {
   generateApplicantConfirmationEmail,
   generateAdminNotificationEmail,
} from "@/lib/email-templates";
import { checkRateLimit } from "@/lib/rate-limiter";

export async function POST(request: NextRequest) {
   try {
      // Get client IP for rate limiting
      const forwarded = request.headers.get("x-forwarded-for");
      const ip = forwarded
         ? forwarded.split(",")[0]
         : request.headers.get("x-real-ip") || "unknown";

      // Check rate limit
      const rateLimit = checkRateLimit(ip);
      if (!rateLimit.allowed) {
         const resetDate = new Date(rateLimit.resetTime);
         return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            {
               status: 429,
               headers: {
                  "X-RateLimit-Limit": "3",
                  "X-RateLimit-Remaining": "0",
                  "X-RateLimit-Reset": resetDate.toISOString(),
               },
            }
         );
      }

      // Parse and validate request body
      const body = await request.json();
      const validatedData = applicationFormSchema.parse(body);

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

      // Generate email templates
      const applicantEmail = generateApplicantConfirmationEmail(validatedData);
      const adminNotification = generateAdminNotificationEmail(validatedData);

      // Send confirmation email to applicant
      await transporter.sendMail({
         from: `"${smtpConfig.from.name}" <${smtpConfig.from.email}>`,
         to: validatedData.email,
         subject: applicantEmail.subject,
         html: applicantEmail.html,
      });

      // Send notification email to admin
      await transporter.sendMail({
         from: `"${smtpConfig.from.name}" <${smtpConfig.from.email}>`,
         to: adminEmail,
         subject: adminNotification.subject,
         html: adminNotification.html,
         replyTo: validatedData.email,
      });

      return NextResponse.json(
         { message: "Email sent successfully" },
         {
            status: 200,
            headers: {
               "X-RateLimit-Limit": "3",
               "X-RateLimit-Remaining": rateLimit.remaining.toString(),
            },
         }
      );
   } catch (error) {
      console.error("Error sending email:", error);

      // Handle Zod validation errors
      if (error instanceof ZodError) {
         const firstError = error.issues[0];
         return NextResponse.json(
            { error: firstError.message || "Invalid form data" },
            { status: 400 }
         );
      }

      // Handle SMTP configuration errors
      if (error instanceof Error && error.message.includes("SMTP")) {
         console.error("SMTP configuration error:", error.message);
         return NextResponse.json(
            { error: "Email service configuration error. Please contact support." },
            { status: 500 }
         );
      }

      // Generic error
      return NextResponse.json(
         { error: "Failed to send email. Please try again." },
         { status: 500 }
      );
   }
}
