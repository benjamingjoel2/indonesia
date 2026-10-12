"use client";

import { createContext, useContext, useMemo, useState } from "react";

/** Global overlays: site search and the trip planner modal. */
interface UiState {
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  plannerOpen: boolean;
  openPlanner: () => void;
  closePlanner: () => void;
}

const UiContext = createContext<UiState | null>(null);

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(false);

  const value = useMemo<UiState>(
    () => ({
      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      plannerOpen,
      openPlanner: () => setPlannerOpen(true),
      closePlanner: () => setPlannerOpen(false),
    }),
    [searchOpen, plannerOpen],
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used inside <UiProvider>");
  return ctx;
}
