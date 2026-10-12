"use client";

import { useRef } from "react";
import { useFocusTrap, useScrollLock } from "@/lib/hooks";
import { useUi } from "@/lib/ui-state";
import { Icon } from "@/components/ui/Icon";
import { PlannerForm, type RegionImages } from "./PlannerForm";

export function PlannerModal({ regionImages, intro }: { regionImages: RegionImages; intro: React.ReactNode }) {
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
        aria-labelledby="planner-modal-title"
        data-scroll-root
        className="relative w-full max-w-6xl animate-fade-in overflow-y-auto bg-paper sm:max-h-[92vh] sm:rounded-sm"
      >
        <button
          type="button"
          onClick={closePlanner}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-paper hover:bg-sand-100"
          aria-label="Close planner"
        >
          <Icon name="close" />
        </button>
        <div className="grid md:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="hidden md:block">{intro}</div>
          <div className="p-6 pt-14 sm:p-10">
            <PlannerForm regionImages={regionImages} titleId="planner-modal-title" onDone={closePlanner} />
          </div>
        </div>
      </div>
    </div>
  );
}
