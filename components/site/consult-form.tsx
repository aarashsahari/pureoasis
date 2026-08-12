"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { business, consult } from "@/lib/content";

/**
 * Consult request form.
 *
 * Labels sit above their input, hints and errors below. Every field that can
 * fail says so inline. The form carries four states: idle, submitting, sent
 * and failed, and the failed state keeps the visitor's answers so nothing has
 * to be retyped.
 */

type Status = "idle" | "submitting" | "sent" | "failed";
type Errors = Partial<Record<FieldName, string>>;

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "location"
  | "projectType"
  | "budget"
  | "timeline"
  | "message";

const fieldStyles =
  "w-full rounded-edge border border-line-strong bg-bg px-3.5 py-3 text-[15px] text-ink " +
  "placeholder:text-ink-muted transition-colors duration-200 hover:border-ink " +
  "focus:border-accent focus:outline-none";

function Field({
  name,
  label,
  hint,
  error,
  children,
}: {
  name: FieldName;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[13px] font-semibold text-ink">
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${name}-hint`} className="text-[12.5px] text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${name}-error`} className="flex items-center gap-1.5 text-[12.5px] text-ink">
          <WarningCircle size={14} weight="fill" className="text-accent" aria-hidden />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const location = String(data.get("location") ?? "").trim();
  const projectType = String(data.get("projectType") ?? "");

  if (name.length < 2) errors.name = "Please tell us who we should ask for.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "That address does not look complete.";
  if (location.length < 2) errors.location = "A street and city is enough to plan the visit.";
  if (!projectType) errors.projectType = "Pick the closest match. We can change it later.";

  return errors;
}

export function ConsultForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const reduce = useReducedMotion();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        className="flex flex-col items-start gap-5 rounded-edge border border-accent bg-bg p-8"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <CheckCircle size={28} weight="light" className="text-accent" aria-hidden />
        <div>
          <h3 className="display-tight text-[22px]">Request received.</h3>
          <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
            We answer within one business day with two or three walkthrough times. If it is
            urgent, call {business.phone} and ask for the design desk.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[14px] font-semibold text-ink underline underline-offset-4 transition-colors duration-200 hover:text-accent"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {status === "failed" ? (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-edge border border-line-strong bg-surface-2 p-4 text-[14px] text-ink"
        >
          <WarningCircle size={17} weight="light" className="mt-0.5 shrink-0 text-accent" aria-hidden />
          <p>
            That did not go through. Please try again, or email{" "}
            <a href={`mailto:${business.email}`} className="underline underline-offset-4">
              {business.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field name="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldStyles}
          />
        </Field>

        <Field name="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldStyles}
          />
        </Field>

        <Field name="phone" label="Phone" hint="Optional, but it speeds up scheduling.">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-describedby="phone-hint"
            className={fieldStyles}
          />
        </Field>

        <Field name="location" label="Property address" error={errors.location} hint="Street and city.">
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="street-address"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : "location-hint"}
            className={fieldStyles}
          />
        </Field>

        <Field name="projectType" label="Project" error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            defaultValue=""
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className={fieldStyles}
          >
            <option value="">Select one</option>
            {consult.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field name="budget" label="Budget range">
          <select id="budget" name="budget" defaultValue="" className={fieldStyles}>
            <option value="">Prefer to discuss</option>
            {consult.budgets.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field name="timeline" label="Timing">
        <select id="timeline" name="timeline" defaultValue={consult.timelines[0]} className={fieldStyles}>
          {consult.timelines.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field name="message" label="What are you hoping to change?" hint="A few lines is plenty.">
        <textarea
          id="message"
          name="message"
          rows={4}
          aria-describedby="message-hint"
          className={`${fieldStyles} resize-y`}
        />
      </Field>

      <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "submitting"} className="disabled:opacity-70">
          {status === "submitting" ? "Sending" : "Book a consult"}
          {status === "submitting" ? null : <ArrowRight size={17} weight="bold" aria-hidden />}
        </Button>
        <p className="text-[13px] text-ink-muted">
          Your details are used to arrange the visit and nothing else.
        </p>
      </div>
    </form>
  );
}
