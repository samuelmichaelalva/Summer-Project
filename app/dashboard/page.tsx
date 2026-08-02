import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText, TriangleAlert } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AppShell, Badge, Button, Card } from "@/components/ui";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/crypto-utils";
import { directorySchemes } from "@/lib/data";
import { matchSchemes } from "@/lib/eligibility";

export default async function DashboardPage() {
  const token = (await cookies()).get("janseva_session")?.value;
  const session = token && verifyToken(token);
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    include: { profile: true, applications: { include: { scheme: { include: { translations: true } } }, orderBy: { updatedAt: "desc" }, take: 5 } },
  });
  if (!user) redirect("/login");

  const profile = user.profile;
  const matches = profile ? matchSchemes({
    state: profile.state,
    incomeBand: profile.incomeBand,
    occupation: `${profile.occupation} ${profile.employmentStatus}`,
    householdSize: profile.householdSize,
    hasAadhaar: profile.hasAadhaar,
    hasBankAccount: profile.hasBankAccount,
    needs: [profile.primaryNeed, profile.socialCategory, profile.educationLevel].filter(Boolean),
  }) : [];
  const missing = [
    ["State", profile?.state], ["District", profile?.district], ["Age", profile?.dateOfBirth],
    ["Social category", profile?.socialCategory], ["Education", profile?.educationLevel],
    ["Occupation", profile?.occupation], ["Income", profile?.incomeBand],
  ].filter(([, value]) => !value).map(([label]) => label);

  return (
    <AppShell active="Dashboard">
      <div className="mx-auto max-w-content">
        <div className="grid gap-6 md:grid-cols-3">
          <section className="relative overflow-hidden rounded-2xl bg-primary-container p-6 text-white shadow-soft md:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wider opacity-85">Profile-based scheme matches</p>
            <h1 className="mt-3 text-4xl font-extrabold">{matches.length} schemes found</h1>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">{profile ? "Based on your saved profile" : "Complete your profile to get matches"}</span>
              <Link href="/schemes"><Button variant="secondary">Explore Schemes</Button></Link>
            </div>
          </section>
          <Card className="text-center">
            <p className="mb-5 text-sm font-semibold text-on-surface-variant">Profile Completion</p>
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-primary bg-surface-container-low text-2xl font-extrabold">{profile?.completionPercent ?? 0}%</div>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">{user.name} · {profile?.state || "Add your state"}</p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="space-y-6 lg:col-span-2">
            <div className="flex items-center justify-between"><h2 className="text-2xl font-bold">Eligible Schemes</h2><Link href="/schemes" className="text-sm font-bold text-primary">View All</Link></div>
            {matches.length ? <div className="grid gap-5 md:grid-cols-2">{matches.slice(0, 4).map((scheme) => <Card key={scheme.slug} className="group"><div className="mb-5 flex items-start justify-between"><div className="rounded-xl bg-surface-container p-3 text-primary"><scheme.icon size={24} /></div><Badge tone="green">{scheme.readiness}% match</Badge></div><h3 className="text-lg font-bold">{scheme.title}</h3><p className="mt-2 text-sm leading-6 text-on-surface-variant">{scheme.benefit}</p><p className="mt-3 text-xs font-bold text-secondary">{scheme.reasons[0] || "Profile details match"}</p><div className="mt-5 flex items-center justify-between border-t border-outline-variant pt-4"><span className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant"><Clock size={16} /> {scheme.deadline}</span><Link href={`/schemes/${scheme.slug}`} className="flex items-center gap-1 text-sm font-bold text-primary">Details <ArrowRight size={16} /></Link></div></Card>)}</div> : <Card><p className="font-semibold">Complete more profile details to see personalized matches.</p><Link href="/profile-setup" className="mt-4 inline-flex text-sm font-bold text-primary">Complete profile <ArrowRight size={16} /></Link></Card>}
          </section>

          <aside className="space-y-6">
            <Card className="border-error-container bg-error-container/35"><div className="mb-4 flex items-center gap-2 text-error"><TriangleAlert size={20} /><h2 className="text-sm font-extrabold uppercase">Profile checklist</h2></div>{missing.length ? <><p className="text-sm text-on-surface-variant">Add these details for better eligibility matching:</p><p className="mt-3 text-sm font-semibold">{missing.join(" · ")}</p><Link href="/profile-setup"><Button variant="danger" className="mt-4 w-full">Update Profile</Button></Link></> : <p className="text-sm font-semibold text-secondary">Your core eligibility details are complete.</p>}</Card>
            <Card><div className="mb-5 flex items-center justify-between"><h2 className="font-bold">Recent Applications</h2><span className="text-xs font-bold text-on-surface-variant">{user.applications.length} saved</span></div>{user.applications.length ? user.applications.map((application) => <div key={application.id} className="mb-5 flex gap-3 last:mb-0"><div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container"><CheckCircle2 size={14} /></div><div><p className="text-sm font-semibold">{application.scheme.translations.find((translation) => translation.language === "English")?.title || application.scheme.slug}</p><p className="text-xs capitalize text-on-surface-variant">{application.status.replace("_", " ")}</p></div></div>) : <p className="text-sm text-on-surface-variant">No applications saved yet.</p>}</Card>
            <Card><div className="flex items-center gap-3"><FileText className="text-primary" size={24} /><div><p className="font-bold">Schemes available</p><p className="text-sm text-on-surface-variant">{directorySchemes.length} listed schemes to explore</p></div></div></Card>
          </aside>
        </div>
      </div>
    </AppShell>
  );
}
