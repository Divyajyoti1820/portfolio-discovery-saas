"use client";

import { Fragment } from "react";

import { PlusIcon } from "lucide-react";

import { Phone } from "./_components/phone";
import { Empty } from "./_components/empty";
import { Button } from "@/components/ui/button";

export const DashboardPageClient = () => {
  return (
    <Fragment>
      <div className="bg-white h-full hidden xl:w-[31.625rem] xl:flex items-center justify-center p-6 rounded-lg">
        <Phone />
      </div>
      <div className="bg-white flex flex-col gap-y-10 h-full p-6 xl:p-10 w-full xl:w-[50.5rem] rounded-lg">
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
    </Fragment>
  );
};
