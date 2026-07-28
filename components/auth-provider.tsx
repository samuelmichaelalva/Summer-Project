"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type User = { name: string; contact: string };

type AuthContextValue = {
  user: User | null;
  login: (contact: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = window.localStorage.getItem("janseva_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const value = useMemo(
    () => ({
      user,
      login: (contact: string) => {
        const nextUser = { name: "Citizen", contact };
        window.localStorage.setItem("janseva_user", JSON.stringify(nextUser));
        setUser(nextUser);
        router.push("/profile-setup");
      },
      logout: () => {
        window.localStorage.removeItem("janseva_user");
        setUser(null);
        router.push("/login");
      },
    }),
    [router, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
