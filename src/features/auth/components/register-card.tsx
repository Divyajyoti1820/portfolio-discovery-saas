"use client";

import { cn } from "@/lib/utils";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/features/auth/schema";

import { FaGithub } from "react-icons/fa";
import { FaUser as UserIcon } from "react-icons/fa";

import { IoMailSharp as EmailIcon } from "react-icons/io5";
import { RiLockPasswordFill as PasswordIcon } from "react-icons/ri";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useIsMobile } from "@/hook/use-mobile";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const RegisterCard = () => {
  const isMobile = useIsMobile();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegisterHandler = (values: z.infer<typeof RegisterSchema>) => {
    const validation = RegisterSchema.safeParse(values);
    if (!validation.success) {
      return;
    }
    if (values.password !== values.confirmPassword) {
      return;
    }
    console.log(values);
  };

  return (
    <div className="relative min-h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
      <div
        className={cn(
          "w-full p-4 flex items-center justify-center",
          isMobile && "justify-start"
        )}
      >
        <Logo className="" size="lg" />
      </div>
      <Card className="h-auto lg:min-h-[618px] lg:w-[476px]">
        <CardHeader>
          <CardTitle className="place-self-start ~text-2xl/3xl">
            Create account
          </CardTitle>
          <CardDescription className="place-self-start">
            Let&apos;s get you started sharing your link!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onRegisterHandler)}
              className="space-y-[24px]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <UserIcon className="size-4 absolute top-[50%] left-2 translate-y-[-50%]" />
                        <Input
                          type="text"
                          {...field}
                          placeholder="e.g Alex"
                          className="pl-8"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <EmailIcon className="size-4 absolute top-[50%] left-2 translate-y-[-50%]" />
                        <Input
                          type="email"
                          {...field}
                          placeholder="e.g Alex"
                          className="pl-8"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <PasswordIcon className="size-4 absolute top-[50%] left-2 translate-y-[-50%]" />
                        <Input
                          type="password"
                          {...field}
                          placeholder="At least 8 characters"
                          className="pl-8"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <PasswordIcon className="size-4 absolute top-[50%] left-2 translate-y-[-50%]" />
                        <Input
                          type="password"
                          {...field}
                          placeholder="At least 8 characters"
                          className="pl-8"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                <span>Create new account</span>
              </Button>
              <Button type="button" variant="secondary" className="w-full">
                <FaGithub className="size-4" />
                Register with GitHub
              </Button>
            </form>
          </Form>
        </CardContent>
        <Separator />
        <CardContent className="flex items-center justify-center py-2"></CardContent>
        <CardFooter className="flex items-center justify-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-primary hover:underline transition-all"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
