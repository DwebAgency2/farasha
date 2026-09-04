"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, UploadCloud, FileText, Send } from "lucide-react";
import { analytics } from "@/lib/analytics";

type CandidateFormValues = {
  name: string;
  email: string;
  phone?: string;
  currentRole: string;
  yearsExperience: string;
  therapeuticAreas: string;
  preferences: string;
  linkedinUrl?: string;
  notes?: string;
};

export default function CandidateAppForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CandidateFormValues>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const onSubmit = async (data: CandidateFormValues) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Candidate Career Application",
          ...data,
          resumeAttached: fileName || "None provided",
        }),
      });

      if (res.ok) {
        setStatus("success");
        analytics.formSubmitProfessional(data.currentRole);
        reset();
        setFileName(null);
      } else {
        const err = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(err.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out to farasha@farashacrp.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-teal-900/10 border border-teal-500/30 p-8 sm:p-10 text-center space-y-4">
        <div className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900">Profile Received</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
          Thank you for introducing yourself. Amanda reviews every submission personally. We evaluate matches based on your therapeutic depth and career goals — not just automated keywords. You will hear back within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-5 py-2.5 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
        >
          Submit another update
        </button>
      </div>
    );
  }

  return (
    <form
      id="apply"
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
          Candidate Intake
        </span>
        <h3 className="text-2xl font-bold text-navy-900 mt-1">
          Introduce yourself
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Your background, therapeutic areas, and what you&apos;re looking for next. A rough draft resume is completely fine — polishing it is part of what we do.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            {...register("name", { required: "Full name is required" })}
            type="text"
            placeholder="Jane Doe, CCRP"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.name && (
            <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Personal / Preferred Email *
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="jane.doe@gmail.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Current Role */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Current / Most Recent Role *
          </label>
          <select
            {...register("currentRole", { required: "Please select current role" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select your role...</option>
            <option value="Senior CRA">Senior CRA / Lead CRA</option>
            <option value="CRA II">CRA II</option>
            <option value="CRA I">CRA I</option>
            <option value="Clinical Trial Manager (CTM)">Clinical Trial Manager (CTM)</option>
            <option value="Clinical Trial Assistant (CTA)">Clinical Trial Assistant (CTA)</option>
            <option value="Clinical Research Coordinator (CRC)">Clinical Research Coordinator (CRC)</option>
            <option value="Other Clinical Role">Other Clinical Ops Role</option>
          </select>
          {errors.currentRole && (
            <p className="text-xs text-rose-500 mt-1">{errors.currentRole.message}</p>
          )}
        </div>

        {/* Years of Experience */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Years in Clinical Research *
          </label>
          <select
            {...register("yearsExperience", { required: "Please select experience level" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select years...</option>
            <option value="1-2 years">1–2 years</option>
            <option value="3-5 years">3–5 years</option>
            <option value="6-9 years">6–9 years</option>
            <option value="10+ years">10+ years</option>
          </select>
          {errors.yearsExperience && (
            <p className="text-xs text-rose-500 mt-1">{errors.yearsExperience.message}</p>
          )}
        </div>

        {/* Desired Next Step */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Target Next Move *
          </label>
          <select
            {...register("preferences", { required: "Please select preference" })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">What are you seeking?</option>
            <option value="Contract CRA (1099/W2)">Contract CRA (Flexible / Project-based)</option>
            <option value="Direct-Hire / Permanent">Direct-Hire / Permanent Sponsor/CRO</option>
            <option value="Step up to CTM">Step up to Clinical Trial Manager (CTM)</option>
            <option value="Exploring options / Confidential">Exploring quietly / Curious</option>
          </select>
          {errors.preferences && (
            <p className="text-xs text-rose-500 mt-1">{errors.preferences.message}</p>
          )}
        </div>

        {/* Therapeutic Areas */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Primary Therapeutic Areas & Study Phases *
          </label>
          <input
            {...register("therapeuticAreas", { required: "Therapeutic area background is required" })}
            type="text"
            placeholder="e.g. Oncology (Solid Tumors Phase I-III), Hematology, Rare Pediatric Diseases..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.therapeuticAreas && (
            <p className="text-xs text-rose-500 mt-1">{errors.therapeuticAreas.message}</p>
          )}
        </div>

        {/* Resume Upload Box */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Resume / CV Upload (PDF, DOCX)
          </label>
          <div className="border-2 border-dashed border-slate-200 hover:border-teal-500/50 rounded-2xl p-5 text-center transition-colors">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="cursor-pointer flex flex-col items-center justify-center space-y-2"
            >
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                <UploadCloud className="w-5 h-5" />
              </div>
              {fileName ? (
                <div className="flex items-center gap-2 text-teal-700 font-semibold text-xs">
                  <FileText className="w-4 h-4" />
                  <span>{fileName}</span>
                </div>
              ) : (
                <>
                  <span className="text-xs font-semibold text-teal-700 hover:underline">
                    Click to browse your resume
                  </span>
                  <span className="text-[11px] text-slate-400">
                    PDF, DOC, DOCX up to 10MB
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* LinkedIn Profile */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            LinkedIn Profile URL (Optional)
          </label>
          <input
            {...register("linkedinUrl")}
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
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
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Profile...</span>
            </>
          ) : (
            <>
              <span>Submit My Clinical Profile</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
