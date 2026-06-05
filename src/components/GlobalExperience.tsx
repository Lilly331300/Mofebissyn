"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    title: "For families planning a safer move",
    image: "/images/airport-family.jpg",
    text: "Clear travel and education support for parents, guardians, and families who want trusted guidance before making big decisions.",
  },
  {
    title: "For students chasing admission goals",
    image: "/images/campus-student.jpg",
    text: "A guided pathway from choosing the right program to preparing documents and tracking admission progress.",
  },
  {
    title: "For professionals seeking global growth",
    image: "/images/test-prep.jpg",
    text: "Training, certifications, test preparation, and international opportunity guidance for ambitious working professionals.",
  },
];

export function GlobalExperience() {
  return (
    <section className="section-space relative overflow-hidden bg-ivory text-pine">
      <div className="absolute inset-0 bg-[url('/images/hero-global-consultation.jpg')] bg-cover bg-center opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/95 to-ivory" />
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-lime-glow/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-emerald/10 blur-[120px]" />

      <div className="premium-shell relative">
        <SectionHeader
          theme="light"
          eyebrow="Global experience"
          title="A premium journey from first question to final destination."
          description="The Mofebissyn experience is designed to feel organized, beautiful, reassuring, and personal — not confusing or stressful."
        />

        <div className="mt-16 grid gap-7 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group overflow-hidden rounded-[2.7rem] bg-pine text-ivory shadow-premium"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/20 to-transparent" />

                <div className="absolute right-5 top-5 flex h-13 w-13 items-center justify-center rounded-full bg-lime-glow text-pine shadow-lime">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-heading text-3xl font-black leading-tight tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-ivory/68">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}