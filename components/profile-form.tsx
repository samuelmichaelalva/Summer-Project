"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Home, IndianRupee, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge, Button, Card } from "@/components/ui";

const defaultProfile = {
  name: "Samuel Citizen",
  state: "Karnataka",
  district: "Bengaluru Urban",
  language: "English",
  householdSize: "4 members",
  residenceType: "Rural / Semi-urban",
  category: "General",
  primaryNeed: "Education support",
  income: "Under Rs. 2.5 lakh",
  occupation: "Student / Dependent",
  bank: "Available",
  land: "No agricultural land",
};

export function ProfileForm() {
  const [profile, setProfile] = useState(defaultProfile);
  const documents = ["Aadhaar card", "Income certificate", "Bank passbook", "Residence proof"];

  useEffect(() => {
    const stored = localStorage.getItem("janseva_profile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  const saveProfile = () => localStorage.setItem("janseva_profile", JSON.stringify(profile));

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <div className="mb-8 grid gap-3 md:grid-cols-4">
          {["Identity", "Household", "Income", "Documents"].map((step, index) => (
            <div key={step} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${index < 2 ? "bg-secondary text-white" : index === 2 ? "bg-primary text-white" : "bg-white text-on-surface-variant"}`}>
                {index < 2 ? <CheckCircle2 size={18} /> : index + 1}
              </div>
              <span className="text-sm font-semibold">{step}</span>
            </div>
          ))}
        </div>

        <FormSection icon={<UserRound size={20} />} title="Identity">
          <Field label="Full name" value={profile.name} onChange={(name) => setProfile({ ...profile, name })} />
          <Field label="State" value={profile.state} onChange={(state) => setProfile({ ...profile, state })} />
          <Field label="District" value={profile.district} onChange={(district) => setProfile({ ...profile, district })} />
          <Field label="Preferred language" value={profile.language} onChange={(language) => setProfile({ ...profile, language })} />
        </FormSection>
        <FormSection icon={<Home size={20} />} title="Household">
          <Field label="Household size" value={profile.householdSize} onChange={(householdSize) => setProfile({ ...profile, householdSize })} />
          <Field label="Residence type" value={profile.residenceType} onChange={(residenceType) => setProfile({ ...profile, residenceType })} />
          <Field label="Category" value={profile.category} onChange={(category) => setProfile({ ...profile, category })} />
          <Field label="Primary need" value={profile.primaryNeed} onChange={(primaryNeed) => setProfile({ ...profile, primaryNeed })} />
        </FormSection>
        <FormSection icon={<IndianRupee size={20} />} title="Income and occupation">
          <Field label="Annual family income" value={profile.income} onChange={(income) => setProfile({ ...profile, income })} />
          <Field label="Primary occupation" value={profile.occupation} onChange={(occupation) => setProfile({ ...profile, occupation })} />
          <Field label="Bank account status" value={profile.bank} onChange={(bank) => setProfile({ ...profile, bank })} />
          <Field label="Land ownership" value={profile.land} onChange={(land) => setProfile({ ...profile, land })} />
        </FormSection>

        <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
          <Button variant="secondary" onClick={saveProfile}>Save Draft</Button>
          <Link href="/dashboard" onClick={saveProfile}>
            <Button>View Dashboard <ArrowRight size={18} /></Button>
          </Link>
        </div>
      </Card>
      <aside className="space-y-6">
        <Card>
          <div className="mb-4 flex items-center justify-between"><h2 className="font-bold">Profile Readiness</h2><Badge tone="green">85%</Badge></div>
          <div className="h-3 overflow-hidden rounded-full bg-surface-container"><div className="h-full w-[85%] rounded-full bg-primary" /></div>
          <p className="mt-4 text-sm leading-6 text-on-surface-variant">Saved profile details now persist in this browser.</p>
        </Card>
        <Card>
          <div className="mb-4 flex items-center gap-2"><FileCheck2 className="text-primary" size={20} /><h2 className="font-bold">Document Checklist</h2></div>
          <div className="space-y-3">{documents.map((document, index) => <div key={document} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3"><CheckCircle2 className={index < 2 ? "text-secondary" : "text-outline"} size={18} /><span className="text-sm font-semibold">{document}</span></div>)}</div>
        </Card>
      </aside>
    </div>
  );
}

function FormSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <section className="mb-8 last:mb-0"><div className="mb-4 flex items-center gap-2 border-b border-outline-variant pb-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-fixed text-primary">{icon}</div><h2 className="font-bold">{title}</h2></div><div className="grid gap-5 md:grid-cols-2">{children}</div></section>;
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span><input className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm" value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}
