"use client";

import Image from "next/image";
import { ArrowRight, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="fancy-grid relative min-h-screen overflow-hidden bg-brand-radial pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-global-consultation.jpg')] bg-cover bg-center opacity-[0.24]" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine/75 via-pine/88 to-pine" />
      <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-lime-glow/20 blur-[120px]" />
      <div className="absolute -right-28 top-24 hidden h-[34rem] w-[34rem] rounded-full border border-lime-glow/20 lg:block" />

      <div className="premium-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="pt-8 sm:pt-0"
        >
          <div className="flex w-fit items-center gap-3">
            <span className="h-px w-10 bg-lime-glow/55" />

            <p className="font-heading text-sm font-black uppercase tracking-[0.34em] text-lime-glow sm:text-base">
              Coming soon
            </p>

            <span className="h-px w-10 bg-lime-glow/55" />
          </div>

          <h1 className="mt-7 max-w-5xl font-heading text-5xl font-black leading-[0.88] tracking-[-0.075em] text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
            Your Global Journey Starts Here
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/75 sm:text-lg md:text-xl">
            Mofebissyn Edutours is building a smarter way for students,
            professionals, parents, and travelers to access trusted global
            education, visa, training, transcript, and travel support.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#survey"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-glow px-7 py-4 font-black text-pine shadow-lime transition hover:scale-[1.03]"
            >
              Join the Early Access Survey
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-ivory backdrop-blur-xl transition hover:bg-white/15"
            >
              Explore the Project
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-lime-glow/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/[0.08] p-3 shadow-premium backdrop-blur-2xl sm:rounded-[3rem]">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.7rem] sm:rounded-[2.3rem]">
              <Image
                src="/images/hero-global-consultation.jpg"
                alt="Premium study abroad consultation"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/20 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-white/15 bg-pine/82 p-5 backdrop-blur-2xl sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-[2rem]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-glow text-pine">
                  <Globe2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-bold text-ivory/60">
                    Global pathway
                  </p>
                  <p className="font-heading text-xl font-black sm:text-2xl">
                    Study. Train. Travel.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 -top-8 hidden h-40 w-40 lg:block"
          >
            <Image
              src="/images/pathway-globe.png"
              alt="Global pathway icon"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}