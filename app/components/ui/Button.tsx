import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  href?: string;
}

type ButtonProps = BaseButtonProps & (
  | ({ href: string } & Omit<HTMLMotionProps<"a">, "onAnimationStart" | "onAnimationEnd" | "onDragStart" | "onDragEnd">)
  | ({ href?: never } & Omit<HTMLMotionProps<"button">, "onAnimationStart" | "onAnimationEnd" | "onDragStart" | "onDragEnd">)
);

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = "font-normal tracking-wide rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase text-xs letter-spacing-wider inline-block text-center";
  
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--accent)] focus:ring-[var(--primary)]",
    secondary: "bg-[var(--secondary)]/20 text-[var(--text)] hover:bg-[var(--secondary)]/30 focus:ring-[var(--secondary)]",
    accent: "bg-[var(--accent)]/20 text-[var(--background)] hover:bg-[var(--accent)]/30 focus:ring-[var(--accent)]",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] focus:ring-white",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-3.5 text-xs",
  };

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98, y: 0 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
    className: clsx(baseStyles, variants[variant], sizes[size], className),
  };

  if (href) {
    const MotionLink = motion(Link);
    return (
      <MotionLink href={href} {...motionProps} {...(props as any)}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button {...motionProps} {...(props as any)}>
      {children}
    </motion.button>
  );
}
