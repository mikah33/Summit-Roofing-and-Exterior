"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s()+.-]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  zip: z
    .string()
    .regex(/^\d{5}$/, "Please enter a 5-digit ZIP code"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-royal focus:outline-none focus:ring-4 focus:ring-royal/10";

export function LeadForm({
  compact = false,
  defaultService,
}: {
  compact?: boolean;
  defaultService?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: defaultService ?? "" },
  });

  const onSubmit = async (data: FormData) => {
    // Wire to your CRM / email endpoint (e.g. /api/lead, Resend, HubSpot).
    await new Promise((r) => setTimeout(r, 900));
    console.log("Lead submitted", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-soft"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy">
          Request received — thank you!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          A Summit team member will call you within one business hour (7am–6pm).
          Need us right now? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-royal">
            {site.phone}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={compact ? "space-y-3" : "space-y-4"}
    >
      <div className={compact ? "space-y-3" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="lead-name" className="sr-only">
            Full name
          </label>
          <input
            id="lead-name"
            placeholder="Full name"
            autoComplete="name"
            className={inputCls}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lead-phone" className="sr-only">
            Phone number
          </label>
          <input
            id="lead-phone"
            type="tel"
            placeholder="Phone number"
            autoComplete="tel"
            className={inputCls}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lead-email" className="sr-only">
            Email address
          </label>
          <input
            id="lead-email"
            type="email"
            placeholder="Email address"
            autoComplete="email"
            className={inputCls}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lead-zip" className="sr-only">
            ZIP code
          </label>
          <input
            id="lead-zip"
            inputMode="numeric"
            placeholder="ZIP code"
            autoComplete="postal-code"
            className={inputCls}
            aria-invalid={!!errors.zip}
            {...register("zip")}
          />
          {errors.zip && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-500">
              {errors.zip.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="lead-service" className="sr-only">
          Service needed
        </label>
        <select
          id="lead-service"
          className={`${inputCls} appearance-none`}
          aria-invalid={!!errors.service}
          {...register("service")}
        >
          <option value="">What do you need help with?</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
        {errors.service && (
          <p role="alert" className="mt-1 text-xs font-medium text-red-500">
            {errors.service.message}
          </p>
        )}
      </div>

      {!compact && (
        <div>
          <label htmlFor="lead-message" className="sr-only">
            Project details
          </label>
          <textarea
            id="lead-message"
            rows={4}
            placeholder="Tell us about your project (optional)"
            className={inputCls}
            {...register("message")}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-heading font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark disabled:opacity-60"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {isSubmitting ? "Sending..." : "Get My Free Estimate"}
      </button>
      <p className="text-center text-xs text-slate-400">
        No spam, no obligation. We respond within one business hour.
      </p>
    </form>
  );
}
