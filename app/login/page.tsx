import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button, Card, LanguagePills, TopNav } from "@/components/ui";

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
          <div className="grid grid-cols-2 rounded-lg bg-surface-container p-1">
            <button className="rounded-md bg-white py-2 text-sm font-bold shadow-sm">Login</button>
            <button className="rounded-md py-2 text-sm font-bold text-on-surface-variant">Register</button>
          </div>
          <form className="mt-6 space-y-4">
            <Field label="Mobile number or email" placeholder="Enter registered contact" />
            <Field label="Password" placeholder="Enter password" type="password" />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-on-surface-variant">
                <input type="checkbox" className="rounded border-outline-variant" /> Remember me
              </label>
              <a className="font-semibold text-primary" href="#">Forgot password?</a>
            </div>
            <Link href="/profile-setup" className="block">
              <Button className="w-full">
                Continue <ArrowRight size={18} />
              </Button>
            </Link>
          </form>
        </Card>
      </main>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input className="h-11 w-full rounded-lg border border-outline-variant bg-white px-3 text-sm" placeholder={placeholder} type={type} />
    </label>
  );
}
