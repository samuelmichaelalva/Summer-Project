import { AppShell } from "@/components/ui";
import { T } from "@/components/language-provider";
import SettingsForm from "@/components/settings-form";

export default function SettingsPage() {
  return <AppShell active="Settings"><div className="mx-auto max-w-content"><p className="text-sm font-bold uppercase tracking-wider text-primary"><T>Settings</T></p><h1 className="mt-2 text-3xl font-extrabold"><T>Preferences and accessibility</T></h1><p className="mt-3 max-w-2xl text-on-surface-variant"><T>Your preferences are saved to your JanSeva account and apply across devices.</T></p><SettingsForm /></div></AppShell>;
}
