import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "solid";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-paper/5 text-paper-dim border border-line",
    accent: "bg-accent/10 text-accent border border-accent/30",
    outline: "border border-line-strong text-paper-dim",
    solid: "bg-accent text-ink",
  };

  return (
    <span
      className={cn(
        "mono inline-flex items-center px-3 py-1 rounded-full text-[11px] uppercase tracking-widest",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
