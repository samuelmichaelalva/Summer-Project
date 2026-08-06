import { ArrowRight, CheckCircle2, Download, HeartPulse, Share2 } from "lucide-react";
import { AppShell, Badge, Button, Card } from "@/components/ui";
import { getSchemeBySlug } from "@/lib/schemes-api";
import { T } from "@/components/language-provider";

export default async function SchemeDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scheme = getSchemeBySlug(slug) ?? getSchemeBySlug("ayushman-bharat")!;

  return (
    <AppShell active="Scheme Listing">
      <div className="mx-auto max-w-content">
        <div className="grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <Card>
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge tone="green"><T>Highly Eligible</T></Badge>
                  <h1 className="mt-4 text-3xl font-extrabold"><T>{scheme.title}</T></h1>
                  <p className="mt-3 max-w-2xl text-on-surface-variant"><T>{scheme.benefit}</T></p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <HeartPulse size={28} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <Metric label="Benefit" value={scheme.amount} />
                <Metric label="Match score" value={`${scheme.matchScore}%`} />
                <Metric label="Documents" value={`${scheme.documents.length} needed`} />
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button>
                  <T>Start Application</T> <ArrowRight size={18} />
                </Button>
                <Button variant="secondary">
                  <Download size={18} /> <T>Download Checklist</T>
                </Button>
                <Button variant="ghost">
                  <Share2 size={18} /> <T>Share</T>
                </Button>
              </div>
            </Card>

            <Card className="mt-6">
              <h2 className="text-xl font-bold"><T>Eligibility Checklist</T></h2>
              <div className="mt-5 grid gap-3">
                {scheme.eligibility.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-4">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="text-sm font-semibold"><T>{item}</T></span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <aside className="space-y-6">
            <Card>
              <h2 className="font-bold"><T>Application Steps</T></h2>
              {["Check official eligibility", "Collect required documents", "Apply on the official portal", "Track application status"].map((step, index) => (
                <div key={step} className="mt-5 flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</div>
                  <div>
                    <p className="text-sm font-semibold"><T>{step}</T></p>
                    <p className="text-xs text-on-surface-variant"><T>Follow the scheme instructions carefully.</T></p>
                  </div>
                </div>
              ))}
            </Card>
            <Card className="bg-primary text-white">
              <h2 className="text-xl font-bold"><T>Need help?</T></h2>
              <p className="mt-3 text-sm leading-6 opacity-90"><T>The assistant panel can explain scheme terms in simple language.</T></p>
              <Button variant="secondary" className="mt-5"><T>Ask JanSeva AI</T></Button>
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
      <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"><T>{label}</T></p>
      <p className="mt-2 text-xl font-extrabold">{value}</p>
    </div>
  );
}
