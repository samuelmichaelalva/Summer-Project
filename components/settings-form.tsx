"use client";

import { useEffect, useState } from "react";
import { Bell, Globe2, Moon, ShieldCheck, Sun, Laptop } from "lucide-react";
import { Card } from "@/components/ui";
import { T, useLanguage } from "@/components/language-provider";
import { Dictionary } from "@/lib/i18n/dictionaries";

type Settings = {
  theme: string;
  notificationsSchemes: boolean;
  notificationsMatches: boolean;
  notificationsApplications: boolean;
  showSensitiveAmounts: boolean;
  profileReminders: boolean;
  compactDashboard: boolean;
  highContrast: boolean;
  largerLabels: boolean;
};

const defaults: Settings = {
  theme: "system",
  notificationsSchemes: true,
  notificationsMatches: true,
  notificationsApplications: false,
  showSensitiveAmounts: true,
  profileReminders: false,
  compactDashboard: false,
  highContrast: true,
  largerLabels: false,
};

export default function SettingsForm() {
  const [settings, setSettings] = useState(defaults);
  const [saved, setSaved] = useState(false);
  const { language: appLanguage, setLanguage: setAppLanguage, t } = useLanguage();

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.settings) setSettings(data.settings);
      })
      .catch(() => {});
  }, []);

  const save = (next: Partial<Settings> & { language?: string }) => {
    const merged = { ...settings, ...next };
    setSettings(merged);

    if (next.language) {
      setAppLanguage(next.language as Parameters<typeof setAppLanguage>[0]);
    }
    if (next.theme) {
      localStorage.setItem("janseva-theme", next.theme);
    }
    setSaved(false);

    fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...merged, language: next.language || appLanguage }),
    }).then(() => setSaved(true));

    if (next.theme) {
      dispatchEvent(new CustomEvent("janseva-theme", { detail: next.theme }));
    }
  };

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <Card>
        <Header icon={<Globe2 size={22} />} titleKey="language" />
        <div className="flex flex-wrap gap-2">
          {["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => save({ language: item })}
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                appLanguage === item ? "border-primary bg-primary text-white" : "border-outline-variant hover:bg-surface-container-low"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-on-surface-variant">
          {t("selectedLabel")} {appLanguage}
        </p>
      </Card>

      <Card>
        <Header icon={<Bell size={22} />} titleKey="notifications" />
        <Toggle labelKey="deadlineAlerts" value={settings.notificationsSchemes} onChange={(value) => save({ notificationsSchemes: value })} />
        <Toggle labelKey="newEligibilityMatches" value={settings.notificationsMatches} onChange={(value) => save({ notificationsMatches: value })} />
        <Toggle labelKey="statusUpdates" value={settings.notificationsApplications} onChange={(value) => save({ notificationsApplications: value })} />
      </Card>

      <Card>
        <Header icon={<ShieldCheck size={22} />} titleKey="privacy" />
        <Toggle labelKey="showSensitiveAmounts" value={settings.showSensitiveAmounts} onChange={(value) => save({ showSensitiveAmounts: value })} />
        <Toggle labelKey="allowReminders" value={settings.profileReminders} onChange={(value) => save({ profileReminders: value })} />
      </Card>

      <Card>
        <Header icon={<Moon size={22} />} titleKey="appearance" />
        <div className="mb-4 flex gap-2">
          {[
            [Sun, "light"],
            [Moon, "dark"],
            [Laptop, "system"],
          ].map(([Icon, val]) => (
            <button
              key={String(val)}
              type="button"
              onClick={() => save({ theme: String(val) })}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg border p-3 text-sm font-semibold ${
                settings.theme === val ? "border-primary bg-primary text-white" : "border-outline-variant hover:bg-surface-container-low"
              }`}
            >
              <Icon size={16} />
              <span>{String(val)}</span>
            </button>
          ))}
        </div>
      </Card>

      {saved && (
        <p className="text-sm font-semibold text-secondary lg:col-span-2">
          <T id="settingsSaved" />
        </p>
      )}
    </div>
  );
}

function Header({ icon, titleKey }: { icon: React.ReactNode; titleKey: keyof Dictionary }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-primary">{icon}</div>
      <h2 className="text-xl font-bold"><T id={titleKey} /></h2>
    </div>
  );
}

function Toggle({ labelKey, value, onChange }: { labelKey: keyof Dictionary; value: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="mb-4 flex cursor-pointer items-center justify-between rounded-xl bg-surface-container-low p-4 last:mb-0">
      <span className="text-sm font-semibold"><T id={labelKey} /></span>
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="h-5 w-5 rounded border-outline-variant text-primary" />
    </label>
  );
}
