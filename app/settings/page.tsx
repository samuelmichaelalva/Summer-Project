import { Bell, Globe2, LockKeyhole, Moon, ShieldCheck } from "lucide-react";
import { AppShell, Button, Card, LanguagePills } from "@/components/ui";

export default function SettingsPage() {
  return (
    <AppShell active="Settings">
      <div className="mx-auto max-w-content">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Settings</p>
          <h1 className="mt-2 text-3xl font-extrabold">Preferences and accessibility</h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant">A UI-only settings surface for language, notifications, privacy, and display preferences.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <SectionHeader icon={<Globe2 size={22} />} title="Language" />
            <LanguagePills />
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold">Default language</span>
              <select className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm">
                <option>English</option>
                <option>हिन्दी</option>
                <option>বাংলা</option>
                <option>தமிழ்</option>
              </select>
            </label>
          </Card>
          <Card>
            <SectionHeader icon={<Bell size={22} />} title="Notifications" />
            <Toggle label="Scheme deadline alerts" checked />
            <Toggle label="New eligibility matches" checked />
            <Toggle label="Application status updates" />
          </Card>
          <Card>
            <SectionHeader icon={<ShieldCheck size={22} />} title="Privacy" />
            <Toggle label="Show sensitive benefit amounts" checked />
            <Toggle label="Allow profile completion reminders" />
            <Button variant="secondary" className="mt-5">Manage Consent</Button>
          </Card>
          <Card>
            <SectionHeader icon={<Moon size={22} />} title="Display" />
            <Toggle label="Compact dashboard cards" />
            <Toggle label="High contrast focus states" checked />
            <Toggle label="Larger form labels" />
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-primary">{icon}</div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}

function Toggle({ label, checked = false }: { label: string; checked?: boolean }) {
  return (
    <label className="mb-4 flex items-center justify-between rounded-xl bg-surface-container-low p-4 last:mb-0">
      <span className="text-sm font-semibold">{label}</span>
      <input type="checkbox" defaultChecked={checked} className="h-5 w-5 rounded border-outline-variant text-primary" />
    </label>
  );
}
