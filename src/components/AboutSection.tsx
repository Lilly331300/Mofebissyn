"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Compass, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: BadgeCheck,
    title: "Mission",
    text: "To empower Nigerians and Africans with seamless access to global education, travel, and professional opportunities through innovative, ethical, and personalized consulting services.",
  },
  {
    icon: Compass,
    title: "Vision",
    text: "To become Africa’s most trusted international education and travel consultancy, connecting dreams with destinations and ambitions with achievements.",
  },
  {
    icon: Rocket,
    title: "Motto",
    text: "Empowering Global Dreams through credible guidance, modern technology, and human-centered support.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-space relative overflow-hidden bg-pine">
      <div className="absolute inset-0 bg-[url('/images/transcript-workspace.jpg')] bg-cover bg-center opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine via-pine/94 to-emerald-dark" />
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-lime-glow/15 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[26rem] w-[26rem] rounded-full bg-white/10 blur-[100px]" />

      <div className="premium-shell relative">
        <SectionHeader
          eyebrow="Project overview"
          title="Built to simplify global opportunities."
          description="Mofebissyn Edutours Ltd is a premium education, travel, visa, transcript, and training consultancy platform designed to make complex global processes clearer, safer, and more accessible."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                className="group rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-2xl transition hover:-translate-y-2 hover:border-lime-glow/35 sm:p-8"
              >
                <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-lime-glow text-pine shadow-lime">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 font-heading text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-ivory/70">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}