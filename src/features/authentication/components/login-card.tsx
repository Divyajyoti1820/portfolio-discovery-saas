"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import z from "zod";
import { useForm } from "react-hook-form";
import { signIn } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/features/authentication/schema";

import { IoIosMail } from "react-icons/io";
import { MdPassword } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const LoginCard = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const visiblePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [pending, setPending] = useState(false);
  const onSubmitHandler = async (values: z.infer<typeof LoginSchema>) => {
    setPending(true);

    await signIn
      .email({
        email: values.email,
        password: values.password,
        callbackURL: "/",
      })
      .then(({ data }) => {
        toast.success(`Welcome back ${data?.user.name}!`);
        router.push("/");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <Card className="w-full lg:max-w-[500px] h-auto">
      <CardHeader className="flex items-center justify-center">
        <Image src="/logo.svg" alt="Discovery" width={182} height={40} />
      </CardHeader>
      <CardHeader>
        <CardTitle className="text-[32px] font-semibold">Login</CardTitle>
        <CardDescription>
          Add your details below to get back into the app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="flex flex-col gap-y-6"
          >
            <FormField
              name="email"
              disabled={pending}
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="relative">
                    <IoIosMail className="absolute top-1/2 left-3 -translate-y-1/2" />
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="alex@email.com"
                        {...field}
                        className="pl-10"
                      />
                    </FormControl>
                    <FormMessage className="absolute bottom-2 right-2" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              disabled={pending}
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <div className="flex flex-row gap-x-1">
                    <div className="relative w-full flex-1">
                      <MdPassword className="absolute top-1/2 left-3 -translate-y-1/2" />
                      <FormControl>
                        <Input
                          type={passwordVisible ? "text" : "password"}
                          placeholder="At least 6 characters"
                          {...field}
                          className="pl-10 flex-1"
                        />
                      </FormControl>
                      <FormMessage className="absolute bottom-2 right-10" />
                    </div>
                    <Button
                      type="button"
                      disabled={pending}
                      variant="ghost"
                      size="icon"
                      onClick={visiblePassword}
                    >
                      {passwordVisible ? (
                        <FaEyeSlash onClick={visiblePassword} />
                      ) : (
                        <FaEye onClick={visiblePassword} />
                      )}
                    </Button>
                  </div>
                </FormItem>
              )}
            />

            <Button disabled={pending} type="submit" size="lg">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?
          <span
            onClick={() => router.push("/login")}
            className="ml-1 cursor-pointer text-blue-600 hover:underline"
          >
            Create account
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};
