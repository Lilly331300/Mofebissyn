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
  interest: "",
  interestOther: "",
  location: "",
  locationOther: "",
  currentStage: "",
  triedAdmissionOrVisa: "",
  stressfulPart: "",
  stressfulPartOther: "",
  transcriptDifficulty: "",
  transcriptFeature: "",
  visaChallenge: "",
  testSupport: "",
  accessPreference: "",
  platformTurnOff: "",
  desiredFeatures: [] as string[],
  convenienceFee: "",
  processTimeline: "",
  updatePreference: "",
  bonusAnswer: "",
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
  required = true,
  type = "text",
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (name: keyof FormState, value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input
        required={required}
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
  required = true,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (name: keyof FormState, value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>

      <select
        required={required}
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

function CheckboxGroup({
  label,
  values,
  selected,
  onToggle,
}: {
  label: string;
  values: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div>
      <p className={labelClass}>{label}</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {values.map((value) => {
          const checked = selected.includes(value);

          return (
            <button
              type="button"
              key={value}
              onClick={() => onToggle(value)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                checked
                  ? "border-lime-glow bg-lime-glow/15 text-lime-glow"
                  : "border-white/10 bg-white/[0.06] text-ivory/70 hover:border-lime-glow/40"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SurveyForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function update(name: keyof FormState, value: string) {
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function toggleFeature(value: string) {
    setForm((previous) => {
      const exists = previous.desiredFeatures.includes(value);

      return {
        ...previous,
        desiredFeatures: exists
          ? previous.desiredFeatures.filter((item) => item !== value)
          : [...previous.desiredFeatures, value],
      };
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Could not submit response");
      }

      setSuccess(
        "Thank you. Your response has been saved and your Mofebissyn launch ticket eligibility has been recorded."
      );

      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setError(
        "Your response could not be saved yet. Please check your connection and try again."
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
          eyebrow="User experience questionnaire"
          title="Help us build a platform that truly works for you."
          description="Your honest feedback will help Mofebissyn design a faster, friendlier, and more trusted online platform for education, travel, visa, transcript, and training support."
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
              Everyone who completes this questionnaire will be considered for a
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
                    transcript support, or travel advisory.
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
                    Your response will be saved securely in the project
                    spreadsheet and used to shape the first version of the
                    Mofebissyn platform.
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

              <Select
                label="1. Which of the following best describes what you’re currently interested in?"
                name="interest"
                value={form.interest}
                onChange={update}
                options={[
                  "Studying abroad",
                  "Applying for a visa",
                  "Getting my academic transcript or evaluation",
                  "Preparing or registering for a standardized test",
                  "Others",
                ]}
              />

              {form.interest === "Others" ? (
                <Input
                  label="Please specify your interest"
                  name="interestOther"
                  value={form.interestOther}
                  onChange={update}
                  placeholder="Type your interest"
                />
              ) : null}

              <Select
                label="2. Where are you currently based?"
                name="location"
                value={form.location}
                onChange={update}
                options={["Lagos", "Ibadan", "Abuja", "Other"]}
              />

              {form.location === "Other" ? (
                <Input
                  label="Please specify your location"
                  name="locationOther"
                  value={form.locationOther}
                  onChange={update}
                  placeholder="Your city/state"
                />
              ) : null}

              <Select
                label="3. What stage are you in right now?"
                name="currentStage"
                value={form.currentStage}
                onChange={update}
                options={[
                  "Just exploring my options",
                  "Ready to start my application",
                  "Already applied but need help completing it",
                  "Currently studying or working abroad",
                ]}
              />

              <Select
                label="4. Have you ever tried to process your international admission or visa before?"
                name="triedAdmissionOrVisa"
                value={form.triedAdmissionOrVisa}
                onChange={update}
                options={[
                  "Yes, successfully",
                  "Yes, but it was difficult",
                  "No, not yet",
                ]}
              />

              <Select
                label="5. What was the most stressful or frustrating part?"
                name="stressfulPart"
                value={form.stressfulPart}
                onChange={update}
                options={[
                  "Finding the right school or program",
                  "Too much paperwork and document requests",
                  "Delays or unresponsive agents",
                  "Lack of clear information",
                  "Cost or payment challenges",
                  "Others",
                ]}
              />

              {form.stressfulPart === "Others" ? (
                <Input
                  label="Please describe briefly"
                  name="stressfulPartOther"
                  value={form.stressfulPartOther}
                  onChange={update}
                  placeholder="Describe the issue"
                />
              ) : null}

              <Select
                label="6. How easy or difficult has it been to get your transcript or academic documents?"
                name="transcriptDifficulty"
                value={form.transcriptDifficulty}
                onChange={update}
                options={[
                  "Very easy",
                  "Somewhat easy",
                  "Difficult",
                  "Extremely difficult",
                ]}
              />

              <Select
                label="7. If we could simplify transcript retrieval online, what feature would matter most?"
                name="transcriptFeature"
                value={form.transcriptFeature}
                onChange={update}
                options={[
                  "Fast turnaround time",
                  "Regular progress updates",
                  "Secure document delivery",
                  "Affordability",
                  "Support and communication",
                ]}
              />

              <Select
                label="8. When applying for a visa, what do you usually struggle with?"
                name="visaChallenge"
                value={form.visaChallenge}
                onChange={update}
                options={[
                  "Understanding the requirements",
                  "Filling out the forms",
                  "Scheduling appointments",
                  "Gathering the right documents",
                  "Paying fees or accessing verified information",
                ]}
              />

              <Select
                label="9. For tests like IELTS, TOEFL, GRE, etc., what support do you need most?"
                name="testSupport"
                value={form.testSupport}
                onChange={update}
                options={[
                  "Registration guidance",
                  "Training classes",
                  "Study materials and mock tests",
                  "Exam reminders or scheduling help",
                ]}
              />

              <Select
                label="10. How would you prefer to access our services?"
                name="accessPreference"
                value={form.accessPreference}
                onChange={update}
                options={[
                  "Through a mobile app",
                  "Website",
                  "WhatsApp or social media chat",
                  "Physical office visit",
                ]}
              />

              <Select
                label="11. What usually turns you off when using online education or visa platforms?"
                name="platformTurnOff"
                value={form.platformTurnOff}
                onChange={update}
                options={[
                  "Complicated forms",
                  "Too many steps or unclear instructions",
                  "Hidden fees",
                  "Poor communication or slow response",
                  "Lack of trust or transparency",
                ]}
              />

              <Select
                label="13. Would you pay a small convenience fee for faster or fully digital service?"
                name="convenienceFee"
                value={form.convenienceFee}
                onChange={update}
                options={["Yes", "Maybe, depending on cost", "No"]}
              />

              <Select
                label="14. How soon would you like to complete your process?"
                name="processTimeline"
                value={form.processTimeline}
                onChange={update}
                options={[
                  "Within 2 weeks",
                  "1 month",
                  "2–3 months",
                  "No fixed timeline",
                ]}
              />

              <Select
                label="15. How would you like to be updated during your process?"
                name="updatePreference"
                value={form.updatePreference}
                onChange={update}
                options={[
                  "Email",
                  "WhatsApp messages",
                  "SMS",
                  "Dashboard notifications",
                ]}
              />
            </div>

            <div className="mt-6">
              <CheckboxGroup
                label="12. What features would make you love using a platform like Mofebissyn? You can select more than one."
                values={[
                  "Real-time tracking of my application",
                  "Live chat or counselor support",
                  "Price transparency and cost breakdown",
                  "Verified school listings and visa info",
                  "Easy document upload and download",
                ]}
                selected={form.desiredFeatures}
                onToggle={toggleFeature}
              />
            </div>

            <label className="mt-6 block">
              <span className={labelClass}>
                Bonus: In one sentence, if you could design the perfect education/travel support platform, what would it do for you?
              </span>

              <textarea
                className={`${fieldClass} min-h-36 resize-none`}
                value={form.bonusAnswer}
                onChange={(event) => update("bonusAnswer", event.target.value)}
                placeholder="Write your answer here..."
              />
            </label>

            {success ? (
              <div className="mt-5 rounded-2xl border border-lime-glow/30 bg-lime-glow/10 p-4 text-sm font-bold text-lime-glow">
                {success}
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