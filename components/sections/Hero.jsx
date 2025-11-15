"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import { revealVariants } from '@/lib/motionVariants';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 12], { clamp: false });

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h1
          variants={revealVariants}
          initial="initial"
          animate="inView"
          className="font-serif text-5xl md:text-7xl font-bold text-text mb-4"
        >
          Where Art Lovers Gather
        </motion.h1>
        <motion.p
          variants={revealVariants}
          initial="initial"
          animate="inView"
          transition={{ delay: 0.1 }}
          className="text-lg text-text/80 mb-8"
        >
          Discover exceptional original paintings, carefully curated for the discerning collector.
        </motion.p>
        <motion.div
          variants={revealVariants}
          initial="initial"
          animate="inView"
          transition={{ delay: 0.2 }}
        >
          <Button className="text-lg">
            Explore Art
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
