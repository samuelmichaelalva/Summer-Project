"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui";

export function LoginForm() {
  const { login, register } = useAuth();
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "login") {
        const res = await login(contact, password);
        if (!res.success) {
          setError(res.error || "Login failed");
        }
      } else {
        const res = await register(name, contact, password);
        if (!res.success) {
          setError(res.error || "Registration failed");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 rounded-lg bg-surface-container p-1">
        <button
          onClick={() => {
            setMode("login");
            setError(null);
          }}
          className={`rounded-md py-2 text-sm font-bold ${mode === "login" ? "bg-white shadow-sm" : "text-on-surface-variant"}`}
          type="button"
        >
          Login
        </button>
        <button
          onClick={() => {
            setMode("register");
            setError(null);
          }}
          className={`rounded-md py-2 text-sm font-bold ${mode === "register" ? "bg-white shadow-sm" : "text-on-surface-variant"}`}
          type="button"
        >
          Register
        </button>
      </div>
      
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {error && (
          <div className="rounded-lg bg-error/10 p-3 text-sm font-semibold text-error">
            {error}
          </div>
        )}

        {mode === "register" && (
          <Field
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChange={setName}
            required
          />
        )}

        <Field
          label="Mobile number or email"
          placeholder="Enter registered contact"
          value={contact}
          onChange={setContact}
          required
        />

        <Field
          label="Password"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={setPassword}
          required
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-on-surface-variant">
            <input type="checkbox" className="rounded border-outline-variant" /> Remember me
          </label>
          <a className="font-semibold text-primary" href="#">Forgot password?</a>
        </div>

        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? (
            "Processing..."
          ) : (
            <>
              {mode === "login" ? "Login" : "Create account"} <ArrowRight size={18} />
            </>
          )}
        </Button>
      </form>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false
}: {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input
        className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        required={required}
      />
    </label>
  );
}
