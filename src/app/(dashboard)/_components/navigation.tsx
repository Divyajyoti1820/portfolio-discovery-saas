import Image from "next/image";

import { FaEye } from "react-icons/fa";
import { LinkIcon, LogOutIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="h-full p-4 bg-white flex flex-row items-center justify-between rounded-xl">
      <div className="w-auto h-full flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="Discovery"
          width={146}
          height={52}
          className="hidden md:block"
        />
        <Image
          src="/logo-small.svg"
          alt="Discovery"
          width={32}
          height={32}
          className="block md:hidden"
        />
      </div>
      <div className="w-auto h-full flex flex-row items-center gap-x-4 text-muted">
        <button
          type="button"
          className="flex flex-row gap-x-2 px-3 py-2 md:px-[1.687rem] md:py-[0.6875rem] hover:bg-primary/20 hover:text-primary rounded-lg transition-all"
        >
          <LinkIcon className="size-5" />
          <p className="font-bold hidden md:block">Links</p>
        </button>
        <button
          type="button"
          className="flex flex-row gap-x-2 px-3 py-2  md:px-[1.6875rem] md:py-[0.6875rem] hover:bg-primary/20 hover:text-primary rounded-lg transition-all ease-in"
        >
          <UserIcon className="size-5" />
          <p className="font-bold hidden md:block">Profile Details</p>
        </button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button type="button" variant="secondary" className="px- py-2">
          <FaEye className="size-5" />
          <p className="text-semibold hidden md:block">Preview</p>
        </Button>
        <Button type="button" variant="destructive" className="px-4 py-2">
          <LogOutIcon className="size-5" />
          <p className="text-bold hidden md:block">Logout</p>
        </Button>
      </div>
    </nav>
  );
};
