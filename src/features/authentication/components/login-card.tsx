"use client";

import Image from "next/image";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/features/authentication/schema";

import { MdEmail } from "react-icons/md";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const LoginCard = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = (values: z.infer<typeof LoginSchema>) => {
    console.log({ values });
  };

  return (
    <Card className="min-w-[500px]">
      <CardHeader className="flex items-start justify-center mb-8">
        <Image src="/logo.svg" alt="logo" width={182.5} height={40} />
      </CardHeader>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription className="text-md">
          Add your details below to get back into the app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MdEmail className="size-5 absolute top-1/2 left-3 -translate-y-1/2" />
                      <Input
                        {...field}
                        placeholder="e.g. alex@email.com"
                        type="email"
                        className="w-full pl-10"
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-muted-foreground">
          Don&apos;t have an account?{" "}
          <span className="text-primary hover:underline ">Create account</span>
        </p>
      </CardFooter>
    </Card>
  );
};
