"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck } from "lucide-react";

const bullets = [
  "Guided global education decisions",
  "Structured visa and document preparation",
  "Digital upload, review, and tracking",
  "Discount eligibility for early survey users",
];

export function PathwayShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-dark via-pine to-emerald section-space">
      <div className="absolute -left-44 top-20 h-[32rem] w-[32rem] rounded-full bg-lime-glow/15 blur-[120px]" />
      <div className="absolute -right-44 bottom-0 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-[120px]" />

      <div className="premium-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-lime-glow/20"
          />

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/pathway-globe.png"
              alt="Global pathway"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="lime-pill">
            <Globe2 className="h-4 w-4" />
            Global pathways
          </span>

          <h2 className="mt-6 font-heading text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
            Designed for progress beyond borders.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/70">
            Mofebissyn’s identity is built around access, direction, and
            elevation. The digital platform will turn that into a real client
            journey — from first inquiry to global opportunity.
          </p>

          <div className="mt-8 grid gap-3">
            {bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <ShieldCheck className="h-5 w-5 text-lime-glow" />
                <span className="font-bold text-ivory/78">{bullet}</span>
              </div>
            ))}
          </div>

          <a
            href="#survey"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-glow px-7 py-4 font-black text-pine shadow-lime transition hover:scale-[1.02]"
          >
            Share your global dream
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}