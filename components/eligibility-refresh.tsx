"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export function EligibilityRefresh() {
  const [status, setStatus] = useState("Using saved profile match");

  async function refresh() {
    setStatus("Checking eligibility...");
    const response = await fetch("/api/eligibility");
    const data = await response.json();
    setStatus(`${data.matches.length} schemes ranked from eligibility engine`);
  }

  return (
    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
      <Button onClick={refresh} variant="secondary">Refresh eligibility</Button>
      <span className="text-sm font-semibold text-on-surface-variant">{status}</span>
    </div>
  );
}
