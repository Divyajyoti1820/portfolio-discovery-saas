import { z } from "zod";

export const ProfileSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "At least 3 characters" })
    .max(20, { message: "At most 20 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  image: z.optional(z.string()),
  userId: z.string(),
});
