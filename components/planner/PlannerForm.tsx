"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  addOnOptions,
  budgetOptions,
  contactMethods,
  countryCodes,
  regionOptions,
} from "@/data/plannerOptions";
import { site } from "@/data/site";
import type { Img } from "@/data/types";
import {
  emptyDraft,
  plannerSteps,
  toPayload,
  validateStep,
  type Errors,
  type PlannerDraft,
} from "@/lib/planner";
import { readStorage, removeStorage, writeStorage } from "@/lib/storage";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Price } from "@/components/ui/Price";

const STORAGE_KEY = "tie-planner-v1";

interface Saved {
  step: number;
  draft: PlannerDraft;
}

export type RegionImages = Record<string, Img | undefined>;

export function PlannerForm({
  regionImages,
  titleId,
  onDone,
}: {
  regionImages: RegionImages;
  titleId: string;
  onDone?: () => void;
}) {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<PlannerDraft>(emptyDraft);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [restored, setRestored] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();

  // Restore saved progress.
  useEffect(() => {
    const saved = readStorage<Saved>(STORAGE_KEY);
    if (saved?.draft) {
      setDraft({ ...emptyDraft, ...saved.draft });
      setStep(Math.min(Math.max(saved.step ?? 0, 0), plannerSteps.length - 1));
    }
    setRestored(true);
  }, []);

  // Persist progress.
  useEffect(() => {
    if (restored && !reference) writeStorage(STORAGE_KEY, { step, draft } satisfies Saved);
  }, [step, draft, restored, reference]);

  const update = <K extends keyof PlannerDraft>(key: K, value: Partial<PlannerDraft[K]> | PlannerDraft[K]) => {
    setDraft((d) => ({
      ...d,
      [key]: typeof value === "object" && !Array.isArray(value) ? { ...(d[key] as object), ...value } : value,
    }));
  };

  const focusFirstError = () => {
    requestAnimationFrame(() => {
      const el = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      el?.focus();
    });
  };

  const goTo = (next: number) => {
    setStep(next);
    setErrors({});
    requestAnimationFrame(() => {
      headingRef.current?.focus();
      formRef.current?.closest("[data-scroll-root]")?.scrollTo({ top: 0 });
    });
  };

  const next = () => {
    const e = validateStep(step, draft);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError();
    goTo(step + 1);
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (step < plannerSteps.length - 1) return next();
    const e = validateStep(step, draft);
    setErrors(e);
    if (Object.keys(e).length) return focusFirstError();
    setStatus("sending");
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toPayload(draft)),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error();
      setReference(json.reference);
      removeStorage(STORAGE_KEY);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  if (reference) {
    return (
      <Confirmation
        titleId={titleId}
        name={draft.contact.name.split(" ")[0]}
        email={draft.contact.email}
        reference={reference}
        onDone={() => {
          setDraft(emptyDraft);
          setStep(0);
          setReference(null);
          onDone?.();
        }}
      />
    );
  }

  const err = (k: string) => errors[k];
  const field = (k: string) => ({
    "aria-invalid": Boolean(err(k)),
    "aria-describedby": err(k) ? `${uid}-${k}-err` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={submit} noValidate>
      <Progress step={step} />

      <h2
        ref={headingRef}
        id={titleId}
        tabIndex={-1}
        className="mt-8 font-display text-display-md outline-none"
      >
        {
          [
            <>When would you like to <em className="font-light italic">travel</em>?</>,
            <>Where are you <em className="font-light italic">drawn</em> to?</>,
            <>What&apos;s your <em className="font-light italic">budget</em>?</>,
            <>Who&apos;s <em className="font-light italic">travelling</em>?</>,
            <>How should we <em className="font-light italic">reach</em> you?</>,
          ][step]
        }
      </h2>

      <div className="mt-8 space-y-8">
        {step === 0 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Preferred arrival date" htmlFor={`${uid}-arrival`} error={err("arrival")} errId={`${uid}-arrival-err`}>
                <input
                  id={`${uid}-arrival`}
                  type="date"
                  min={new Date().toISOString().slice(0, 10)}
                  max="2028-12-31"
                  value={draft.when.arrival}
                  onChange={(e) => update("when", { arrival: e.target.value })}
                  className={inputClass}
                  {...field("arrival")}
                />
              </Field>
              <Field
                label="Length of stay"
                htmlFor={`${uid}-nights`}
                hint="Most of our trips run 8–16 nights."
                error={err("nights")}
                errId={`${uid}-nights-err`}
              >
                <select
                  id={`${uid}-nights`}
                  value={draft.when.nights}
                  onChange={(e) => update("when", { nights: Number(e.target.value) })}
                  className={inputClass}
                  {...field("nights")}
                >
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "night" : "nights"}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <ChoiceGroup legend="My dates are">
              {(["exact", "approximate"] as const).map((v) => (
                <Pill
                  key={v}
                  type="radio"
                  name={`${uid}-dateType`}
                  checked={draft.when.dateType === v}
                  onChange={() => update("when", { dateType: v })}
                >
                  {v === "exact" ? "Exact" : "Approximate"}
                </Pill>
              ))}
            </ChoiceGroup>

            <ChoiceGroup legend="Have you been to Indonesia before?" error={err("travellerType")} errId={`${uid}-travellerType-err`}>
              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    ["first", "First time in Indonesia", "Most travellers start with Bali plus one other island."],
                    ["experienced", "I've been before", "Ready for further-flung islands and longer journeys."],
                  ] as const
                ).map(([v, label, text]) => (
                  <OptionCard
                    key={v}
                    type="radio"
                    name={`${uid}-traveller`}
                    checked={draft.when.travellerType === v}
                    onChange={() => update("when", { travellerType: v })}
                    invalid={Boolean(err("travellerType"))}
                    describedBy={err("travellerType") ? `${uid}-travellerType-err` : undefined}
                  >
                    <span className="block font-display text-lg">{label}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{text}</span>
                  </OptionCard>
                ))}
              </div>
            </ChoiceGroup>
          </>
        )}

        {step === 1 && (
          <>
            <ChoiceGroup
              legend="Choose one or more. Selecting several means a combined itinerary."
              error={err("regions")}
              errId={`${uid}-regions-err`}
            >
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {regionOptions.map((r) => {
                  const checked = draft.where.regions.includes(r.id);
                  const img = r.imageFrom ? regionImages[r.id] : undefined;
                  return (
                    <label
                      key={r.id}
                      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-sm border bg-paper transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-lagoon-500 ${
                        checked ? "border-jungle-900 ring-1 ring-jungle-900" : "border-sand-300 hover:border-sand-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checked}
                        aria-invalid={Boolean(err("regions"))}
                        aria-describedby={err("regions") ? `${uid}-regions-err` : undefined}
                        onChange={() => {
                          const set = new Set(draft.where.regions);
                          if (set.has(r.id)) set.delete(r.id);
                          else {
                            // "Not sure yet" is exclusive with specific regions.
                            if (r.id === "not-sure") set.clear();
                            else set.delete("not-sure");
                            set.add(r.id);
                          }
                          update("where", { regions: Array.from(set) });
                        }}
                      />
                      <span className="relative block aspect-[4/3] bg-sand-200">
                        {img ? (
                          <Image src={img.src} alt="" fill sizes="(min-width: 1024px) 12rem, 45vw" className="object-cover" />
                        ) : (
                          <span className="flex h-full items-center justify-center bg-sand-100 font-display text-4xl italic text-sand-400">
                            ?
                          </span>
                        )}
                        <span
                          className={`absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border ${
                            checked ? "border-jungle-900 bg-jungle-900 text-sand-50" : "border-white/80 bg-black/20"
                          }`}
                          aria-hidden="true"
                        >
                          {checked && <Icon name="check" size={14} />}
                        </span>
                      </span>
                      <span className="block p-3">
                        <span className="block font-display text-[1.0625rem] leading-tight">{r.label}</span>
                        <span className="mt-1 block text-xs leading-snug text-ink-soft">{r.text}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </ChoiceGroup>
            <Field
              label="Specific hotels, boats or activities in mind?"
              htmlFor={`${uid}-specifics`}
              hint="Optional. e.g. a particular villa, a dive course, a wedding anniversary dinner."
            >
              <textarea
                id={`${uid}-specifics`}
                rows={3}
                value={draft.where.specifics}
                onChange={(e) => update("where", { specifics: e.target.value })}
                className={`${inputClass} h-auto py-3`}
              />
            </Field>
          </>
        )}

        {step === 2 && (
          <ChoiceGroup
            legend="Approximate cost per person per day, including stays, private guiding, activities and in-country transfers."
            error={err("budget")}
            errId={`${uid}-budget-err`}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {budgetOptions.map((b) => (
                <OptionCard
                  key={b.id}
                  type="radio"
                  name={`${uid}-budget`}
                  checked={draft.budget === b.id}
                  onChange={() => update("budget", b.id)}
                  invalid={Boolean(err("budget"))}
                  describedBy={err("budget") ? `${uid}-budget-err` : undefined}
                >
                  <span className="block font-display text-lg">{b.label}</span>
                  {b.perDayUSD && (
                    <span className="mt-1 block text-sm font-medium">
                      approx. <Price usd={b.perDayUSD} />
                      {b.plus ? "+" : ""} per person per day
                    </span>
                  )}
                  <span className="mt-2 block text-sm text-ink-soft">{b.text}</span>
                </OptionCard>
              ))}
            </div>
          </ChoiceGroup>
        )}

        {step === 3 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Adults" htmlFor={`${uid}-adults`} error={err("adults")} errId={`${uid}-adults-err`}>
                <select
                  id={`${uid}-adults`}
                  value={draft.who.adults}
                  onChange={(e) => update("who", { adults: Number(e.target.value) })}
                  className={inputClass}
                  {...field("adults")}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Children (under 18)" htmlFor={`${uid}-children`}>
                <select
                  id={`${uid}-children`}
                  value={draft.who.children}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    const ages = draft.who.childAges.slice(0, n);
                    while (ages.length < n) ages.push(null);
                    update("who", { children: n, childAges: ages });
                  }}
                  className={inputClass}
                >
                  {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {draft.who.children > 0 && (
              <fieldset>
                <legend className="text-sm font-medium">Ages of the children</legend>
                <p className="mt-1 text-sm text-ink-soft">
                  Some boats and dive operators have minimum ages, so this helps us plan.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {draft.who.childAges.map((age, i) => (
                    <div key={i}>
                      <label htmlFor={`${uid}-age-${i}`} className="sr-only">
                        Age of child {i + 1}
                      </label>
                      <select
                        id={`${uid}-age-${i}`}
                        value={age ?? ""}
                        onChange={(e) => {
                          const ages = [...draft.who.childAges];
                          ages[i] = e.target.value === "" ? null : Number(e.target.value);
                          update("who", { childAges: ages });
                        }}
                        className={inputClass}
                        {...field(`childAge${i}`)}
                      >
                        <option value="">Child {i + 1}</option>
                        {Array.from({ length: 18 }, (_, a) => a).map((a) => (
                          <option key={a} value={a}>
                            {a === 0 ? "Under 1" : `${a} yrs`}
                          </option>
                        ))}
                      </select>
                      {err(`childAge${i}`) && (
                        <p id={`${uid}-childAge${i}-err`} className="mt-1 text-xs text-clay-600">
                          {err(`childAge${i}`)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </fieldset>
            )}

            <ChoiceGroup legend="Would you like help with any of these?">
              <div className="space-y-3">
                {addOnOptions.map((a) => {
                  const checked = draft.who.addOns.includes(a.id);
                  return (
                    <OptionCard
                      key={a.id}
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        update("who", {
                          addOns: checked ? draft.who.addOns.filter((x) => x !== a.id) : [...draft.who.addOns, a.id],
                        })
                      }
                    >
                      <span className="block font-medium">{a.label}</span>
                      <span className="mt-1 block text-sm text-ink-soft">{a.text}</span>
                    </OptionCard>
                  );
                })}
              </div>
            </ChoiceGroup>
          </>
        )}

        {step === 4 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" htmlFor={`${uid}-name`} error={err("name")} errId={`${uid}-name-err`}>
                <input
                  id={`${uid}-name`}
                  type="text"
                  autoComplete="name"
                  value={draft.contact.name}
                  onChange={(e) => update("contact", { name: e.target.value })}
                  className={inputClass}
                  {...field("name")}
                />
              </Field>
              <Field
                label="Email address"
                htmlFor={`${uid}-email`}
                hint="We'll send your proposal here."
                error={err("email")}
                errId={`${uid}-email-err`}
              >
                <input
                  id={`${uid}-email`}
                  type="email"
                  autoComplete="email"
                  value={draft.contact.email}
                  onChange={(e) => update("contact", { email: e.target.value })}
                  className={inputClass}
                  {...field("email")}
                />
              </Field>
            </div>

            <Field
              label="Phone number"
              htmlFor={`${uid}-phone`}
              hint="Used only to coordinate your trip. No sales calls."
              error={err("phone")}
              errId={`${uid}-phone-err`}
            >
              <div className="flex gap-2">
                <label htmlFor={`${uid}-cc`} className="sr-only">
                  Country code
                </label>
                <select
                  id={`${uid}-cc`}
                  value={draft.contact.phoneCountry}
                  onChange={(e) => update("contact", { phoneCountry: e.target.value })}
                  className={`${inputClass} w-32 shrink-0`}
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <input
                  id={`${uid}-phone`}
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="tel"
                  value={draft.contact.phone}
                  onChange={(e) => update("contact", { phone: e.target.value })}
                  className={`${inputClass} min-w-0 flex-1`}
                  {...field("phone")}
                />
              </div>
            </Field>

            <ChoiceGroup legend="Preferred ways to reach you" error={err("methods")} errId={`${uid}-methods-err`}>
              {contactMethods.map((m) => {
                const checked = draft.contact.methods.includes(m.id);
                return (
                  <Pill
                    key={m.id}
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      update("contact", {
                        methods: checked
                          ? draft.contact.methods.filter((x) => x !== m.id)
                          : [...draft.contact.methods, m.id],
                      })
                    }
                  >
                    {m.label}
                  </Pill>
                );
              })}
            </ChoiceGroup>

            <Field label="Anything else we should know?" htmlFor={`${uid}-notes`} hint="Optional. Celebrations, dietary needs, mobility, pace.">
              <textarea
                id={`${uid}-notes`}
                rows={4}
                value={draft.contact.notes}
                onChange={(e) => update("contact", { notes: e.target.value })}
                className={`${inputClass} h-auto py-3`}
              />
            </Field>
          </>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-sm bg-clay-500/10 p-4 text-sm text-clay-600">
          We couldn&apos;t send your request. Please try again, or email us at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-sand-300 pt-6">
        {step > 0 ? (
          <Button type="button" variant="ghost" onClick={() => goTo(step - 1)}>
            Back
          </Button>
        ) : (
          <span />
        )}
        <Button type="submit" disabled={status === "sending"} arrow>
          {step < plannerSteps.length - 1 ? "Next" : status === "sending" ? "Sending…" : "Send to my specialist"}
        </Button>
      </div>
    </form>
  );
}

/* ---------- Pieces ---------- */

const inputClass =
  "h-12 w-full rounded-sm border border-sand-400 bg-paper px-3.5 text-[0.9375rem] aria-[invalid=true]:border-clay-500";

function Progress({ step }: { step: number }) {
  return (
    <div>
      <p className="text-sm text-ink-soft">
        <span className="font-medium text-ink">
          Step {step + 1} of {plannerSteps.length}
        </span>{" "}
        · {plannerSteps[step]}
      </p>
      <ol className="mt-3 grid grid-cols-5 gap-1.5" aria-label="Planner progress">
        {plannerSteps.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined}>
            <span className={`block h-1 rounded-full ${i <= step ? "bg-jungle-900" : "bg-sand-300"}`} />
            <span className={`mt-2 hidden text-xs sm:block ${i === step ? "text-ink" : "text-ink-soft"}`}>
              {s}
              {i < step && <span className="sr-only"> (completed)</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  errId,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  errId?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium">
        {label}
      </label>
      {hint && <p className="mt-1 text-sm text-ink-soft">{hint}</p>}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={errId} className="mt-1.5 text-sm text-clay-600">
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceGroup({
  legend,
  error,
  errId,
  children,
}: {
  legend: string;
  error?: string;
  errId?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2 [&>div]:w-full">{children}</div>
      {error && (
        <p id={errId} className="mt-2 text-sm text-clay-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function Pill({
  type,
  name,
  checked,
  onChange,
  children,
}: {
  type: "radio" | "checkbox";
  name?: string;
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-5 text-[0.9375rem] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-lagoon-500 ${
        checked ? "border-jungle-900 bg-jungle-900 text-sand-50" : "border-sand-400 hover:border-jungle-900"
      }`}
    >
      <input type={type} name={name} checked={checked} onChange={onChange} className="sr-only" />
      {checked && <Icon name="check" size={14} />}
      {children}
    </label>
  );
}

function OptionCard({
  type,
  name,
  checked,
  onChange,
  invalid,
  describedBy,
  children,
}: {
  type: "radio" | "checkbox";
  name?: string;
  checked: boolean;
  onChange: () => void;
  invalid?: boolean;
  describedBy?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`flex cursor-pointer gap-3 rounded-sm border p-4 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-lagoon-500 ${
        checked ? "border-jungle-900 bg-sand-50 ring-1 ring-jungle-900" : "border-sand-300 hover:border-sand-400"
      }`}
    >
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        className="mt-1 h-4 w-4 shrink-0 accent-jungle-900"
      />
      <span>{children}</span>
    </label>
  );
}

function Confirmation({
  titleId,
  name,
  email,
  reference,
  onDone,
}: {
  titleId: string;
  name: string;
  email: string;
  reference: string;
  onDone: () => void;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => ref.current?.focus(), []);
  return (
    <div role="status" className="py-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-jungle-900 text-sand-50">
        <Icon name="check" size={26} />
      </span>
      <h2 ref={ref} id={titleId} tabIndex={-1} className="mt-6 font-display text-display-lg outline-none">
        Terima kasih, <em className="font-light italic">{name || "traveller"}</em>.
      </h2>
      <p className="mt-4 max-w-lg text-lg text-ink-soft">
        Your trip request is with our team. A specialist will be in touch at {email}, usually within the hour during
        Bali office hours (8am–8pm WITA).
      </p>
      <dl className="mt-6 inline-grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 rounded-sm bg-sand-100 px-5 py-4 text-sm">
        <dt className="text-ink-soft">Reference</dt>
        <dd className="font-medium tabular-nums">{reference}</dd>
        <dt className="text-ink-soft">What next</dt>
        <dd>Ideas and a draft route, then a call if you&apos;d like one.</dd>
      </dl>
      <div className="mt-8">
        <Button type="button" variant="secondary" onClick={onDone}>
          Done
        </Button>
      </div>
    </div>
  );
}
