import Link from "next/link";
import Image from "next/image";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoVariants = cva("relative hover:opacity-75 transition-all", {
  variants: {
    size: {
      lg: "w-[182px] h-[40px]",
      sm: "w-[146px] h-[32px]",
      mobile: "w-[32px] h-[32px]",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

export const Logo = ({ size, className }: LogoProps) => {
  return (
    <Link href="/" className={cn(className)}>
      <div className={cn(logoVariants({ size }))}>
        <Image src="/logo-large.svg" alt="logo" fill className="object-cover" />
      </div>
    </Link>
  );
};
