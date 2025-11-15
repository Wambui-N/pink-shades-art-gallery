"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export default function Button({ href, children, variant = 'primary', className = '' }) {
  const baseClasses = 'px-6 py-3 rounded-[10px] text-sm font-semibold transition-colors duration-300 inline-block text-center';

  const variants = {
    primary: 'bg-primary   hover:bg-primary/90',
    secondary: 'bg-transparent border border-secondary text-text hover:bg-secondary/10',
  };

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.12, ease: 'easeInOut' },
  };

  const mergedClasses = twMerge(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} passHref>
        <motion.a {...motionProps} className={mergedClasses}>
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button {...motionProps} className={mergedClasses}>
      {children}
    </motion.button>
  );
}