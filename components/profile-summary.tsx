"use client";

import { useEffect, useState } from "react";
import { T } from "@/components/language-provider";

type StoredProfile = { state?: string; income?: string; primaryNeed?: string };

export function ProfileSummary() {
  const [profile, setProfile] = useState<StoredProfile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.profile.state) {
            setProfile(data.profile);
          }
        }
      } catch (err) {
        console.error("Failed to fetch profile summary:", err);
      }
    }
    fetchProfile();
  }, []);

  return (
    <p className="mt-3 text-sm leading-6 text-on-surface-variant">
      {profile ? (
        `${profile.state} • ${profile.income} • ${profile.primaryNeed}`
      ) : (
        <T id="configureProfilePrompt" />
      )}
    </p>
  );
}
