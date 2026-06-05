"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bell,
  CalendarCheck,
  FileUp,
  Gauge,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Gauge, title: "Eligibility assessment" },
  { icon: FileUp, title: "Document upload" },
  { icon: CalendarCheck, title: "Consultation booking" },
  { icon: ShieldCheck, title: "Application tracking" },
  { icon: Bell, title: "Deadline reminders" },
];

export function ComingSoonPreview() {
  return (
    <section className="section-space relative overflow-hidden bg-gradient-to-b from-pine via-emerald-dark to-pine">
      <div className="absolute inset-0 bg-[url('/images/dashboard-preview.jpg')] bg-cover bg-center opacity-[0.18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/88 to-pine/55" />
      <div className="absolute -left-44 bottom-0 h-[32rem] w-[32rem] rounded-full bg-lime-glow/14 blur-[120px]" />

      <div className="premium-shell relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Coming soon"
            title="A digital platform is coming."
            description="Mofebissyn will evolve into a seamless web and mobile client platform where users can submit documents, book consultations, track applications, and receive structured guidance."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.075] p-4 backdrop-blur-xl"
                >
                  <Icon className="h-5 w-5 text-lime-glow" />
                  <span className="text-sm font-bold text-ivory/78">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 42, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-lime-glow/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.08] p-3 shadow-premium backdrop-blur-2xl">
            <Image
              src="/images/dashboard-preview.jpg"
              alt="Mofebissyn digital platform preview"
              width={1200}
              height={800}
              className="rounded-[2.3rem] object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/10 bg-pine/82 p-5 backdrop-blur-2xl sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-glow text-pine">
                  <MonitorSmartphone className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-bold text-ivory/60">
                    Future platform
                  </p>
                  <p className="font-heading text-xl font-black sm:text-2xl">
                    Track everything online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}