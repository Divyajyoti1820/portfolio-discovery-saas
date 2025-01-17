import z from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Minimum 2 characters required" })
    .max(50, { message: "Maximum 50 characters allowed" }),
  email: z.string().email({ message: "Please enter valid email" }),
  password: z.string().min(8, { message: "Minimum 8 characters required" }),
  confirmPassword: z.string().min(8),
});

export const SignInSchema = z.object({
  email: z.string().email({ message: "Please enter valid email" }),
  password: z.string().min(8, { message: "Minimum 8 characters required" }),
});
