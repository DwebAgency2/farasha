"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { analytics } from "@/lib/analytics";

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
};

export default function GeneralContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "General Contact Inquiry",
          ...data,
        }),
      });

      if (res.ok) {
        setStatus("success");
        analytics.contactFormSubmit(data.inquiryType);
        reset();
      } else {
        const err = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(err.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email farasha@farashacrp.com.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-teal-900/10 border border-teal-500/30 p-8 text-center space-y-4">
        <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-navy-900">Message Received</h3>
        <p className="text-slate-600 max-w-sm mx-auto text-sm">
          Thank you for getting in touch. Amanda has received your message and will follow up within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-4 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Your Name *
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="First & Last Name"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.name && (
          <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Your Email *
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
          type="email"
          placeholder="you@domain.com"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.email && (
          <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Phone Number (Optional)
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="(737) 000-0000"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          I am a: *
        </label>
        <select
          {...register("inquiryType", { required: "Please select inquiry type" })}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="Sponsor/CRO">Sponsor or CRO looking for talent</option>
          <option value="Clinical Professional">Clinical Professional exploring roles</option>
          <option value="General Consulting">Organization seeking trial consulting</option>
          <option value="Other">Other Question or Partnership</option>
        </select>
        {errors.inquiryType && (
          <p className="text-xs text-rose-500 mt-1">{errors.inquiryType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Message *
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={4}
          placeholder="A sentence or two about your situation is plenty to start..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-teal-500"
        ></textarea>
        {errors.message && (
          <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded-lg">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 px-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Direct Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
