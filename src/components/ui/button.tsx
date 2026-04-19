"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "group relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden";

    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary:
        "bg-paper text-ink hover:bg-paper/90",
      accent:
        "bg-accent text-ink hover:bg-accent-deep",
      outline:
        "border border-line-strong text-paper hover:bg-paper hover:text-ink",
      ghost:
        "text-paper hover:text-accent",
    };

    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-sm tracking-wide",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
