"use client";

import { motion } from "framer-motion";
import { FileUp, Lightbulb, MapPinned, Route } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    icon: Lightbulb,
    title: "Tell Us Your Goal",
    text: "Study, train, travel, relocate, or explore opportunities.",
  },
  {
    icon: FileUp,
    title: "Upload Your Details",
    text: "Submit basic information and required documents digitally.",
  },
  {
    icon: MapPinned,
    title: "Get Matched & Guided",
    text: "Receive personalized recommendations and expert support.",
  },
  {
    icon: Route,
    title: "Track Your Journey",
    text: "Follow updates, next steps, deadlines, and outcomes.",
  },
];

export function HowItWorks() {
  return (
    <section id="pathway" className="section-space relative overflow-hidden bg-pine">
      <div className="absolute inset-0 bg-[url('/images/dashboard-preview.jpg')] bg-cover bg-center opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine via-pine/88 to-pine" />
      <div className="absolute -right-44 top-32 h-[34rem] w-[34rem] rounded-full bg-lime-glow/14 blur-[130px]" />
      <div className="absolute -left-44 bottom-0 h-[34rem] w-[34rem] rounded-full bg-white/10 blur-[130px]" />

      <div className="premium-shell relative">
        <SectionHeader
          eyebrow="How it works"
          title="A clear pathway from dream to destination."
          description="The future Mofebissyn digital platform will help users move from confusion to clarity with structured, trackable steps."
        />

        <div className="relative mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-lime-glow/45 to-transparent lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="relative rounded-[2.4rem] border border-white/10 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-2xl transition hover:-translate-y-2 hover:border-lime-glow/35"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-glow text-pine shadow-lime">
                  <Icon className="h-8 w-8" />
                </div>

                <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-lime-glow">
                  Step {index + 1}
                </p>

                <h3 className="mt-4 font-heading text-3xl font-black leading-tight tracking-[-0.045em]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-ivory/68">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}