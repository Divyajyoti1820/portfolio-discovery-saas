"use client";

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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormSchema } from "@/features/auth/schemas";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = (values: z.infer<typeof SignUpFormSchema>) => {
    console.log({ values });
  };

  return (
    <Card className="w-full md:w-[500px]">
      <CardHeader className="flex items-center justify-center">
        <Image
          src="/logo-devlinks-large.svg"
          alt="Discovery | SaaS"
          width={150}
          height={80}
        />
      </CardHeader>
      <Separator />
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Join Us through credentials or use provider service.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="space-y-3"
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="focus-visible:bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={false}
              className="w-full disabled:bg-primary/50"
              size="lg"
            >
              Continue
            </Button>
          </form>
        </Form>
      </CardContent>
      <Separator />
      <CardContent className="flex py-4 items-center justify-center flex-col">
        <Button
          className="w-full bg-black flex items-center justify-center hover:bg-black/60 disabled:bg-black/50"
          size="lg"
        >
          <FaGithub className="size-5" />
          <p>Register with GitHub</p>
        </Button>
      </CardContent>
      <CardFooter className="flex items-center justify-center text-sm">
        Already have an account?
        <Link href="/sign-in">
          <span className="pl-1 font-semibold text-blue-500 hover:underline transition cursor-pointer">
            Login
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};
