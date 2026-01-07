import { z } from "zod";

const CATEGORY = ["DeFi", "AI", "Consumer", "Infra", "Other"] as const;
const STAGE = ["Pre-launch", "Launched"] as const;

export const applicationFormSchema = z.object({
   projectName: z
      .string()
      .min(1, "Project name is required")
      .max(100, "Project name must be less than 100 characters")
      .trim(),
   email: z
      .email("Invalid email address")
      .min(1, "Email is required")
      .max(255, "Email must be less than 255 characters")
      .toLowerCase()
      .trim(),
   website: z
      .url("Invalid URL format")
      .min(1, "Website is required")
      .max(500, "Website URL must be less than 500 characters")
      .trim(),
   category: z.enum(CATEGORY, "Invalid category selected"),
   stage: z.enum(STAGE, "Invalid stage selected"),
   description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(2000, "Description must be less than 2000 characters")
      .trim(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
