"use client";

import { ArrowRight, Eye, EyeOff, KeyRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/components/auth-provider";
import { Button } from "@/components/ui";
import { T, useLanguage } from "@/components/language-provider";
import { Dictionary } from "@/lib/i18n/dictionaries";

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
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const clearTimersRef = useRef<number[]>([]);
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [errorKey, setErrorKey] = useState<keyof Dictionary | null>(null);
  const [customError, setCustomError] = useState<string | null>(null);
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
      setErrorKey(null);
      setCustomError(null);
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
  const isNameInvalid = mode === "register" && name.length > 0 && !/^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(name);
  const passwordLabelKey: keyof Dictionary = passwordScore >= 5 ? "strong" : passwordScore >= 3 ? "good" : password ? "weak" : "required";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorKey(null);
    setCustomError(null);

    if (isNameInvalid) {
      setErrorKey("validNameError");
      return;
    }
    if (mode === "register" && passwordScore < 3) {
      setErrorKey("useStrongerPassword");
      return;
    }
    if (mode === "register" && password !== confirmPassword) {
      setErrorKey("passwordsDoNotMatch");
      return;
    }
    setLoading(true);

    try {
      if (mode === "login") {
        const res = await login(contact, password);
        if (!res.success) {
          setCustomError(res.error || t("loginFailed"));
        }
      } else {
        const res = await register(name, contact, password);
        if (!res.success) {
          setCustomError(res.error || t("registrationFailed"));
        }
      }
    } catch (err) {
      setErrorKey("unexpectedError");
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
            setErrorKey(null);
            setCustomError(null);
          }}
          className={`rounded-md py-2 text-sm font-bold ${mode === "login" ? "bg-white shadow-sm" : "text-on-surface-variant"}`}
          type="button"
        >
          <T id="login" />
        </button>
        <button
          onClick={() => {
            setMode("register");
            setPassword("");
            setConfirmPassword("");
            setErrorKey(null);
            setCustomError(null);
          }}
          className={`rounded-md py-2 text-sm font-bold ${mode === "register" ? "bg-white shadow-sm" : "text-on-surface-variant"}`}
          type="button"
        >
          <T id="register" />
        </button>
      </div>

      <form key={formKey} ref={formRef} className="mt-6 space-y-4" onSubmit={handleSubmit} autoComplete="off">
        {(errorKey || customError) && (
          <div className="rounded-lg bg-error/10 p-3 text-sm font-semibold text-error">
            {errorKey ? t(errorKey) : customError}
          </div>
        )}

        {mode === "register" && (
          <Field
            labelKey="fullName"
            placeholderKey="fullName"
            value={name}
            onChange={(value) => setName(value.replace(/[0-9]/g, ""))}
            errorKey={isNameInvalid ? "validNameError" : undefined}
            autoComplete="off"
            required
          />
        )}

        <Field
          labelKey="mobileOrEmail"
          placeholderKey="contactPlaceholder"
          value={contact}
          onChange={setContact}
          autoComplete={mode === "login" ? "username" : "email"}
          required
        />

        <label className="block">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold"><T id="password" /></span>
            {mode === "register" && (
              <button
                type="button"
                onClick={() => {
                  setPassword(generateStrongPassword());
                  setShowPassword(true);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <KeyRound size={14} /> <T id="suggestStrongPassword" />
              </button>
            )}
          </div>
          <div className="relative">
            <input
              className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 pr-11 text-sm"
              placeholder={t("passwordPlaceholder")}
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
              <p className="mt-1 text-xs font-semibold text-on-surface-variant">{t(passwordLabelKey)}</p>
            </div>
          )}
        </label>

        {mode === "register" && (
          <Field
            labelKey="confirmPassword"
            placeholderKey="reEnterPasswordPlaceholder"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={setConfirmPassword}
            autoComplete="new-password"
            required
          />
        )}

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-on-surface-variant">
            <input type="checkbox" className="rounded border-outline-variant" /> <T id="rememberMe" />
          </label>
          <a className="font-semibold text-primary" href="#"><T id="forgotPassword" /></a>
        </div>

        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? (
            <T id="processing" />
          ) : (
            <>
              <T id={mode === "login" ? "login" : "createAccount"} /> <ArrowRight size={18} />
            </>
          )}
        </Button>
      </form>
    </>
  );
}

function Field({
  labelKey,
  placeholderKey,
  type = "text",
  value,
  onChange,
  required = false,
  errorKey,
  autoComplete,
}: {
  labelKey: keyof Dictionary;
  placeholderKey: keyof Dictionary;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  errorKey?: keyof Dictionary;
  autoComplete?: string;
}) {
  const { t } = useLanguage();
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold"><T id={labelKey} /></span>
      <input
        className={`h-11 w-full rounded-lg border bg-white px-3 text-sm ${errorKey ? "border-error" : "border-outline-variant"}`}
        placeholder={t(placeholderKey)}
        type={type}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        required={required}
        autoComplete={autoComplete}
      />
      {errorKey && <p className="mt-1 text-xs font-semibold text-error"><T id={errorKey} /></p>}
    </label>
  );
}
