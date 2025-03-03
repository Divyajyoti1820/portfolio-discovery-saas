import z from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, { message: "At least 3 characters" })
      .max(20, { message: "At most 20 characters" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "At least 6 characters" }),
    confirmPassword: z
      .string({ required_error: "Confirm Password is required" })
      .min(6, { message: "At least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});
