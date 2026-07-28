import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { schemeCards } from "@/lib/data";
import { AppShell, Badge, Card } from "@/components/ui";

export default function SchemesPage() {
  return (
    <AppShell active="Scheme Listing">
      <div className="mx-auto max-w-content">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Scheme Listing</p>
          <h1 className="mt-2 text-3xl font-extrabold">Recommended schemes</h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant">Browse matched government benefits before opening a detailed application view.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {schemeCards.map((scheme) => (
            <Card key={scheme.title}>
              <div className="mb-5 flex items-start justify-between">
                <div className="rounded-xl bg-surface-container p-3 text-primary">
                  <scheme.icon size={24} />
                </div>
                <Badge tone="green">{scheme.status}</Badge>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{scheme.category}</p>
              <h2 className="mt-2 text-lg font-bold">{scheme.title}</h2>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">{scheme.benefit}</p>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-surface-container-low p-3">
                <span className="text-xs font-bold text-on-surface-variant">Match</span>
                <span className="text-sm font-extrabold text-primary">{scheme.matchScore}%</span>
              </div>
              <Link href={`/schemes/${scheme.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                View details <ArrowRight size={16} />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
