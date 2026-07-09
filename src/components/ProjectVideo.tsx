"use client";

import { motion } from "framer-motion";
import { PlayCircle, ShieldCheck, Globe2, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const videoHighlights = [
  "Understand the Mofebissyn vision",
  "See how the digital platform will support users",
  "Learn why your survey response matters before launch",
];

export function ProjectVideo() {
  return (
    <section
      id="project-video"
      className="section-space relative overflow-hidden bg-gradient-to-b from-emerald-dark via-pine to-emerald-dark"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-flags-bg.jpg')] bg-cover bg-center opacity-[0.14]" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine/86 via-pine/92 to-pine/88" />
      <div className="absolute -left-44 top-20 h-[32rem] w-[32rem] rounded-full bg-lime-glow/14 blur-[120px]" />
      <div className="absolute -right-44 bottom-10 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-[120px]" />

      <div className="premium-shell relative">
        <SectionHeader
          eyebrow="Project video"
          title="Watch the vision behind Mofebissyn."
          description="Before joining the survey, watch a short overview of what Mofebissyn is building for students, parents, professionals, and travelers."
        />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-lime-glow/18 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.075] p-3 shadow-premium backdrop-blur-2xl">
              <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-pine">
                <iframe
                  src="https://drive.google.com/file/d/1-9hkTUsCynwOs_D3jBtDiZBCLeCkLE4C/preview"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                  title="Mofebissyn Edutours project overview video"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.065] p-7 shadow-2xl backdrop-blur-2xl sm:p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-glow text-pine shadow-lime">
              <PlayCircle className="h-8 w-8" />
            </div>

            <h3 className="mt-7 font-heading text-3xl font-black leading-tight tracking-[-0.045em] text-ivory sm:text-4xl">
              A smarter pathway for global opportunities.
            </h3>

            <p className="mt-5 leading-8 text-ivory/70">
              Mofebissyn is being designed to simplify global education, visa,
              transcript, training, and travel support through a more trusted,
              organized, and digital-first experience.
            </p>

            <div className="mt-7 space-y-3">
              {videoHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-lime-glow" />
                  <span className="text-sm font-bold text-ivory/78">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[2rem] border border-lime-glow/25 bg-lime-glow/10 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-glow text-pine">
                  <Globe2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-heading text-xl font-black text-ivory">
                    Watch, then share your feedback.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ivory/68">
                    After watching the video, complete the questionnaire to help
                    shape the platform before launch and reserve your early
                    access ticket.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#survey"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-lime-glow px-7 py-4 font-black text-pine shadow-lime transition hover:scale-[1.02]"
            >
              <Sparkles className="h-5 w-5" />
              Fill the questionnaire
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}