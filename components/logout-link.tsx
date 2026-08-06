"use client";

import { LogOut } from "lucide-react";
import { useAuth } from "@/components/auth-provider";
import { T, useLanguage } from "@/components/language-provider";

export function LogoutLink({ collapsed = false }: { collapsed?: boolean }) {
  const { logout } = useAuth();
  const { t } = useLanguage();

  return (
    <button
      onClick={logout}
      className={`mt-auto hidden items-center gap-3 rounded-lg py-3 text-sm font-semibold text-error hover:bg-error-container lg:flex ${
        collapsed ? "justify-center px-2" : "px-4"
      }`}
      type="button"
      aria-label={t("logout")}
    >
      <LogOut size={18} /> {!collapsed && <T id="logout" />}
    </button>
  );
}
