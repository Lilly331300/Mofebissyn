"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Loader2,
  Send,
  ShieldCheck,
  Ticket,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  userType: "",
  serviceNeeded: "",
  preferredRegion: "",
  biggestChallenge: "",
  wantsOnlinePlatform: "",
  timeline: "",
  message: "",
};

type FormState = typeof initialForm;

const fieldClass =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 text-sm text-ivory outline-none transition placeholder:text-ivory/35 focus:border-lime-glow/60 focus:bg-white/[0.11]";

const labelClass = "text-sm font-bold text-ivory/75";

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (name: keyof FormState, value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>

      <input
        required
        type={type}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        className={fieldClass}
      />
    </label>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (name: keyof FormState, value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>

      <select
        required
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className={fieldClass}
      >
        <option value="" className="bg-pine">
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option} className="bg-pine">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SurveyForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function update(name: keyof FormState, value: string) {
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          launchTicketStatus: "Eligible for Mofebissyn launch ticket",
          launchTicketBenefit:
            "May qualify for discounts on selected services when the project launches",
        }),
      });

      if (!response.ok) {
        throw new Error("Could not submit response");
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setError(
        "Your response could not be saved yet. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="survey"
      className="section-space relative overflow-hidden bg-gradient-to-b from-emerald-dark via-pine to-emerald-dark"
    >
      <div className="absolute inset-0 bg-[url('/images/survey-card.jpg')] bg-cover bg-center opacity-[0.24]" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine/76 via-pine/90 to-pine/84" />
      <div className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lime-glow/18 blur-[110px]" />
      <div className="absolute -right-40 bottom-10 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-[120px]" />

      <div className="premium-shell relative">
        <SectionHeader
          eyebrow="Early access survey"
          title="Fill the survey and secure your launch ticket."
          description="Mofebissyn is still in development. Share your expectations now and receive an early-access ticket when the project launches. This ticket may qualify you for discounts on selected Mofebissyn services."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <motion.aside
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-lime-glow/25 bg-lime-glow/10 p-7 shadow-2xl backdrop-blur-2xl lg:sticky lg:top-28"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-glow text-pine shadow-lime">
              <Ticket className="h-8 w-8" />
            </div>

            <h3 className="mt-6 font-heading text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Get a launch ticket
            </h3>

            <p className="mt-4 leading-8 text-ivory/78">
              Everyone who completes this survey will be considered for a
              Mofebissyn early-access ticket when the project launches. The
              ticket may serve as a discount pass for selected services.
            </p>

            <div className="mt-6 rounded-[2rem] border border-lime-glow/25 bg-pine/50 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-glow text-pine">
                  <Gift className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-heading text-xl font-black text-ivory">
                    Possible ticket benefits
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ivory/68">
                    Discounts may apply to selected future services such as
                    consultation, document review, admission guidance, test prep,
                    or travel advisory.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Early-access ticket after launch",
                "Possible service discount eligibility",
                "Priority project updates before launch",
                "Helps shape the platform before it goes live",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.07] p-4"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-lime-glow" />

                  <span className="text-sm font-bold text-ivory/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.075] p-5 shadow-premium backdrop-blur-2xl sm:p-8"
          >
            <div className="mb-7 rounded-[2rem] border border-lime-glow/25 bg-lime-glow/10 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-glow text-pine">
                  <Sparkles className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-black tracking-[-0.035em] text-ivory">
                    Complete this form to reserve your launch ticket.
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-ivory/68">
                    Your ticket may be used later as proof of early interest and
                    may unlock discounts for selected Mofebissyn services when
                    the project officially launches.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={update}
                placeholder="Your full name"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
              />

              <Input
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="+234..."
              />

              <Input
                label="Location / City"
                name="location"
                value={form.location}
                onChange={update}
                placeholder="Ibadan, Lagos, Akure..."
              />

              <Select
                label="User Type"
                name="userType"
                value={form.userType}
                onChange={update}
                options={[
                  "Student",
                  "Parent/Guardian",
                  "Working Professional",
                  "Tourist/Traveler",
                  "Institution Representative",
                  "Other",
                ]}
              />

              <Select
                label="Service you need most"
                name="serviceNeeded"
                value={form.serviceNeeded}
                onChange={update}
                options={[
                  "Study Abroad Admission",
                  "Visa Consultation",
                  "Transcript Retrieval",
                  "Test Preparation",
                  "Travel/Tourism Support",
                  "Scholarship Guidance",
                  "Not sure yet",
                ]}
              />

              <Select
                label="Preferred country / region"
                name="preferredRegion"
                value={form.preferredRegion}
                onChange={update}
                options={[
                  "UK",
                  "Canada",
                  "USA",
                  "Europe",
                  "Asia",
                  "Australia",
                  "Africa",
                  "Not sure yet",
                ]}
              />

              <Select
                label="Biggest challenge"
                name="biggestChallenge"
                value={form.biggestChallenge}
                onChange={update}
                options={[
                  "Lack of trusted guidance",
                  "Visa/document issues",
                  "High cost",
                  "Choosing the right school/program",
                  "Transcript processing",
                  "Exam preparation",
                  "Fear of scams",
                  "Other",
                ]}
              />

              <Select
                label="Do you want an online platform?"
                name="wantsOnlinePlatform"
                value={form.wantsOnlinePlatform}
                onChange={update}
                options={["Yes", "No", "Maybe"]}
              />

              <Select
                label="How soon are you planning?"
                name="timeline"
                value={form.timeline}
                onChange={update}
                options={[
                  "Immediately",
                  "Within 3 months",
                  "Within 6 months",
                  "Within 1 year",
                  "Just researching for now",
                ]}
              />
            </div>

            <label className="mt-5 block">
              <span className={labelClass}>
                Tell us what you would love Mofebissyn to help you with
              </span>

              <textarea
                className={`${fieldClass} min-h-36 resize-none`}
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Write your expectations here..."
              />
            </label>

            {success ? (
              <div className="mt-5 rounded-2xl border border-lime-glow/30 bg-lime-glow/10 p-4 text-sm font-bold text-lime-glow">
                Thank you. Your response has been received. Your early-access
                launch ticket eligibility has been recorded. Mofebissyn will keep
                you updated before launch.
              </div>
            ) : null}

            {error ? (
              <div className="mt-5 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm font-bold text-red-200">
                {error}
              </div>
            ) : null}

            <button
              disabled={loading}
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-lime-glow px-7 py-5 text-base font-black text-pine shadow-lime transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              Submit & reserve my launch ticket
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}