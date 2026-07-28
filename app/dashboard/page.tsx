import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText, Plus, TriangleAlert } from "lucide-react";
import { schemeCards } from "@/lib/data";
import { AppShell, Badge, Button, Card } from "@/components/ui";

export default function DashboardPage() {
  return (
    <AppShell active="Dashboard">
      <div className="mx-auto max-w-content">
        <div className="grid gap-6 md:grid-cols-3">
          <section className="relative overflow-hidden rounded-2xl bg-primary-container p-6 text-white shadow-soft md:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider opacity-85">Potential Annual Benefits</p>
            <h1 className="mt-3 text-4xl font-extrabold">Rs. 1,42,500</h1>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">8 new eligible schemes found</span>
              <Link href="/schemes/ayushman-bharat">
                <Button variant="secondary">Claim Benefits</Button>
              </Link>
            </div>
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </section>
          <Card className="text-center">
            <p className="mb-5 text-sm font-semibold text-on-surface-variant">Profile Completion</p>
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-primary bg-surface-container-low text-2xl font-extrabold">75%</div>
            <p className="mt-5 text-sm leading-6 text-on-surface-variant">Add income certificate to unlock 4 more schemes.</p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="space-y-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Eligible Schemes</h2>
              <Link href="/schemes/ayushman-bharat" className="text-sm font-bold text-primary">View All</Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {schemeCards.slice(0, 2).map((scheme) => (
                <Card key={scheme.title} className="group">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="rounded-xl bg-surface-container p-3 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <scheme.icon size={24} />
                    </div>
                    <Badge tone="green">{scheme.status}</Badge>
                  </div>
                  <h3 className="text-lg font-bold">{scheme.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">{scheme.benefit}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-outline-variant pt-4">
                    <span className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant"><Clock size={16} /> {scheme.deadline}</span>
                    <Link href={`/schemes/${scheme.slug}`} className="flex items-center gap-1 text-sm font-bold text-primary">
                      Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="flex flex-col gap-4 bg-surface-container-low md:flex-row md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white text-primary">
                <FileText size={28} />
              </div>
              <div className="flex-1">
                <Badge>Education</Badge>
                <h3 className="mt-2 font-bold">PM-SHRI Schools Grant</h3>
                <p className="text-sm text-on-surface-variant">Support for school transformation under National Education Policy.</p>
              </div>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant bg-white text-on-surface-variant" aria-label="Add scheme">
                <Plus size={20} />
              </button>
            </Card>
          </section>

          <aside className="space-y-6">
            <Card className="border-error-container bg-error-container/35">
              <div className="mb-4 flex items-center gap-2 text-error">
                <TriangleAlert size={20} />
                <h2 className="text-sm font-extrabold uppercase">Expiring Soon</h2>
              </div>
              <div className="rounded-xl border border-error-container bg-white/70 p-4">
                <p className="font-semibold">Aadhaar-PAN Linking</p>
                <p className="mt-1 text-xs font-bold text-error">Deadline: 48 hours remaining</p>
                <Button variant="danger" className="mt-4 w-full">Complete Now</Button>
              </div>
            </Card>
            <Card>
              <h2 className="mb-5 font-bold">Recent Activity</h2>
              {["Income Certificate Verified", "Updated Profile Details", "Viewed PM-Awas Yojana"].map((item) => (
                <div key={item} className="mb-5 flex gap-3 last:mb-0">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item}</p>
                    <p className="text-xs text-on-surface-variant">Recently</p>
                  </div>
                </div>
              ))}
            </Card>
          </aside>
        </div>
      </div>
    </AppShell>
  );
}
