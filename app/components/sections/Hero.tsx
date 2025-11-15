"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

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

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 12], { clamp: false });

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/hero_bg.jpg"
          alt="Abstract pink and gold artwork"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
      <motion.p
          variants={revealVariants}
          initial="initial"
          animate="inView"
          transition={{ delay: 0.1 }}
          className="text-lg font-medium text-text/80 mb-8"
        >
          Welcome to the
        </motion.p>
        <motion.h1
          variants={revealVariants}
          initial="initial"
          animate="inView"
          className="font-serif text-secondary text-5xl md:text-7xl font-normal mb-4"
        >
          Pink Shades Art Gallery
        </motion.h1>
        
        <motion.div
          variants={revealVariants}
          initial="initial"
          animate="inView"
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-center"
        >
          <Button className="text-text bg-accent" href="#gallery"   variant="accent">Shop Originals</Button>
          <Button className="text-text bg-background" href="#contact" variant="secondary">Contact an Artist</Button>
        </motion.div>
      </div>
    </section>
  );
}