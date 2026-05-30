"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  childAge: z.string().min(1, "Please select child's age"),
  tourDate: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
  submitLabel?: string;
}

export function ContactForm({
  className,
  submitLabel = "Schedule My Tour",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-sage/10 rounded-2xl">
        <h3 className="font-serif text-2xl text-charcoal mb-2">Thank You!</h3>
        <p className="text-charcoal/70">
          We&apos;ve received your request and will contact you within one
          business day to confirm your tour.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
            Your Name *
          </label>
          <input
            id="name"
            {...register("name")}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors",
              errors.name ? "border-red-400" : "border-birch"
            )}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors",
              errors.email ? "border-red-400" : "border-birch"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors",
              errors.phone ? "border-red-400" : "border-birch"
            )}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="childAge" className="block text-sm font-medium text-charcoal mb-1.5">
            Child&apos;s Age *
          </label>
          <select
            id="childAge"
            {...register("childAge")}
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors",
              errors.childAge ? "border-red-400" : "border-birch"
            )}
          >
            <option value="">Select age range</option>
            <option value="infant">Infant (6 weeks – 12 months)</option>
            <option value="toddler">Toddler (12 – 24 months)</option>
            <option value="early-preschool">Early Preschool (2 – 3 years)</option>
            <option value="preschool">Preschool (3 – 4 years)</option>
            <option value="pre-k">Pre-K (4 – 5 years)</option>
            <option value="expecting">Expecting / Not yet born</option>
          </select>
          {errors.childAge && (
            <p className="mt-1 text-sm text-red-500">{errors.childAge.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="tourDate" className="block text-sm font-medium text-charcoal mb-1.5">
          Preferred Tour Date
        </label>
        <input
          id="tourDate"
          type="date"
          {...register("tourDate")}
          className="w-full px-4 py-3 rounded-xl border border-birch bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Tell us about your family and what you're looking for..."
          className="w-full px-4 py-3 rounded-xl border border-birch bg-white focus:outline-none focus:ring-2 focus:ring-sage/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-4 bg-amber text-white rounded-full font-medium hover:bg-amber-dark transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
