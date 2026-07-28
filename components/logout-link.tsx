"use client";

import { LogOut } from "lucide-react";
import { useAuth } from "@/components/auth-provider";

export function LogoutLink() {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className="mt-auto hidden items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-error hover:bg-error-container lg:flex" type="button">
      <LogOut size={18} /> Logout
    </button>
  );
}
