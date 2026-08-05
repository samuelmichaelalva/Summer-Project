"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type User = { id: string; name: string; contact: string };

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  login: (contact: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, contact: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadSession() {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (data.authenticated) {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Failed to load session:", err);
      } finally {
        setLoading(false);
      }
    }
    loadSession();
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      login: async (contact: string, password: string) => {
        try {
          const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contact, password }),
          });
          const data = await res.json();
          if (!res.ok) {
            return { success: false, error: data.error || "Login failed" };
          }
          setUser(data.user);
          router.push("/schemes");
          return { success: true };
        } catch (err) {
          return { success: false, error: "Network error. Please try again." };
        }
      },
      register: async (name: string, contact: string, password: string) => {
        try {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, contact, password }),
          });
          const data = await res.json();
          if (!res.ok) {
            return { success: false, error: data.error || "Registration failed" };
          }
          setUser(data.user);
          router.push("/schemes");
          return { success: true };
        } catch (err) {
          return { success: false, error: "Network error. Please try again." };
        }
      },
      logout: async () => {
        try {
          await fetch("/api/auth/logout", { method: "POST" });
        } catch (err) {
          console.error("Logout failed:", err);
        } finally {
          setUser(null);
          router.push("/login");
        }
      },
    }),
    [router, user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
