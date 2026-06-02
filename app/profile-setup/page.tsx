import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button, Card, TopNav } from "@/components/ui";

export default function ProfileSetupPage() {
  const steps = ["Identity", "Household", "Income", "Documents"];
  return (
    <div className="min-h-screen bg-background">
      <TopNav active="Profile" />
      <main className="mx-auto max-w-content px-4 py-10 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Profile Setup</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Complete your citizen profile</h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant">Only UI fields are shown here. This page is ready for API wiring later without adding backend behavior now.</p>
        </div>
        <Card>
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
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" value="Samuel Citizen" />
            <Field label="State" value="Karnataka" />
            <Field label="Annual family income" value="Under Rs. 2.5 lakh" />
            <Field label="Primary occupation" value="Student / Dependent" />
            <Field label="Household size" value="4 members" />
            <Field label="Preferred language" value="English" />
          </div>
          <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
            <Button variant="secondary">Save Draft</Button>
            <Link href="/dashboard">
              <Button>
                View Dashboard <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </Card>
      </main>
    </div>
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
