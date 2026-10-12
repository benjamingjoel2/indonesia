"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "sending" | "done" | "error";

/** Short enquiry form for trip pages and the contact page (dark or light backgrounds). */
export function EnquiryForm({
  tripTitle,
  tripSlug,
  tone = "dark",
}: {
  tripTitle?: string;
  tripSlug?: string;
  tone?: "dark" | "light";
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const input =
    tone === "dark"
      ? "h-12 w-full rounded-sm border border-sand-50/30 bg-jungle-950/40 px-3.5 text-sand-50 placeholder:text-sand-300/60 aria-[invalid=true]:border-[#e7a37f]"
      : "h-12 w-full rounded-sm border border-sand-400 bg-paper px-3.5 aria-[invalid=true]:border-clay-500";
  const errCls = tone === "dark" ? "text-[#f0b896]" : "text-clay-600";
  const labelCls = "block text-sm font-medium";

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = Object.fromEntries(f.entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if ((data.name ?? "").trim().length < 2) errs.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) errs.email = "Enter a valid email address.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      e.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, trip: tripTitle ?? "", source: tripSlug ? `/trips/${tripSlug}` : "contact" }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex flex-col justify-center">
        <Icon name="check" size={32} />
        <p className="mt-4 font-display text-display-md">
          Thank you. We&apos;ll be in <em className="font-light italic">touch</em> soon.
        </p>
        <p className={`mt-3 ${tone === "dark" ? "text-sand-200" : "text-ink-soft"}`}>
          A specialist will reply by email, usually within the hour during Bali office hours.
        </p>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? (
      <p id={`${id}-${k}-err`} className={`mt-1.5 text-sm ${errCls}`}>
        {errors[k]}
      </p>
    ) : null;
  const a = (k: string) => ({ "aria-invalid": Boolean(errors[k]), "aria-describedby": errors[k] ? `${id}-${k}-err` : undefined });

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor={`${id}-name`} className={labelCls}>Full name</label>
        <input id={`${id}-name`} name="name" autoComplete="name" className={`mt-2 ${input}`} {...a("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={labelCls}>Email</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" className={`mt-2 ${input}`} {...a("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={labelCls}>Phone (optional)</label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={`mt-2 ${input}`} />
      </div>
      <div>
        <label htmlFor={`${id}-month`} className={labelCls}>When are you thinking?</label>
        <input id={`${id}-month`} name="month" placeholder="e.g. July 2027" className={`mt-2 ${input}`} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className={labelCls}>Trip details</label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          placeholder="Who's travelling, how long for, anything you'd change"
          className={`mt-2 ${input} h-auto py-3`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`inline-flex min-h-11 items-center gap-2 rounded-sm px-6 font-medium disabled:opacity-60 ${
            tone === "dark" ? "bg-sand-50 text-jungle-900 hover:bg-sand-200" : "bg-jungle-900 text-sand-50 hover:bg-jungle-700"
          }`}
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <Icon name="arrow" size={16} />
        </button>
        <p className={`text-xs ${tone === "dark" ? "text-sand-300" : "text-ink-soft"}`}>
          We&apos;ll only use your details to plan your trip. See our{" "}
          <a href="/legal/privacy" className="underline underline-offset-2">privacy policy</a>.
        </p>
        {status === "error" && <p role="alert" className={`w-full text-sm ${errCls}`}>Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
