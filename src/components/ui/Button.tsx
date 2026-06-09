import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseClass =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-strong",
  secondary: "border border-border bg-surface hover:border-primary hover:text-primary",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${baseClass} ${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function ActionButton({
  variant = "primary",
  className = "",
  ...props
}: ActionButtonProps) {
  return <button className={`${baseClass} ${variantClass[variant]} ${className}`} {...props} />;
}
