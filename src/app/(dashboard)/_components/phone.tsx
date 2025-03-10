"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { GridIcon, SquareMenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Phone = () => {
  const router = useRouter();
  const [style, setStyle] = useState<"Bar" | "Grid">("Bar");
  const { data: session, isPending: sessionPending } = useSession();

  const handleStyle = () => {
    if (style === "Bar") {
      setStyle("Grid");
    } else {
      setStyle("Bar");
    }
  };

  if (sessionPending) {
    return <div></div>;
  }

  if (!session) {
    router.push("/login");
  }

  return (
    <div className="w-[19.1875rem] h-[39.4375rem] pt-16 pb-8 px-4 bg-[url('/phone.svg')] bg-cover bg-no-repeat flex flex-col gap-y-6">
      <div className="w-full flex flex-col gap-y-6 items-center justify-center">
        <div className="size-[96px] bg-[#EEEEEE] rounded-full" />
        <div className="w-full flex flex-col gap-y-3 items-center justify-center">
          <div className="w-[160px] h-[16px] bg-[#EEEEEE] rounded-full" />
          <div className="w-[72px] h-[8px] bg-[#EEEEEE] rounded-full" />
        </div>
      </div>
      <div className="w-full flex flex-1 flex-col items-center justify-start gap-y-1">
        <div className="w-full flex flex-row items-center justify-center gap-x-4 p-2 rounded-md">
          <button
            onClick={handleStyle}
            className={cn(
              "p-2 bg-transparent border-2 border-transparent hover:border-primary  rounded-md transition-all",
              style === "Bar" && "bg-primary/50 text-white"
            )}
          >
            <SquareMenuIcon className="size-6" />
          </button>
          <button
            onClick={handleStyle}
            className={cn(
              "p-2 bg-transparent border-2 border-transparent hover:border-primary rounded-md transition-all",
              style === "Grid" && "bg-primary/50 text-white"
            )}
          >
            <GridIcon className="size-6" />
          </button>
        </div>
        {style === "Bar" ? (
          <ScrollArea className="h-[280px] w-[94%] bg-background rounded-md">
            <div className="w-full flex flex-col items-center justify-start gap-y-2">
              <div className="h-[40px] px-4 py-3 w-full bg-blue-400 rounded-md" />
            </div>
          </ScrollArea>
        ) : (
          <div className="grid grid-cols-3 p-2 bg-background gap-x-4 gap-y-2 items-center justify-center rounded-md">
            <div className="size-12 bg-blue-400 rounded-md" />
            <div className="size-12 bg-blue-400 rounded-md" />
            <div className="size-12 bg-blue-400 rounded-md" />
            <div className="size-12 bg-blue-400 rounded-md" />
            <div className="size-12 bg-blue-400 rounded-md" />
            <div className="size-12 bg-blue-400 rounded-md" />
          </div>
        )}
      </div>
    </div>
  );
};
