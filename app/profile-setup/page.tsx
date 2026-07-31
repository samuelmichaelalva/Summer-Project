import { ProfileForm } from "@/components/profile-form";
import { TopNav } from "@/components/ui";

export default async function ProfileSetupPage({ searchParams }: { searchParams: Promise<{ scheme?: string }> }) {
  const { scheme } = await searchParams;
  return (
    <div className="min-h-screen bg-background">
      <TopNav active="Profile" />
      <main className="mx-auto max-w-content px-4 py-10 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Profile Setup</p>
          <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">Complete your citizen profile</h1>
          <p className="mt-3 max-w-2xl text-on-surface-variant">Your profile now saves locally and feeds dynamic matching screens.</p>
        </div>
        <ProfileForm schemeSlug={scheme} />
      </main>
    </div>
  );
}
