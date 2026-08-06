"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { directorySchemes } from "@/lib/data";
import { Badge, Card } from "@/components/ui";
import { T, useLanguage } from "@/components/language-provider";

const rules: Record<string, string[]> = {
  Students: ["student", "education", "scholar"], Farmers: ["farmer", "agriculture", "kisan"], Women: ["women", "woman", "female", "maternal"],
  "Senior Citizens": ["senior", "pension", "elderly"], "Job Seekers": ["job", "employment", "skill", "unemployed"],
  "Entrepreneurs / MSMEs": ["business", "entrepreneur", "msme", "startup"], "Persons with Disabilities (PwD)": ["disab", "pwd"],
  "SC / ST / OBC": ["sc", "st", "obc", "caste"], "Economically Weaker Section (EWS) / BPL": ["income", "bpl", "ews", "poor"],
  "Unorganized Workers": ["worker", "labour", "labor", "unorgan"],
};

export function SchemeBrowser() {
  const { translate } = useLanguage();
  const [profile, setProfile] = useState<Record<string, string | number | boolean> | null>(null);
  const [query, setQuery] = useState("");
  useEffect(() => { fetch("/api/profile").then((res) => res.ok ? res.json() : null).then((data) => data?.success && setProfile(data.profile)); }, []);

  const all = useMemo(() => directorySchemes, []);
  const text = Object.values(profile ?? {}).join(" ").toLowerCase();
  const eligible = all.filter(({ category }) => rules[category]?.some((word) => text.includes(word)) || (category === "EWS / BPL" && /under|lakh|low/.test(text)));
  const visible = all.filter(({ title, category }) => `${title} ${category}`.toLowerCase().includes(query.toLowerCase()));
  const href = (slug: string) => profile?.completionPercent ? `/schemes/${slug}` : `/profile-setup?scheme=${slug}`;

  return <>
    <label className="relative mb-8 block max-w-xl"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} className="h-11 w-full rounded-full bg-surface-container pl-10 pr-4 text-sm" placeholder={translate("Search schemes by name or category...")} /></label>
    {eligible.length > 0 && <section className="mb-10"><h2 className="mb-5 text-2xl font-extrabold"><T>Schemes you may be eligible for</T></h2><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{eligible.map((scheme) => <SchemeLink key={`${scheme.category}-${scheme.slug}`} scheme={scheme} href={href(scheme.slug)} />)}</div></section>}
    <section><h2 className="mb-5 text-2xl font-extrabold"><T>All schemes</T></h2><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visible.map((scheme) => <SchemeLink key={`${scheme.category}-${scheme.slug}`} scheme={scheme} href={href(scheme.slug)} />)}</div></section>
  </>;
}

function SchemeLink({ scheme, href }: { scheme: { title: string; category: string }; href: string }) {
  return <Link href={href}><Card className="h-full transition hover:-translate-y-0.5 hover:border-primary"><Badge><T>{scheme.category}</T></Badge><h3 className="mt-3 font-bold"><T>{scheme.title}</T></h3><p className="mt-2 text-sm text-primary"><T>View details and application process →</T></p></Card></Link>;
}
