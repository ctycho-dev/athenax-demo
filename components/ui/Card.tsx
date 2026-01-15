import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-3xl border-2 transition-all overflow-hidden", {
   variants: {
      variant: {
         default: "bg-white border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
         yellow: "bg-accent-yellow border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
         dark: "bg-ink border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
         blue: "bg-accent-blue border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
         red: "bg-white border-accent-red shadow-[6px_6px_0px_0px_var(--color-accent-red)]",
         // Solid color variants for the color system
         cream: "bg-cream border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
         ink: "bg-ink border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-white",
         "red-solid": "bg-accent-red border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-white",
         "yellow-solid": "bg-accent-yellow border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
         "blue-solid": "bg-accent-blue border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
      },
   },
   defaultVariants: {
      variant: "default",
   },
});

export interface CardProps
   extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
   ({ className, variant, ...props }, ref) => (
      <div ref={ref} className={cn(cardVariants({ variant, className }))} {...props} />
   )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 md:p-8", className)} {...props} />
   )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
   ({ className, ...props }, ref) => (
      <h3
         ref={ref}
         className={cn("text-2xl md:text-3xl font-bold leading-none uppercase", className)}
         style={{ fontFamily: "var(--font-londrina), cursive" }}
         {...props}
      />
   )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
   <p
      ref={ref}
      className={cn("text-sm leading-relaxed", className)}
      style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      {...props}
   />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
   )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
   ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
   )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
