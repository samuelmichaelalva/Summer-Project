import { SchemeBrowser } from "@/components/scheme-browser";
import { AppShell } from "@/components/ui";

export default function SchemesPage() {
  return (
    <AppShell active="Scheme Listing">
      <div className="mx-auto max-w-content">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Scheme Listing</p>
          <h1 className="mt-2 text-3xl font-extrabold">Explore government schemes</h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant">Browse all available benefits. Complete your profile after choosing a scheme to see your eligibility.</p>
        </div>
        <SchemeBrowser />
      </div>
    </AppShell>
  );
}
