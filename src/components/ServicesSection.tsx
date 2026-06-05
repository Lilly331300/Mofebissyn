"use client";

import {
  BookOpenCheck,
  FileCheck2,
  GraduationCap,
  Plane,
  ScrollText,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: GraduationCap,
    title: "International Admission Processing",
    description:
      "University and college placement, application guidance, document verification, offer tracking, and program matching.",
    image: "/images/campus-student.jpg",
  },
  {
    icon: FileCheck2,
    title: "Visa Consultation Services",
    description:
      "Student, tourist, and visitation visa advisory with document review, mock interviews, and embassy preparation.",
    image: "/images/visa-documents.jpg",
  },
  {
    icon: ScrollText,
    title: "Transcript Retrieval & Evaluation",
    description:
      "Online transcript request, credential verification, evaluation support, and secure delivery to foreign institutions.",
    image: "/images/transcript-workspace.jpg",
  },
  {
    icon: BookOpenCheck,
    title: "Standardized Test Preparation",
    description:
      "IELTS, TOEFL, GRE, GMAT, SAT coaching, mock tests, registration support, and one-on-one mentorship.",
    image: "/images/test-prep.jpg",
  },
  {
    icon: Plane,
    title: "Travel & Tourism Support",
    description:
      "Travel advisory, hotel booking support, travel insurance guidance, itinerary planning, and safety orientation.",
    image: "/images/travel-luxury.jpg",
  },
  {
    icon: Smartphone,
    title: "Digital Client Platform",
    description:
      "Eligibility assessment, document upload, consultation booking, service requests, tracking, and deadline reminders.",
    image: "/images/dashboard-preview.jpg",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-space relative overflow-hidden bg-gradient-to-b from-emerald-dark to-pine"
    >
      <div className="absolute inset-0 bg-[url('/images/visa-documents.jpg')] bg-cover bg-center opacity-[0.1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-dark/96 via-pine/94 to-pine" />
      <div className="absolute left-1/2 top-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lime-glow/12 blur-[120px]" />

      <div className="premium-shell relative">
        <SectionHeader
          eyebrow="Core services"
          title="Support for every major step of your journey."
          description="From admission and visa guidance to transcripts, test preparation, travel support, and digital tracking — Mofebissyn is designed to support the full pathway."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}