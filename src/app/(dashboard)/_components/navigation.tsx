"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { FaEye } from "react-icons/fa";
import { LinkIcon, LogOutIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="h-full p-4 bg-white flex flex-row items-center justify-between rounded-lg">
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
          onClick={() => router.push("/")}
          className={cn(
            "flex flex-row gap-x-2 px-3 py-2 md:px-[1.687rem] md:py-[0.6875rem] border-2 border-transparent hover:border-primary hover:text-primary rounded-lg transition-all",
            pathname === "/" && "bg-primary/20 text-primary"
          )}
        >
          <LinkIcon className="size-5" />
          <p className="font-bold hidden lg:block">Links</p>
        </button>
        <button
          type="button"
          onClick={() => router.push("/profile")}
          className={cn(
            "flex flex-row gap-x-2 px-3 py-2  md:px-[1.6875rem] md:py-[0.6875rem] hover:bg-primary/20 hover:text-primary rounded-lg transition-all ease-in",
            pathname === "/profile" && "bg-primary/20 text-primary"
          )}
        >
          <UserIcon className="size-5" />
          <p className="font-bold hidden lg:block">Profile Details</p>
        </button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <button
          type="button"
          className="flex flex-row items-center justify-center gap-x-2 px-3 py-2 border-2 border-primary text-primary  md:px-[1.6875rem] md:py-[0.6875rem] hover:bg-primary hover:text-primary-foreground rounded-lg transition-all ease-in"
        >
          <FaEye className="size-5" />
          <p className="text-semibold hidden lg:block">Preview</p>
        </button>
        <button
          type="button"
          className="flex flex-row items-center justify-center gap-x-2 px-3 py-2 bg-destructive text-destructive-foreground md:px-[1.6875rem] md:py-[0.6875rem] hover:bg-destructive/50 hover:text-white rounded-lg transition-all ease-in"
        >
          <LogOutIcon className="size-5" />
          <p className="text-bold hidden lg:block">Logout</p>
        </button>
      </div>
    </nav>
  );
};
