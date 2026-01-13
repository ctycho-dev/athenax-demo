import { z } from "zod";

export const MAX_PITCH_LENGTH = 280;

export const applicationFormSchema = z.object({
   projectName: z
      .string()
      .min(1, "Project name is required")
      .max(50, "Project name must be less than 50 characters"),
   email: z.email("Please enter a valid email address").min(1, "Email is required"),
   pitch: z
      .string()
      .min(1, "Pitch is required")
      .max(MAX_PITCH_LENGTH, `Pitch must be ${MAX_PITCH_LENGTH} characters or less`),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
