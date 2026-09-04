"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, ArrowRight, Building2, Send } from "lucide-react";
import { analytics } from "@/lib/analytics";

type SponsorFormValues = {
  organization: string;
  name: string;
  email: string;
  phone?: string;
  rolesNeeded: string;
  therapeuticArea: string;
  studyPhase: string;
  details: string;
};

export default function SponsorInquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SponsorFormValues>();

  const onSubmit = async (data: SponsorFormValues) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Sponsor / CRO Staffing Inquiry",
          ...data,
        }),
      });

      if (res.ok) {
        setStatus("success");
        analytics.formSubmitSponsor(data.studyPhase, data.therapeuticArea);
        reset();
      } else {
        const err = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(err.message || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email farasha@farashacrp.com directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-teal-900/10 border border-teal-500/30 p-8 sm:p-10 text-center space-y-4">
        <div className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900">Inquiry Received</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
          Thank you for reaching out. Your study requirements have been forwarded directly to Amanda Sanchez, RN, CCRP. You will receive a direct response within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-5 py-2.5 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      id="inquiry"
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Direct Intake
        </span>
        <h3 className="text-2xl font-bold text-navy-900 mt-1">
          Tell us about your study
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Therapeutic area, study phase, and what&apos;s slowing you down. We respond within one business day — with substance, not a sales pitch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Organization */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Sponsor or CRO Name *
          </label>
          <input
            {...register("organization", { required: "Organization name is required" })}
            type="text"
            placeholder="e.g. BioTherapeutics Inc."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          {errors.organization && (
            <p className="text-xs text-rose-500 mt-1">{errors.organization.message}</p>
          )}
        </div>

        {/* Contact Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Your Name & Title *
          </label>
          <input
            {...register("name", { required: "Your name is required" })}
            type="text"
            placeholder="e.g. Dr. Sarah Jenkins, Director of Clinical Ops"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          {errors.name && (
            <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Work Email *
          </label>
          <input
            {...register("email", {
              required: "Work email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="s.jenkins@biotherapeutics.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          {errors.email && (
            <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Phone Number (Optional)
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(555) 000-0000"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        {/* Roles Needed */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Staffing / Resourcing Need *
          </label>
          <select
            {...register("rolesNeeded", { required: "Please select a role" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select primary need...</option>
            <option value="CRA (Contract)">Clinical Research Associate (Contract)</option>
            <option value="CRA (Permanent)">Clinical Research Associate (Direct-Hire)</option>
            <option value="CTM">Clinical Trial Manager (CTM)</option>
            <option value="CTA">Clinical Trial Assistant (CTA)</option>
            <option value="Consulting">Trial Operations Consulting</option>
            <option value="Multiple">Full Team / Multiple Roles</option>
          </select>
          {errors.rolesNeeded && (
            <p className="text-xs text-rose-500 mt-1">{errors.rolesNeeded.message}</p>
          )}
        </div>

        {/* Therapeutic Area */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Therapeutic Area *
          </label>
          <select
            {...register("therapeuticArea", { required: "Please select indication" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select therapeutic area...</option>
            <option value="Oncology / Hematology">Oncology / Hematology</option>
            <option value="Rare Disease / Orphan">Rare Disease / Orphan</option>
            <option value="Cardiology / Vascular">Cardiology / Vascular</option>
            <option value="CNS / Neurology">CNS / Neurology</option>
            <option value="Immunology / Autoimmune">Immunology / Autoimmune</option>
            <option value="Infectious Disease / Vaccines">Infectious Disease / Vaccines</option>
            <option value="Endocrinology / Metabolic">Endocrinology / Metabolic</option>
            <option value="Medical Device">Medical Device</option>
            <option value="Other">Other Indication</option>
          </select>
          {errors.therapeuticArea && (
            <p className="text-xs text-rose-500 mt-1">{errors.therapeuticArea.message}</p>
          )}
        </div>

        {/* Study Phase */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Study Phase *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {["Phase I", "Phase II", "Phase III", "Phase IV / Registry"].map((phase) => (
              <label
                key={phase}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <input
                  type="radio"
                  value={phase}
                  {...register("studyPhase", { required: "Please select study phase" })}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span>{phase}</span>
              </label>
            ))}
          </div>
          {errors.studyPhase && (
            <p className="text-xs text-rose-500 mt-1">{errors.studyPhase.message}</p>
          )}
        </div>

        {/* Details Textarea */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Study Details, Protocol Timelines, or Specific Requirements
          </label>
          <textarea
            {...register("details")}
            rows={4}
            placeholder="Tell us about your upcoming milestones, site volume, monitoring visit frequencies, or specific regional coverage needed..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          ></textarea>
        </div>
      </div>

      {status === "error" && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
          {errorMessage}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-teal-900/10"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Requirements...</span>
            </>
          ) : (
            <>
              <span>Request Vetted Talent</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
