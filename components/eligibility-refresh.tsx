"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { T, useLanguage } from "@/components/language-provider";

export function EligibilityRefresh() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<string>("usingSavedProfileMatch");

  async function refresh() {
    setStatus("checkingEligibility");
    const response = await fetch("/api/eligibility");
    const data = await response.json();
    setStatus(`${data.matches.length} ${t("schemesRanked")}`);
  }

  return (
    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
      <Button onClick={refresh} variant="secondary">
        <T id="refreshChat" />
      </Button>
      <span className="text-sm font-semibold text-on-surface-variant">
        {status === "usingSavedProfileMatch" || status === "checkingEligibility" ? t(status as any) : status}
      </span>
    </div>
  );
}
