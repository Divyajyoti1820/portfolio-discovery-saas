"use client";

import { PlusIcon } from "lucide-react";

import { Empty } from "./_components/empty";
import { Button } from "@/components/ui/button";

export const DashboardPageClient = () => {
  return (
    <div className="bg-white flex flex-col gap-y-10 h-full p-6 xl:p-10 w-full xl:w-[50.5rem] rounded-lg overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <h3 className="w-full font-bold text-2xl text-left">
          Customize your links
        </h3>
        <p className="w-full text-muted-foreground text-left">
          Add/edit/remove links below and then share all your profiles with
          world!
        </p>
      </div>
      <div className="w-full flex flex-col gap-y-6 items-center">
        <Button variant="secondary" className="w-full">
          <PlusIcon />
          <p>Add new Link</p>
        </Button>
        <Empty />
      </div>
    </div>
  );
};
