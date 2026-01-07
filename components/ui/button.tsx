import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wider transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
   {
      variants: {
         variant: {
            default: "bg-[#020617] text-white hover:bg-[#111827]",
            primary: "bg-[#020617] text-white hover:bg-[#111827]",
            secondary:
               "bg-transparent border-2 border-[#020617] text-[#020617] hover:bg-[#020617] hover:text-white",
            blue: "bg-[#2F80FF] text-white hover:bg-[#2563EB]",
            destructive: "bg-destructive text-white hover:bg-destructive/90",
            outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-50",
            ghost: "hover:bg-gray-100",
            link: "text-[#2F80FF] hover:underline underline-offset-4 normal-case",
         },
         size: {
            default: "px-6 py-2",
            sm: "px-4 py-1 text-xs",
            lg: "px-8 py-3 text-lg",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
         },
      },
      defaultVariants: {
         variant: "default",
         size: "default",
      },
   }
);

function Button({
   className,
   variant = "default",
   size = "default",
   asChild = false,
   ...props
}: React.ComponentProps<"button"> &
   VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
   }) {
   const Comp = asChild ? Slot : "button";

   return (
      <Comp
         data-slot="button"
         data-variant={variant}
         data-size={size}
         className={cn(buttonVariants({ variant, size, className }))}
         {...props}
      />
   );
}

export { Button, buttonVariants };
