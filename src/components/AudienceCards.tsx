"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  PlaneTakeoff,
  UserRound,
  UsersRound,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const audiences = [
  {
    icon: UserRound,
    title: "Students",
    text: "Secondary school leavers, graduates, and postgraduate candidates.",
  },
  {
    icon: UsersRound,
    title: "Parents & Guardians",
    text: "Sponsors who need trusted, transparent support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Working Professionals",
    text: "Professionals seeking training, certification, and relocation opportunities.",
  },
  {
    icon: PlaneTakeoff,
    title: "Tourists & Travelers",
    text: "Individuals and groups exploring leisure, business, or cultural travel.",
  },
  {
    icon: Building2,
    title: "Institutions",
    text: "Foreign schools seeking reliable Nigerian recruitment and processing partners.",
  },
];

export function AudienceCards() {
  return (
    <section className="section-space relative overflow-hidden bg-pine">
      <div className="absolute inset-0 bg-[url('/images/airport-family.jpg')] bg-cover bg-center opacity-[0.12]" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine via-pine/92 to-emerald-dark" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lime-glow/12 blur-[120px]" />

      <div className="premium-shell relative">
        <SectionHeader
          eyebrow="Audience"
          title="Designed for every global dreamer."
          description="Mofebissyn is for people who want credible, beautiful, and structured support before taking international steps."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.7 }}
                className="rounded-[2.3rem] border border-white/10 bg-white/[0.07] p-7 text-center shadow-2xl backdrop-blur-2xl transition hover:-translate-y-2 hover:border-lime-glow/35"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-glow text-pine shadow-lime">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-7 font-heading text-3xl font-black leading-tight tracking-[-0.045em]">
                  {audience.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-ivory/68">
                  {audience.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}