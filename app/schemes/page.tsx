import { SchemeBrowser } from "@/components/scheme-browser";
import { AppShell } from "@/components/ui";
import { T } from "@/components/language-provider";

export default function SchemesPage() {
  return (
    <AppShell active="Scheme Listing">
      <div className="mx-auto max-w-content">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary"><T>Scheme Listing</T></p>
          <h1 className="mt-2 text-3xl font-extrabold"><T>Explore government schemes</T></h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant"><T>Browse all available benefits. Complete your profile after choosing a scheme to see your eligibility.</T></p>
        </div>
        <SchemeBrowser />
      </div>
    </AppShell>
  );
}
