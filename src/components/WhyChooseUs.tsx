"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Handshake,
  HeartHandshake,
  Layers3,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    text: "Clear communication, honest guidance, and accountable support.",
  },
  {
    icon: Globe,
    title: "Global Confidence",
    text: "Built for international education, travel, and professional pathways.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Guidance",
    text: "Every client journey is treated as unique and goal-specific.",
  },
  {
    icon: Smartphone,
    title: "Tech-Savvy Support",
    text: "Paperless processes, online consultation, and digital tracking.",
  },
  {
    icon: Layers3,
    title: "End-to-End Coverage",
    text: "Admissions, visa, transcript, test prep, travel, and training support.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnerships",
    text: "Designed to connect users with credible institutions and trusted partners.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="section-space relative overflow-hidden bg-ivory text-pine">
      <div className="absolute inset-0 bg-[url('/images/campus-student.jpg')] bg-cover bg-center opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/96 to-ivory" />
      <div className="absolute -left-40 top-12 h-[30rem] w-[30rem] rounded-full bg-lime-glow/18 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-emerald/10 blur-[120px]" />

      <div className="premium-shell relative">
        <SectionHeader
          theme="light"
          eyebrow="Why Mofebissyn"
          title="Why people will trust Mofebissyn."
          description="The brand combines professionalism, empathy, technology, and reliable global guidance."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.7 }}
                className="rounded-[2.4rem] border border-pine/10 bg-white/90 p-8 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pine text-lime-glow shadow-xl">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-7 font-heading text-3xl font-black leading-tight tracking-[-0.045em]">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-8 text-pine/68">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}