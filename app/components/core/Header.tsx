"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="w-full bg-primary text-center py-2 text-xs text-accent/80">
        <p>Seeking new artists for consignment. <a href="#contact" className="underline hover:text-white">Contact us to apply</a></p>
      </div>
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl text-secondary font-semibold font-serif">
            Pink Shades Art Gallery
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
        </nav>
      </header>
    </>
  );
}