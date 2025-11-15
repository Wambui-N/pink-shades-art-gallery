"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Artwork } from "@/types";
import Button from "../ui/Button";

interface ArtworkCardProps {
  artwork: Artwork;
  onQuickView?: (artwork: Artwork) => void;
}

export default function ArtworkCard({ artwork, onQuickView }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/shop/${artwork.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--secondary)]/10 border-4 border-[var(--border)]">
          <Image
            src={artwork.images[0]}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay with title and price on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-[var(--text)] via-[var(--text)]/80 to-transparent flex flex-col justify-end p-6"
          >
            <h3 className="  font-serif text-base font-normal mb-1.5 tracking-tight">
              {artwork.title}
            </h3>
            <p className=" /80 text-xs mb-3 tracking-wide">{artwork.artist}</p>
            <p className="  font-light text-sm tracking-wide">
              {formatPrice(artwork.price)}
            </p>
          </motion.div>

          {artwork.featured && (
            <div className="absolute top-4 right-4 bg-[var(--primary)]   px-3 py-1 text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      </Link>

      {/* Quick View Button */}
      {isHovered && onQuickView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 right-4 z-10"
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(artwork);
            }}
            className="bg-white/95 hover:bg-white p-2.5 transition-all backdrop-blur-sm"
            aria-label="Quick view"
          >
            <svg className="w-4 h-4 text-[var(--text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
