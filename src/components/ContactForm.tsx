"use client";

import { useState } from "react";
import StarBorder from "@/components/effects/StarBorder";
import Magnet from "@/components/effects/Magnet";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-purple-400/50";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation request from ${form.name || "your website"}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      "",
      form.message,
    ].filter((line): line is string => line !== null);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:hello@denalixtech.ai?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={fieldClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={fieldClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          className={fieldClass}
          placeholder="Company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-zinc-500">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${fieldClass} resize-none`}
          placeholder="What are you looking to build or fix?"
        />
      </div>

      <Magnet padding={40} magnetStrength={6} wrapperClassName="mt-2 self-start">
        <StarBorder
          as="button"
          type="submit"
          color="#a855f7"
          speed="4s"
          thickness={2}
          className="consult-star-border"
        >
          <span className="text-sm font-semibold">Send request</span>
        </StarBorder>
      </Magnet>

      <p className="text-xs text-zinc-500">
        Opens your email client with these details pre-filled — nothing is sent automatically.
      </p>
    </form>
  );
}
