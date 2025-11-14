"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Como funciona", href: "#processo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Casos", href: "#casos" },
  { label: "Planos", href: "#planos" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-bold text-gradient-amber">
            ProceX
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform">
              Falar com especialista
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">
              Falar com especialista
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
