"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="mx-auto max-w-[var(--max-width)] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden w-full h-full"
          >
            <Image
              src="/about.jpg"
              alt="Abstract artwork displayed in the Pink Shades Art Gallery"
              fill
              className="object-contain object-center rounded-[10px]"
              priority
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--background)] p-8 md:p-12 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--secondary)] mb-6">
              From Our Hearts to Yours
            </h2>
            <div className="space-y-4 text-[var(--text)] mb-8 leading-relaxed">
              <p>
                Pink Shades Art Gallery was born from a passion for discovering and sharing 
                exceptional art that celebrates beauty and emotion. We believe that art should 
                be accessible to everyone, and our carefully curated collection features works 
                from both emerging and established artists.
              </p>
              <p>
                Each piece in our collection has been selected not just for its aesthetic appeal, 
                but for its ability to tell a story and evoke emotion. We work directly with artists 
                to ensure authenticity and quality.
              </p>
            </div>
            <Link href="/about">
            <Button className="text-text bg-accent" href="#gallery"   variant="accent">Visit Our Gallery</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
