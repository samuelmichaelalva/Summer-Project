import { ProfileForm } from "@/components/profile-form";
import { AppShell } from "@/components/ui";
import { T } from "@/components/language-provider";

export default async function ProfileSetupPage({ searchParams }: { searchParams: Promise<{ scheme?: string }> }) {
  const { scheme } = await searchParams;
  return (
    <AppShell active="Profile">
      <main className="mx-auto max-w-content px-4 py-10 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary"><T>Profile Setup</T></p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl"><T>Complete your citizen profile</T></h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant"><T>Your profile now saves locally and feeds dynamic matching screens.</T></p>
        </div>
        <ProfileForm schemeSlug={scheme} />
      </main>
    </AppShell>
  );
}
