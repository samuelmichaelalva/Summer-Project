import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles } from "lucide-react";
import { benefits, featureCards } from "@/lib/data";
import { Badge, Button, Card, LanguagePills, TopNav } from "@/components/ui";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav active="Home" />
      <main>
        <section className="relative overflow-hidden px-4 py-14 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Badge>Government of India Initiative</Badge>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-on-surface md:text-6xl">
                Find government benefits <span className="text-primary">you are eligible for</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-on-surface-variant">
                Navigate Indian welfare schemes with a clear multilingual interface that helps citizens discover, understand, and prepare applications.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/login">
                  <Button>
                    Get Started <ArrowRight size={18} />
                  </Button>
                </Link>
                <Button variant="secondary">
                  <PlayCircle size={18} /> How it works
                </Button>
              </div>
              <div className="mt-8">
                <LanguagePills />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass-card rounded-[2rem] p-6 shadow-soft">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-container text-white">
                      <Sparkles size={22} />
                    </div>
                    <div>
                      <p className="font-semibold">JanSeva Assistant</p>
                      <p className="text-xs font-semibold text-secondary">Online and ready</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <ChatBubble>Namaste. I can help you find benefits for education, health, housing, and farming.</ChatBubble>
                  <ChatBubble mine>I am from Karnataka and my annual income is under Rs. 2.5 lakh.</ChatBubble>
                  <ChatBubble>You may qualify for 4 schemes, including Vidya Siri. Review application steps now?</ChatBubble>
                </div>
                <div className="mt-6 flex gap-2 border-t border-outline-variant pt-4">
                  <div className="flex-1 rounded-full border border-outline-variant bg-white px-4 py-2 text-sm text-on-surface-variant">Type a message...</div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white" aria-label="Send">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-inverse-surface px-4 py-8 text-inverse-on-surface md:px-10">
          <div className="mx-auto grid max-w-content gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-extrabold text-secondary-container">{item.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low px-4 py-14 md:px-10">
          <div className="mx-auto max-w-content">
            <div className="mb-9 text-center">
              <h2 className="text-3xl font-bold">Smarter bureaucracy, better living</h2>
              <p className="mx-auto mt-3 max-w-2xl text-on-surface-variant">Designed for every citizen, with responsive pages and multilingual UI patterns.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {featureCards.map((feature) => (
                <Card key={feature.title}>
                  <feature.icon className="mb-5 text-primary" size={32} />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">{feature.copy}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ChatBubble({ children, mine = false }: { children: React.ReactNode; mine?: boolean }) {
  return <div className={`max-w-[88%] rounded-2xl p-4 text-sm leading-6 ${mine ? "ml-auto rounded-tr-sm bg-primary text-white" : "rounded-tl-sm bg-surface-container-high text-on-surface"}`}>{children}</div>;
}
