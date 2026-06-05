"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-pine py-24">
      <div className="premium-shell">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.06] p-8 shadow-premium backdrop-blur-2xl sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-[url('/images/airport-family.jpg')] bg-cover bg-center opacity-[0.16]" />
          <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/85 to-pine/30" />

          <div className="absolute right-10 top-10 hidden h-28 w-48 opacity-70 lg:block">
            <Image
              src="/images/logo.png"
              alt="Mofebissyn"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative max-w-3xl">
            <span className="lime-pill">
              <Sparkles className="h-4 w-4" />
              Launch discount for early survey users
            </span>

            <h2 className="mt-6 font-heading text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Your dreams are bigger than borders.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/75">
              Be part of the early community shaping a smarter global pathway
              for education, travel, visa support, transcripts, training, and
              professional growth.
            </p>

            <a
              href="#survey"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-glow px-7 py-4 font-black text-pine shadow-lime transition hover:scale-[1.02]"
            >
              Join the early access survey
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}