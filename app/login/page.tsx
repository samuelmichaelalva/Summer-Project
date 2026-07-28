import { ShieldCheck } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { Card, LanguagePills, TopNav } from "@/components/ui";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav active="Profile" />
      <main className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-content items-center gap-8 px-4 py-10 md:grid-cols-2 md:px-10">
        <section>
          <div className="inline-flex rounded-full bg-primary-fixed px-3 py-1 text-xs font-bold text-on-primary-fixed">Secure Citizen Access</div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">Login or register to continue your benefit journey</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-on-surface-variant">A simple bilingual access screen with visible labels, touch-friendly inputs, and privacy-first reassurance.</p>
          <div className="mt-7">
            <LanguagePills />
          </div>
        </section>
        <Card className="mx-auto w-full max-w-md">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Citizen Account</h2>
              <p className="text-sm text-on-surface-variant">Login/Register</p>
            </div>
          </div>
          <LoginForm />
        </Card>
      </main>
    </div>
  );
}
