import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Home, IndianRupee, UserRound } from "lucide-react";
import { Badge, Button, Card, TopNav } from "@/components/ui";

export default function ProfileSetupPage() {
  const steps = ["Identity", "Household", "Income", "Documents"];
  const documents = ["Aadhaar card", "Income certificate", "Bank passbook", "Residence proof"];

  return (
    <div className="min-h-screen bg-background">
      <TopNav active="Profile" />
      <main className="mx-auto max-w-content px-4 py-10 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Profile Setup</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Complete your citizen profile</h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant">Only UI fields are shown here. This page is ready for API wiring later without adding backend behavior now.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-8 grid gap-3 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? "bg-secondary text-white" : index === 1 ? "bg-primary text-white" : "bg-white text-on-surface-variant"}`}>
                  {index === 0 ? <CheckCircle2 size={18} /> : index + 1}
                </div>
                <span className="text-sm font-semibold">{step}</span>
              </div>
            ))}
          </div>

          <FormSection icon={<UserRound size={20} />} title="Identity">
            <Field label="Full name" value="Samuel Citizen" />
            <Field label="State" value="Karnataka" />
            <Field label="District" value="Bengaluru Urban" />
            <Field label="Preferred language" value="English" />
          </FormSection>

          <FormSection icon={<Home size={20} />} title="Household">
            <Field label="Household size" value="4 members" />
            <Field label="Residence type" value="Rural / Semi-urban" />
            <Field label="Category" value="General" />
            <Field label="Primary need" value="Education support" />
          </FormSection>

          <FormSection icon={<IndianRupee size={20} />} title="Income and occupation">
            <Field label="Annual family income" value="Under Rs. 2.5 lakh" />
            <Field label="Primary occupation" value="Student / Dependent" />
            <Field label="Bank account status" value="Available" />
            <Field label="Land ownership" value="No agricultural land" />
          </FormSection>

          <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
            <Button variant="secondary">Save Draft</Button>
            <Link href="/dashboard">
              <Button>
                View Dashboard <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </Card>
        <aside className="space-y-6">
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold">Profile Readiness</h2>
              <Badge tone="green">75%</Badge>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-surface-container">
              <div className="h-full w-3/4 rounded-full bg-primary" />
            </div>
            <p className="mt-4 text-sm leading-6 text-on-surface-variant">Add income certificate and bank passbook to improve matching confidence.</p>
          </Card>
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <FileCheck2 className="text-primary" size={20} />
              <h2 className="font-bold">Document Checklist</h2>
            </div>
            <div className="space-y-3">
              {documents.map((document, index) => (
                <div key={document} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
                  <CheckCircle2 className={index < 2 ? "text-secondary" : "text-outline"} size={18} />
                  <span className="text-sm font-semibold">{document}</span>
                </div>
              ))}
            </div>
          </Card>
        </aside>
        </div>
      </main>
    </div>
  );
}

function FormSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8 last:mb-0">
      <div className="mb-4 flex items-center gap-2 border-b border-outline-variant pb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-fixed text-primary">{icon}</div>
        <h2 className="font-bold">{title}</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm" defaultValue={value} />
    </label>
  );
}
