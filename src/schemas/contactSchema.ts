import { z } from "zod";

const namePattern = /^[A-Za-zÀ-ÿ\s-]+$/;

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(
      namePattern,
      "First name cannot contain numbers or special characters"
    ),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(
      namePattern,
      "Last name cannot contain numbers or special characters"
    ),

  email: z.string().email("Invalid email address").min(1, "Email is required"),

  country: z.string().min(1, "Country is required"),
});
