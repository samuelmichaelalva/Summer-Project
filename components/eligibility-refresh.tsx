"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { T } from "@/components/language-provider";

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
      <Button onClick={refresh} variant="secondary"><T>Refresh eligibility</T></Button>
      <span className="text-sm font-semibold text-on-surface-variant"><T>{status}</T></span>
    </div>
  );
}
