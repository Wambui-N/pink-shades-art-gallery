"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const revealVariants = {
  initial: { opacity: 0, y: 40 },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.2, 0.9, 0.2, 1],
    },
  },
};

export default function Reveal({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial="initial"
      animate={inView ? 'inView' : 'initial'}
      className={className}
    >
      {children}
    </motion.div>
  );
}