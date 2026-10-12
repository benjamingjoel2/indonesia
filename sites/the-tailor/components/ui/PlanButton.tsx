"use client";

import type { ComponentProps } from "react";
import { useUi } from "@/lib/ui-state";
import { Button } from "./Button";

/** Any "Start planning" CTA: opens the planner modal. */
export function PlanButton(props: Omit<ComponentProps<typeof Button>, "onClick">) {
  const { openPlanner } = useUi();
  return <Button {...props} onClick={openPlanner} />;
}
