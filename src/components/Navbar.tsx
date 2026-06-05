"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#pathway" },
  { label: "Survey", href: "#survey" },
];

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-pine/82 py-3 shadow-2xl backdrop-blur-2xl"
          : "py-5"
      }`}
    >
      <div className="premium-shell flex items-center justify-between">
        <a href="#home" className="relative h-12 w-44 sm:w-52">
          <Image
            src="/images/logo.png"
            alt="Mofebissyn Edutours Ltd"
            fill
            priority
            className="object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-ivory/70 transition hover:text-lime-glow"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#survey"
          className="hidden items-center gap-2 rounded-full bg-lime-glow px-5 py-3 text-sm font-black text-pine shadow-lime transition hover:scale-105 lg:inline-flex"
        >
          <Sparkles className="h-4 w-4" />
          Join Survey
        </a>

        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-pine/96 p-6 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/logo.png"
                  alt="Mofebissyn"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-12 grid gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 font-heading text-3xl font-black"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#survey"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="rounded-full bg-lime-glow px-6 py-5 text-center font-black text-pine"
              >
                Join Survey
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}