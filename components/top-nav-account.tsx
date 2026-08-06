"use client";

import Link from "next/link";
import { UserCircle } from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { useLanguage } from "@/components/language-provider";

export function TopNavAccount() {
  const { user, loading } = useAuth();
  const { t } = useLanguage();

  if (loading || !user) return null;

  return (
    <Link
      href="/profile-setup"
      aria-label={t("account")}
      title={t("account")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container-low"
    >
      <UserCircle size={22} />
    </Link>
  );
}
