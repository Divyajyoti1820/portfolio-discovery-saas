"use client";

import { Form, FormItem, FormControl, FormField } from "@/components/ui/form";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export const ProfilePageClient = () => {
  return (
    <div className="bg-white flex flex-col gap-y-10 h-full p-6 xl:p-10 w-full xl:w-[50.5rem] rounded-lg">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h3 className="w-full font-bold text-2xl text-left">Profile Details</h3>
        <p className="w-full text-muted-foreground text-left">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <Form>
        <form className="flex-1 w-full flex flex-col items-center">
          <div className="w-full bg-background"></div>
          <div className="w-full flex flex-col items-center justify-center bg-background"></div>
        </form>
      </Form>
    </div>
  );
};
