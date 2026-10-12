"use client";

import { useRef } from "react";
import { useFocusTrap, useScrollLock } from "@/lib/hooks";
import { useUi } from "@/lib/ui-state";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";

/** Modal wrapper for the trip planner. The 5-step form is mounted here in phase 3. */
export function PlannerModal() {
  const { plannerOpen, closePlanner } = useUi();
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollLock(plannerOpen);
  useFocusTrap(panelRef, plannerOpen, closePlanner);

  if (!plannerOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-stretch justify-center sm:items-center sm:p-6">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close planner"
        onClick={closePlanner}
        className="absolute inset-0 h-full w-full animate-fade-in bg-jungle-950/60 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="planner-title"
        className="relative flex w-full max-w-5xl animate-fade-in flex-col overflow-y-auto bg-paper sm:max-h-[90vh] sm:rounded-sm"
      >
        <button
          type="button"
          onClick={closePlanner}
          autoFocus
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-sm hover:bg-sand-100"
          aria-label="Close planner"
        >
          <Icon name="close" />
        </button>
        <div className="p-8 sm:p-12">
          <h2 id="planner-title" className="font-display text-display-md">
            Begin your <em className="font-light italic">journey</em>.
          </h2>
          <p className="mt-4 max-w-prose text-ink-soft">The trip planner is coming in the next phase.</p>
          <LinkButton href="/plan-your-trip" className="mt-6" onClick={closePlanner} arrow>
            Open planner page
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
