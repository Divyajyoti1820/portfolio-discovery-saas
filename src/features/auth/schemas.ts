import z from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const SignUpFormSchema = z.object({
  name: z.string().trim().min(3, "At least 3 character required"),
  email: z.string().email({ message: "Please enter correct email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 characters long" }),
});
