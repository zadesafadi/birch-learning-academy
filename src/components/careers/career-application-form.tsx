"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { careers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const applicationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  position: z.string().min(1, "Please select a position"),
  message: z.string().min(10, "Tell us about yourself"),
});

type ApplicationData = z.infer<typeof applicationSchema>;

export function CareerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (_data: ApplicationData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-sage/10 rounded-2xl">
        <h3 className="font-serif text-2xl text-charcoal mb-2">Application Received!</h3>
        <p className="text-charcoal/70">
          Thank you for your interest. We&apos;ll review your application and be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="career-name" className="block text-sm font-medium mb-1.5">Full Name *</label>
        <input id="career-name" {...register("name")} className={cn("w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50", errors.name ? "border-red-400" : "border-birch")} />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="career-email" className="block text-sm font-medium mb-1.5">Email *</label>
          <input id="career-email" type="email" {...register("email")} className={cn("w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50", errors.email ? "border-red-400" : "border-birch")} />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="career-phone" className="block text-sm font-medium mb-1.5">Phone *</label>
          <input id="career-phone" type="tel" {...register("phone")} className={cn("w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50", errors.phone ? "border-red-400" : "border-birch")} />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="career-position" className="block text-sm font-medium mb-1.5">Position *</label>
        <select id="career-position" {...register("position")} className={cn("w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50", errors.position ? "border-red-400" : "border-birch")}>
          <option value="">Select a position</option>
          {careers.map((job) => (
            <option key={job.title} value={job.title}>{job.title}</option>
          ))}
          <option value="other">Other</option>
        </select>
        {errors.position && <p className="mt-1 text-sm text-red-500">{errors.position.message}</p>}
      </div>
      <div>
        <label htmlFor="career-message" className="block text-sm font-medium mb-1.5">Cover Letter *</label>
        <textarea id="career-message" rows={5} {...register("message")} placeholder="Tell us about your experience and why you'd like to join Birch..." className={cn("w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none", errors.message ? "border-red-400" : "border-birch")} />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-amber text-white rounded-full font-medium hover:bg-amber-dark transition-colors disabled:opacity-50">
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
