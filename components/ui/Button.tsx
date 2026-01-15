import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn-system btn-primary", {
   variants: {
      rotate: {
         none: "",
         left: "-rotate-3",
         right: "rotate-3",
      },
   },
   defaultVariants: {
      rotate: "none",
   },
});

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, rotate, ...props }, ref) => {
      return (
         <button
            className={cn(buttonVariants({ rotate }), className)}
            style={{ fontFamily: "var(--font-londrina), cursive" }}
            ref={ref}
            {...props}
         />
      );
   }
);
Button.displayName = "Button";

export { Button };
