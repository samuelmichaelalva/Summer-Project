"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Home, IndianRupee, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge, Button, Card } from "@/components/ui";
import { T } from "@/components/language-provider";

const defaultProfile = {
  name: "",
  state: "",
  district: "",
  residenceType: "Rural / Semi-urban",
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  socialCategory: "General",
  minorityStatus: "",
  disabilityStatus: "",
  educationLevel: "",
  employmentStatus: "",
  landholding: "",
  houseOwnership: "",
  rationCardType: "",
  lpgConnection: "",
  language: "English",
  householdSize: "1 members",
  primaryNeed: "",
  income: "",
  occupation: "",
  bank: "Not available",
  hasAadhaar: false,
  completionPercent: 0,
};

export function ProfileForm({ schemeSlug }: { schemeSlug?: string }) {
  const [profile, setProfile] = useState(defaultProfile);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/profile");
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setProfile({
              ...defaultProfile,
              ...data.profile,
            });
          }
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const saveProfile = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      const data = await res.json();
      if (data.success) {
        setProfile(data.profile);
        setMessage("Profile saved successfully!");
        setTimeout(() => setMessage(null), 3000);
        return true;
      } else {
        setMessage("Failed to save profile.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error connecting to server.");
    } finally {
      setSaving(false);
    }
    return false;
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg font-semibold text-on-surface-variant"><T>Loading citizen profile...</T></p>
      </div>
    );
  }

  const documents = [
    { name: "Aadhaar card", checked: profile.hasAadhaar },
    { name: "Income certificate", checked: !!profile.income },
    { name: "Bank passbook", checked: profile.bank === "Available" },
    { name: "Residence proof", checked: !!profile.state && !!profile.district },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <div className="mb-8 grid gap-3 md:grid-cols-4">
          {["Identity", "Household", "Income", "Documents"].map((step, index) => {
            const stepPercent = index === 0 ? (profile.name && profile.state ? 100 : 50) : index === 1 ? (profile.householdSize && profile.primaryNeed ? 100 : 0) : index === 2 ? (profile.income && profile.occupation ? 100 : 0) : (profile.hasAadhaar ? 100 : 0);
            return (
              <div key={step} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${stepPercent === 100 ? "bg-secondary text-white" : "bg-primary text-white"}`}>
                  {stepPercent === 100 ? <CheckCircle2 size={18} /> : index + 1}
                </div>
                <span className="text-sm font-semibold"><T>{step}</T></span>
              </div>
            );
          })}
        </div>

        {message && (
          <div className={`mb-6 rounded-lg p-3 text-sm font-semibold ${message.includes("success") ? "bg-secondary/10 text-secondary" : "bg-error/10 text-error"}`}>
            <T>{message}</T>
          </div>
        )}

        <FormSection icon={<UserRound size={20} />} title="Identity">
          <Field label="Full name" value={profile.name} onChange={(name) => setProfile({ ...profile, name })} />
          <Field label="Date of birth" type="date" value={profile.dateOfBirth} onChange={(dateOfBirth) => setProfile({ ...profile, dateOfBirth })} />
          <Field label="Gender" value={profile.gender} options={["Male", "Female", "Prefer not to say"]} onChange={(gender) => setProfile({ ...profile, gender })} />
          <Field label="Marital status" value={profile.maritalStatus} options={["Single", "Married", "Widowed", "Divorced"]} onChange={(maritalStatus) => setProfile({ ...profile, maritalStatus })} />
          <Field label="State" value={profile.state} onChange={(state) => setProfile({ ...profile, state })} />
          <Field label="District" value={profile.district} onChange={(district) => setProfile({ ...profile, district })} />
          <Field label="Preferred language" value={profile.language} options={["English", "Hindi", "Bengali", "Tamil", "Telugu"]} onChange={(language) => setProfile({ ...profile, language })} />
        </FormSection>
        <FormSection icon={<Home size={20} />} title="Household">
          <Field label="Household size (e.g. 4)" value={profile.householdSize} onChange={(householdSize) => setProfile({ ...profile, householdSize })} />
          <Field label="Residence type" value={profile.residenceType} options={["Rural / Semi-urban", "Urban"]} onChange={(residenceType) => setProfile({ ...profile, residenceType })} />
          <Field label="Social category" value={profile.socialCategory} options={["General", "SC", "ST", "OBC"]} onChange={(socialCategory) => setProfile({ ...profile, socialCategory })} />
          <Field label="Minority status" value={profile.minorityStatus} options={["Yes", "No"]} onChange={(minorityStatus) => setProfile({ ...profile, minorityStatus })} />
          <Field label="Disability status" value={profile.disabilityStatus} options={["Yes", "No"]} onChange={(disabilityStatus) => setProfile({ ...profile, disabilityStatus })} />
          <Field label="House ownership" value={profile.houseOwnership} options={["Owned", "Rented", "None"]} onChange={(houseOwnership) => setProfile({ ...profile, houseOwnership })} />
          <Field label="Ration card type" value={profile.rationCardType} options={["AAY", "BPL", "NFSA", "None"]} onChange={(rationCardType) => setProfile({ ...profile, rationCardType })} />
          <Field label="Primary need" value={profile.primaryNeed} onChange={(primaryNeed) => setProfile({ ...profile, primaryNeed })} />
        </FormSection>
        <FormSection icon={<IndianRupee size={20} />} title="Income and occupation">
          <Field label="Annual family income" prefix="₹" value={profile.income} onChange={(income) => setProfile({ ...profile, income })} />
          <Field label="Primary occupation" value={profile.occupation} onChange={(occupation) => setProfile({ ...profile, occupation })} />
          <Field label="Employment status" value={profile.employmentStatus} options={["Employed", "Self-employed", "Unemployed", "Student", "Retired"]} onChange={(employmentStatus) => setProfile({ ...profile, employmentStatus })} />
          <Field label="Highest education level" value={profile.educationLevel} options={["No formal education", "School", "Higher secondary", "Graduate", "Postgraduate"]} onChange={(educationLevel) => setProfile({ ...profile, educationLevel })} />
          <Field label="Landholding (if applicable)" value={profile.landholding} onChange={(landholding) => setProfile({ ...profile, landholding })} />
          <Field label="Bank account status" value={profile.bank} options={["Available", "Not available"]} onChange={(bank) => setProfile({ ...profile, bank })} />
          <Field label="LPG connection" value={profile.lpgConnection} options={["Yes", "No"]} onChange={(lpgConnection) => setProfile({ ...profile, lpgConnection })} />
          <div className="flex items-center gap-3 mt-6 pl-1 col-span-2">
            <input
              type="checkbox"
              id="hasAadhaarCheck"
              checked={profile.hasAadhaar}
              onChange={(e) => setProfile({ ...profile, hasAadhaar: e.target.checked })}
              className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
            />
            <label htmlFor="hasAadhaarCheck" className="text-sm font-semibold text-on-surface cursor-pointer select-none">
              <T>I have a valid Aadhaar card</T>
            </label>
          </div>
        </FormSection>

        <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
          <Button variant="secondary" onClick={saveProfile} disabled={saving}>
            <T>{saving ? "Saving..." : "Save Draft"}</T>
          </Button>
          <Button onClick={async () => {
            if (await saveProfile()) window.location.href = schemeSlug ? `/schemes/${schemeSlug}` : "/dashboard";
          }} disabled={saving}>
            <T>{schemeSlug ? "View Scheme" : "View Dashboard"}</T> <ArrowRight size={18} />
          </Button>
        </div>
      </Card>
      <aside className="space-y-6">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold"><T>Profile Readiness</T></h2>
            <Badge tone={profile.completionPercent > 80 ? "green" : "blue"}>{profile.completionPercent}%</Badge>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-surface-container">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${profile.completionPercent}%` }}
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-on-surface-variant">
            <T>Saved profile details now persist securely in the database.</T>
          </p>
        </Card>
        <Card>
          <div className="mb-4 flex items-center gap-2">
            <FileCheck2 className="text-primary" size={20} />
            <h2 className="font-bold"><T>Document Checklist</T></h2>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
                <CheckCircle2 className={doc.checked ? "text-secondary" : "text-outline"} size={18} />
                <span className="text-sm font-semibold"><T>{doc.name}</T></span>
              </div>
            ))}
          </div>
        </Card>
      </aside>
    </div>
  );
}

function FormSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8 last:mb-0">
      <div className="mb-4 flex items-center gap-2 border-b border-outline-variant pb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-fixed text-primary">{icon}</div>
        <h2 className="font-bold"><T>{title}</T></h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", options, prefix }: { label: string; value: string; onChange: (value: string) => void; type?: string; options?: string[]; prefix?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold"><T>{label}</T></span>
      {options ? <select className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm" value={value || ""} onChange={(event) => onChange(event.target.value)}><option value=""><T>{`Select ${label.toLowerCase()}`}</T></option>{options.map((option) => <option key={option}><T>{option}</T></option>)}</select> : <div className="flex h-11 items-center rounded-lg border border-outline-variant bg-white"><span className="pl-3 text-sm font-semibold text-primary">{prefix}</span><input type={type} className="h-full min-w-0 flex-1 bg-transparent px-2 text-sm outline-none" value={value || ""} onChange={(event) => onChange(event.target.value)} /> </div>}
    </label>
  );
}
