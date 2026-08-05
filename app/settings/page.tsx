import { AppShell } from "@/components/ui";
import SettingsForm from "@/components/settings-form";

export default function SettingsPage() {
  return <AppShell active="Settings"><div className="mx-auto max-w-content"><p className="text-sm font-bold uppercase tracking-wider text-primary">Settings</p><h1 className="mt-2 text-3xl font-extrabold">Preferences and accessibility</h1><p className="mt-3 max-w-2xl text-on-surface-variant">Your preferences are saved to your JanSeva account and apply across devices.</p><SettingsForm /></div></AppShell>;
}
