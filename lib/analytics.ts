// Google Analytics 4 event helper functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Custom event dispatcher
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag("event", eventName, params);
  } else {
    if (process.env.NODE_ENV === "development") {
      console.log(`[GA4 Event] ${eventName}`, params);
    }
  }
};

// Typed tracking helpers matching the technical documentation
export const analytics = {
  // When a sponsor or CRO submits an inquiry
  formSubmitSponsor: (studyPhase?: string, indication?: string) => {
    trackEvent("form_submit_sponsor", { study_phase: studyPhase, indication });
  },

  // When a professional submits an application/profile
  formSubmitProfessional: (role?: string) => {
    trackEvent("form_submit_professional", { role });
  },

  // When general contact form is submitted
  contactFormSubmit: (inquiryType?: string) => {
    trackEvent("contact_form_submit", { inquiry_type: inquiryType });
  },

  // When user subscribes to email list / lead magnet
  emailSubscribe: (magnetType: "sponsor_checklist" | "cra_guide" | "general") => {
    trackEvent("email_subscribe", { magnet_type: magnetType });
  },

  // When user clicks the Calendly booking CTA
  calendlyClick: (location: string) => {
    trackEvent("calendly_click", { location });
  },

  // When user visits from LinkedIn (via UTM)
  linkedInLanding: (campaign?: string) => {
    trackEvent("linkedin_landing", { campaign });
  },

  // Hero CTA clicks
  ctaClickHero: (target: "sponsors" | "professionals") => {
    trackEvent("cta_click_hero", { target });
  },
};
