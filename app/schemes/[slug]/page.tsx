import { ArrowRight, CheckCircle2, Download, HeartPulse, Share2 } from "lucide-react";
import { AppShell, Badge, Button, Card } from "@/components/ui";

export default function SchemeDetailsPage() {
  return (
    <AppShell active="Scheme Listing">
      <div className="mx-auto max-w-content">
        <div className="grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <Card>
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge tone="green">Highly Eligible</Badge>
                  <h1 className="mt-4 text-3xl font-extrabold">Ayushman Bharat PMJAY</h1>
                  <p className="mt-3 max-w-2xl text-on-surface-variant">Health coverage for secondary and tertiary hospitalization, presented as a clear citizen-facing scheme detail page.</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <HeartPulse size={28} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <Metric label="Annual cover" value="Rs. 5 lakh" />
                <Metric label="Application time" value="10 mins" />
                <Metric label="Documents" value="3 needed" />
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button>
                  Start Application <ArrowRight size={18} />
                </Button>
                <Button variant="secondary">
                  <Download size={18} /> Download Checklist
                </Button>
                <Button variant="ghost">
                  <Share2 size={18} /> Share
                </Button>
              </div>
            </Card>

            <Card className="mt-6">
              <h2 className="text-xl font-bold">Eligibility Checklist</h2>
              <div className="mt-5 grid gap-3">
                {["Resident family with eligible income profile", "Valid identity document", "Household details available", "Mobile number for verification"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-4">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <aside className="space-y-6">
            <Card>
              <h2 className="font-bold">Application Steps</h2>
              {["Confirm eligibility", "Upload documents", "Review details", "Submit application"].map((step, index) => (
                <div key={step} className="mt-5 flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</div>
                  <div>
                    <p className="text-sm font-semibold">{step}</p>
                    <p className="text-xs text-on-surface-variant">UI placeholder</p>
                  </div>
                </div>
              ))}
            </Card>
            <Card className="bg-primary text-white">
              <h2 className="text-xl font-bold">Need help?</h2>
              <p className="mt-3 text-sm leading-6 opacity-90">The assistant panel can explain scheme terms in simple language.</p>
              <Button variant="secondary" className="mt-5">Ask JanSeva AI</Button>
            </Card>
          </aside>
        </div>
      </div>
    </AppShell>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-container-low p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{label}</p>
      <p className="mt-2 text-xl font-extrabold">{value}</p>
    </div>
  );
}
