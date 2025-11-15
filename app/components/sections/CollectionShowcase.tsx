"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CollectionShowcase() {
  return (
    <section className="py-20 bg-[var(--section-dark)]   relative overflow-hidden">
      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Where Every Art Collector Belongs
          </h2>
          <p className="text-lg md:text-xl mb-10  /90 leading-relaxed">
            Explore our diverse range of original artworks, from botanical studies to abstract expressions. 
            Each piece is carefully selected to inspire and enrich your collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <Button variant="outline" size="lg">
                Browse Collections
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="outline" size="lg">
                View All Artworks
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
