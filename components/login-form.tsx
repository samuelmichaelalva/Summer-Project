"use client";

import { ArrowRight, Eye, EyeOff, KeyRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui";

function generateStrongPassword() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const digits = "23456789";
  const symbols = "!@#$%&*?";
  const all = letters + digits + symbols;
  const required = [
    letters[Math.floor(Math.random() * 24)],
    letters[Math.floor(Math.random() * letters.length)].toLowerCase(),
    digits[Math.floor(Math.random() * digits.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
  ];

  const rest = Array.from({ length: 12 }, () => all[Math.floor(Math.random() * all.length)]);
  return [...required, ...rest].sort(() => Math.random() - 0.5).join("");
}

function getPasswordScore(password: string) {
  return [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;
}

export function LoginForm() {
  const { login, register } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);
  const clearTimersRef = useRef<number[]>([]);
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const clearNativeInputs = () => {
      formRef.current?.reset();
      formRef.current?.querySelectorAll<HTMLInputElement>("input").forEach((input) => {
        if (input.type === "checkbox") {
          input.checked = false;
        } else {
          input.value = "";
        }
      });
    };

    const clearForm = () => {
      setContact("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setError(null);
      setShowPassword(false);
      setFormKey((key) => key + 1);
      clearNativeInputs();
      clearTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      clearTimersRef.current = [
        window.setTimeout(clearNativeInputs, 0),
        window.setTimeout(clearNativeInputs, 100),
      ];
    };

    clearForm();
    window.addEventListener("pageshow", clearForm);
    return () => {
      window.removeEventListener("pageshow", clearForm);
      clearTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const passwordScore = getPasswordScore(password);
  const nameError = mode === "register" && name && !/^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(name)
    ? "Enter a valid name using letters and spaces."
    : null;
  const passwordLabel = passwordScore >= 5 ? "Strong" : passwordScore >= 3 ? "Good" : password ? "Weak" : "Required";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    if (nameError) {
      setError(nameError);
      return;
    }
    if (mode === "register" && passwordScore < 3) {
      setError("Use a stronger password or choose the suggested password.");
      return;
    }
    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
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
            setPassword("");
            setConfirmPassword("");
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
            setPassword("");
            setConfirmPassword("");
            setError(null);
          }}
          className={`rounded-md py-2 text-sm font-bold ${mode === "register" ? "bg-white shadow-sm" : "text-on-surface-variant"}`}
          type="button"
        >
          Register
        </button>
      </div>
      
      <form key={formKey} ref={formRef} className="mt-6 space-y-4" onSubmit={handleSubmit} autoComplete="off">
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
            onChange={(value) => setName(value.replace(/[0-9]/g, ""))}
            error={nameError}
            autoComplete="off"
            required
          />
        )}

        <Field
          label="Mobile number or email"
          placeholder="Enter registered contact"
          value={contact}
          onChange={setContact}
          autoComplete={mode === "login" ? "username" : "email"}
          required
        />

        <label className="block">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold">Password</span>
            {mode === "register" && (
              <button
                type="button"
                onClick={() => {
                  setPassword(generateStrongPassword());
                  setShowPassword(true);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <KeyRound size={14} /> Suggest strong password
              </button>
            )}
          </div>
          <div className="relative">
            <input
              className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 pr-11 text-sm"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={mode === "register" ? "new-password" : "current-password"}
              required
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
          {mode === "register" && (
            <div className="mt-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                  <span key={level} className={`h-1.5 flex-1 rounded-full ${passwordScore >= level ? "bg-primary" : "bg-surface-container"}`} />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-on-surface-variant">Password strength: {passwordLabel}</p>
            </div>
          )}
        </label>

        {mode === "register" && <Field label="Confirm password" placeholder="Re-enter your password" type={showPassword ? "text" : "password"} value={confirmPassword} onChange={setConfirmPassword} autoComplete="new-password" required />}

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
  required = false,
  error,
  autoComplete,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string | null;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input
        className={`h-11 w-full rounded-lg border bg-white px-3 text-sm ${error ? "border-error" : "border-outline-variant"}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        required={required}
        autoComplete={autoComplete}
      />
      {error && <p className="mt-1 text-xs font-semibold text-error">{error}</p>}
    </label>
  );
}
