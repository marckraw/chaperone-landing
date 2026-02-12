import { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-sm transition-all duration-200 cursor-pointer";
  const variants = {
    primary:
      "bg-cyan text-black hover:bg-cyan-light glow-cyan hover:glow-cyan-strong",
    secondary:
      "border border-border text-text-secondary hover:text-foreground hover:border-cyan/50 hover:bg-cyan/5",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
