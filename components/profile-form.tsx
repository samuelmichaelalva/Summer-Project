"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Home, IndianRupee, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge, Button, Card } from "@/components/ui";
import { T, useLanguage } from "@/components/language-provider";
import { Dictionary } from "@/lib/i18n/dictionaries";

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
  const { t } = useLanguage();
  const [profile, setProfile] = useState(defaultProfile);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [messageKey, setMessageKey] = useState<keyof Dictionary | null>(null);

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
    setMessageKey(null);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });
      const data = await res.json();
      if (data.success) {
        setProfile(data.profile);
        setMessageKey("profileSavedSuccess");
        setTimeout(() => setMessageKey(null), 3000);
        return true;
      } else {
        setMessageKey("failedSaveProfile");
      }
    } catch (err) {
      console.error(err);
      setMessageKey("errorConnectingServer");
    } finally {
      setSaving(false);
    }
    return false;
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-lg font-semibold text-on-surface-variant">
          <T id="loadingProfile" />
        </p>
      </div>
    );
  }

  const documents = [
    { nameKey: "identity" as const, checked: profile.hasAadhaar },
    { nameKey: "annualIncome" as const, checked: !!profile.income },
    { nameKey: "bankAccountStatus" as const, checked: profile.bank === "Available" },
    { nameKey: "state" as const, checked: !!profile.state && !!profile.district },
  ];

  const steps = [
    { key: "identity" as const },
    { key: "household" as const },
    { key: "incomeAndOccupation" as const },
    { key: "docChecklist" as const },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <div className="mb-8 grid gap-3 md:grid-cols-4">
          {steps.map((step, index) => {
            const stepPercent =
              index === 0
                ? profile.name && profile.state
                  ? 100
                  : 50
                : index === 1
                ? profile.householdSize && profile.primaryNeed
                  ? 100
                  : 0
                : index === 2
                ? profile.income && profile.occupation
                  ? 100
                  : 0
                : profile.hasAadhaar
                ? 100
                : 0;
            return (
              <div key={step.key} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                    stepPercent === 100 ? "bg-secondary text-white" : "bg-primary text-white"
                  }`}
                >
                  {stepPercent === 100 ? <CheckCircle2 size={18} /> : index + 1}
                </div>
                <span className="text-sm font-semibold">
                  <T id={step.key} />
                </span>
              </div>
            );
          })}
        </div>

        {messageKey && (
          <div
            className={`mb-6 rounded-lg p-3 text-sm font-semibold ${
              messageKey === "profileSavedSuccess" ? "bg-secondary/10 text-secondary" : "bg-error/10 text-error"
            }`}
          >
            <T id={messageKey} />
          </div>
        )}

        <FormSection icon={<UserRound size={20} />} titleKey="identity">
          <Field labelKey="fullName" value={profile.name} onChange={(name) => setProfile({ ...profile, name })} />
          <Field labelKey="dob" type="date" value={profile.dateOfBirth} onChange={(dateOfBirth) => setProfile({ ...profile, dateOfBirth })} />
          <Field
            labelKey="gender"
            value={profile.gender}
            options={["male", "female", "preferNotToSay"]}
            onChange={(gender) => setProfile({ ...profile, gender })}
          />
          <Field
            labelKey="maritalStatus"
            value={profile.maritalStatus}
            options={["single", "married", "widowed", "divorced"]}
            onChange={(maritalStatus) => setProfile({ ...profile, maritalStatus })}
          />
          <Field labelKey="state" value={profile.state} onChange={(state) => setProfile({ ...profile, state })} />
          <Field labelKey="district" value={profile.district} onChange={(district) => setProfile({ ...profile, district })} />
          <Field
            labelKey="preferredLanguage"
            value={profile.language}
            options={["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"]}
            onChange={(language) => setProfile({ ...profile, language })}
          />
        </FormSection>

        <FormSection icon={<Home size={20} />} titleKey="household">
          <Field labelKey="householdSize" value={profile.householdSize} onChange={(householdSize) => setProfile({ ...profile, householdSize })} />
          <Field
            labelKey="residenceType"
            value={profile.residenceType}
            options={["ruralSemiUrban", "urban"]}
            onChange={(residenceType) => setProfile({ ...profile, residenceType })}
          />
          <Field
            labelKey="socialCategory"
            value={profile.socialCategory}
            options={["generalCategory", "scCategory", "stCategory", "obcCategory"]}
            onChange={(socialCategory) => setProfile({ ...profile, socialCategory })}
          />
          <Field
            labelKey="minorityStatus"
            value={profile.minorityStatus}
            options={["yes", "no"]}
            onChange={(minorityStatus) => setProfile({ ...profile, minorityStatus })}
          />
          <Field
            labelKey="disabilityStatus"
            value={profile.disabilityStatus}
            options={["yes", "no"]}
            onChange={(disabilityStatus) => setProfile({ ...profile, disabilityStatus })}
          />
          <Field
            labelKey="houseOwnership"
            value={profile.houseOwnership}
            options={["owned", "rented", "none"]}
            onChange={(houseOwnership) => setProfile({ ...profile, houseOwnership })}
          />
          <Field
            labelKey="rationCardType"
            value={profile.rationCardType}
            options={["aayRation", "bplRation", "nfsaRation", "none"]}
            onChange={(rationCardType) => setProfile({ ...profile, rationCardType })}
          />
          <Field labelKey="primaryNeed" value={profile.primaryNeed} onChange={(primaryNeed) => setProfile({ ...profile, primaryNeed })} />
        </FormSection>

        <FormSection icon={<IndianRupee size={20} />} titleKey="incomeAndOccupation">
          <Field labelKey="annualIncome" prefix="₹" value={profile.income} onChange={(income) => setProfile({ ...profile, income })} />
          <Field labelKey="primaryOccupation" value={profile.occupation} onChange={(occupation) => setProfile({ ...profile, occupation })} />
          <Field
            labelKey="employmentStatus"
            value={profile.employmentStatus}
            options={["employed", "selfEmployed", "unemployed", "student", "retired"]}
            onChange={(employmentStatus) => setProfile({ ...profile, employmentStatus })}
          />
          <Field
            labelKey="educationLevel"
            value={profile.educationLevel}
            options={["noFormalEducation", "school", "higherSecondary", "graduate", "postgraduate"]}
            onChange={(educationLevel) => setProfile({ ...profile, educationLevel })}
          />
          <Field labelKey="landholding" value={profile.landholding} onChange={(landholding) => setProfile({ ...profile, landholding })} />
          <Field
            labelKey="bankAccountStatus"
            value={profile.bank}
            options={["available", "notAvailable"]}
            onChange={(bank) => setProfile({ ...profile, bank })}
          />
          <Field
            labelKey="lpgConnection"
            value={profile.lpgConnection}
            options={["yes", "no"]}
            onChange={(lpgConnection) => setProfile({ ...profile, lpgConnection })}
          />

          <div className="col-span-2 mt-6 flex items-center gap-3 pl-1">
            <input
              type="checkbox"
              id="hasAadhaarCheck"
              checked={profile.hasAadhaar}
              onChange={(e) => setProfile({ ...profile, hasAadhaar: e.target.checked })}
              className="h-5 w-5 rounded border-outline-variant text-primary focus:ring-primary"
            />
            <label htmlFor="hasAadhaarCheck" className="cursor-pointer select-none text-sm font-semibold text-on-surface">
              <T id="aadhaarConsent" />
            </label>
          </div>
        </FormSection>

        <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
          <Button variant="secondary" onClick={saveProfile} disabled={saving}>
            <T id={saving ? "saving" : "saveDraft"} />
          </Button>
          <Button
            onClick={async () => {
              if (await saveProfile()) window.location.href = schemeSlug ? `/schemes/${schemeSlug}` : "/dashboard";
            }}
            disabled={saving}
          >
            <T id={schemeSlug ? "viewScheme" : "viewDashboard"} /> <ArrowRight size={18} />
          </Button>
        </div>
      </Card>

      <aside className="space-y-6">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold">
              <T id="profileReadiness" />
            </h2>
            <Badge tone={profile.completionPercent > 80 ? "green" : "blue"}>{profile.completionPercent}%</Badge>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-surface-container">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${profile.completionPercent}%` }}
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-on-surface-variant">
            <T id="savedProfilePersists" />
          </p>
        </Card>

        <Card>
          <div className="mb-4 flex items-center gap-2">
            <FileCheck2 className="text-primary" size={20} />
            <h2 className="font-bold">
              <T id="docChecklist" />
            </h2>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.nameKey} className="flex items-center gap-3 rounded-xl bg-surface-container-low p-3">
                <CheckCircle2 className={doc.checked ? "text-secondary" : "text-outline"} size={18} />
                <span className="text-sm font-semibold">
                  <T id={doc.nameKey} />
                </span>
              </div>
            ))}
          </div>
        </Card>
      </aside>
    </div>
  );
}

function FormSection({
  icon,
  titleKey,
  children,
}: {
  icon: React.ReactNode;
  titleKey: keyof Dictionary;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 last:mb-0">
      <div className="mb-4 flex items-center gap-2 border-b border-outline-variant pb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-fixed text-primary">{icon}</div>
        <h2 className="font-bold">
          <T id={titleKey} />
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

function Field({
  labelKey,
  value,
  onChange,
  type = "text",
  options,
  prefix,
}: {
  labelKey: keyof Dictionary;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  options?: string[];
  prefix?: string;
}) {
  const { t } = useLanguage();
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">
        <T id={labelKey} />
      </span>
      {options ? (
        <select
          className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm"
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="">{t("selectOption")}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {["English", "हिन्दी", "বাংলা", "தமிழ்", "తెలుగు"].includes(option) ? option : t(option as keyof Dictionary)}
            </option>
          ))}
        </select>
      ) : (
        <div className="flex h-11 items-center rounded-lg border border-outline-variant bg-white">
          {prefix && <span className="pl-3 text-sm font-semibold text-primary">{prefix}</span>}
          <input
            type={type}
            className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            value={value || ""}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
      )}
    </label>
  );
}
