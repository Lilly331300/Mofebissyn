"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "dark",
}: SectionHeaderProps) {
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75 }}
      className={align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-5xl"}
    >
      <div
        className={`mx-auto flex w-fit items-center gap-3 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] sm:text-xs ${
          align === "left" ? "mx-0" : ""
        } ${
          isLight
            ? "border-pine/15 bg-pine/5 text-emerald"
            : "border-lime-glow/25 bg-lime-glow/10 text-lime-glow"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${
            isLight ? "bg-emerald" : "bg-lime-glow"
          }`}
        />
        {eyebrow}
      </div>

      <h2
        className={`mt-6 font-heading text-4xl font-black leading-[0.92] tracking-[-0.065em] sm:text-5xl md:text-6xl lg:text-7xl ${
          isLight ? "text-pine" : "text-ivory"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-6 text-base font-medium leading-8 sm:text-lg md:text-xl ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          } ${isLight ? "text-pine/70" : "text-ivory/72"}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}