"use client";

import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  index: number;
};

export function ServiceCard({
  title,
  description,
  image,
  icon: Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.07, duration: 0.65 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-lime-glow/35"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/25 to-transparent" />
        <div className="absolute bottom-5 left-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-lime-glow text-pine shadow-lime">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-2xl font-black tracking-[-0.035em]">
          {title}
        </h3>
        <p className="mt-3 leading-7 text-ivory/66">{description}</p>
      </div>
    </motion.article>
  );
}