"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui";

export function LoginForm() {
  const { login } = useAuth();
  const [contact, setContact] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <>
      <div className="grid grid-cols-2 rounded-lg bg-surface-container p-1">
        <button onClick={() => setMode("login")} className={`rounded-md py-2 text-sm font-bold ${mode === "login" ? "bg-white shadow-sm" : "text-on-surface-variant"}`} type="button">Login</button>
        <button onClick={() => setMode("register")} className={`rounded-md py-2 text-sm font-bold ${mode === "register" ? "bg-white shadow-sm" : "text-on-surface-variant"}`} type="button">Register</button>
      </div>
      <form
        className="mt-6 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          login(contact || "citizen@example.com");
        }}
      >
        <Field label="Mobile number or email" placeholder="Enter registered contact" value={contact} onChange={setContact} />
        <Field label="Password" placeholder="Enter password" type="password" />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-on-surface-variant">
            <input type="checkbox" className="rounded border-outline-variant" /> Remember me
          </label>
          <a className="font-semibold text-primary" href="#">Forgot password?</a>
        </div>
        <Button className="w-full">
          {mode === "login" ? "Login" : "Create account"} <ArrowRight size={18} />
        </Button>
      </form>
    </>
  );
}

function Field({ label, placeholder, type = "text", value, onChange }: { label: string; placeholder: string; type?: string; value?: string; onChange?: (value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm" placeholder={placeholder} type={type} value={value} onChange={(event) => onChange?.(event.target.value)} />
    </label>
  );
}
