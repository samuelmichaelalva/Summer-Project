"use client";

import { useEffect, useState } from "react";

type StoredProfile = { state?: string; income?: string; primaryNeed?: string };

export function ProfileSummary() {
  const [profile, setProfile] = useState<StoredProfile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("janseva_profile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  return (
    <p className="mt-3 text-sm leading-6 text-on-surface-variant">
      {profile ? `${profile.state} • ${profile.income} • ${profile.primaryNeed}` : "Add income certificate to unlock 4 more schemes."}
    </p>
  );
}
