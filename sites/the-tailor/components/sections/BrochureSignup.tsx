"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { home } from "@/data/home";
import { postJson } from "@/lib/preview";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "sending" | "done" | "error";

export function BrochureSignup({ compact = false }: { compact?: boolean }) {
  const b = home.brochure;
  const id = useId();
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      await postJson("/api/brochure", { email, newsletter, brochure: b.title });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section aria-labelledby={`${id}-title`} className={compact ? "" : "bg-paper py-20 md:py-28"}>
      <div className={compact ? "" : "container-edit"}>
        <div className="grid items-center gap-10 rounded-sm border border-sand-300 bg-sand-50 p-6 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-14 md:p-10 lg:grid-cols-[minmax(0,18rem)_1fr]">
          <div className="relative mx-auto aspect-[3/4] w-48 rotate-[-3deg] overflow-hidden rounded-sm shadow-[0_20px_40px_-18px_rgba(15,46,42,0.5)] md:w-full">
            <Image src={b.cover.src} alt={b.cover.alt} fill sizes="(min-width: 768px) 18rem, 12rem" className="object-cover" />
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-jungle-950/70 via-transparent to-jungle-950/70 p-5 text-sand-50">
              <p className="eyebrow text-[0.625rem]">Free guide</p>
              <p className="font-display text-2xl leading-tight">
                The Australia <em className="font-light italic">Collection</em>
              </p>
            </div>
          </div>

          <div aria-live="polite">
            {status === "done" ? (
              <div>
                <Icon name="check" size={32} className="text-lagoon-500" />
                <p id={`${id}-title`} className="mt-4 font-display text-display-md">
                  Check your <em className="font-light italic">inbox</em>.
                </p>
                <p className="mt-3 max-w-lg text-ink-soft">
                  {b.title} is on its way to {email}. If it hasn&apos;t arrived in a few minutes, look in your promotions folder.
                </p>
              </div>
            ) : (
              <>
                <p className="eyebrow text-lagoon-500">{b.subtitle}</p>
                <Heading id={`${id}-title`} size="md" className="mt-3">
                  {"Download *The Australia Collection*"}
                </Heading>
                <p className="mt-3 max-w-lg text-ink-soft">{b.text}</p>
                <form onSubmit={submit} noValidate className="mt-6 max-w-lg">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label htmlFor={`${id}-email`} className="sr-only">
                      Email address
                    </label>
                    <input
                      id={`${id}-email`}
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${id}-err` : undefined}
                      className="h-12 min-w-0 flex-1 rounded-sm border border-sand-400 bg-paper px-4 aria-[invalid=true]:border-clay-500"
                    />
                    <Button type="submit" disabled={status === "sending"} arrow>
                      {status === "sending" ? "Sending…" : "Get the guide"}
                    </Button>
                  </div>
                  {error && (
                    <p id={`${id}-err`} className="mt-2 text-sm text-clay-600">
                      {error}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-2 text-sm text-clay-600">Something went wrong. Please try again.</p>
                  )}
                  <label className="mt-4 flex items-start gap-3 text-sm text-ink-soft">
                    <input
                      type="checkbox"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-jungle-900"
                    />
                    Also send me occasional travel notes and new trip ideas. Unsubscribe any time.
                  </label>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
