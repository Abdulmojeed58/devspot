import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "gradient"
  | "outline"
  | "custom";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-dev-primary text-white hover:bg-blue-600 border border-dev-primary",
  secondary:
    "bg-[#2B2B31] text-white border border-dev-border hover:bg-dev-card-hover",
  danger:
    "bg-[#75421D] text-[#FF9330] border border-dev-border hover:bg-dev-card-hover",
  gradient:
    "bg-color-gradient-purple-blue text-white border border-dev-border hover:bg-dev-card-hover",
  outline:
    "bg-transparent text-white border border-dev-border hover:bg-dev-card-hover",
  custom: "",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-3 md:px-4 py-2 text-base md:text-lg",
  lg: "px-5 py-3 text-lg md:text-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        "rounded-lg font-semibold leading-8 transition-colors flex items-center gap-2",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";

export default Button;
