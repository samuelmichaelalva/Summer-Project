import { Send, Sparkles } from "lucide-react";
import { AppShell, Card } from "@/components/ui";

export default function AssistantPage() {
  return (
    <AppShell active="AI Assistant">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">AI Assistant</p>
          <h1 className="mt-2 text-3xl font-extrabold">Ask JanSeva AI</h1>
          <p className="mt-3 text-on-surface-variant">A UI-only chat surface for future intelligent, multilingual scheme guidance.</p>
        </div>
        <Card>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
              <Sparkles size={22} />
            </div>
            <div>
              <h2 className="font-bold">JanSeva Assistant</h2>
              <p className="text-xs font-semibold text-secondary">Ready to help</p>
            </div>
          </div>
          <div className="space-y-4">
            <Bubble>Namaste. Tell me your state, income range, and need. I can explain relevant schemes in simple language.</Bubble>
            <Bubble mine>I need education support for my daughter.</Bubble>
            <Bubble>Great. I can compare scholarship schemes and prepare a checklist once your profile details are complete.</Bubble>
          </div>
          <div className="mt-6 flex gap-2 border-t border-outline-variant pt-4">
            <input className="h-11 flex-1 rounded-full border border-outline-variant bg-white px-4 text-sm" placeholder="Type your question..." />
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white" aria-label="Send message">
              <Send size={18} />
            </button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

function Bubble({ children, mine = false }: { children: React.ReactNode; mine?: boolean }) {
  return <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-6 ${mine ? "ml-auto rounded-tr-sm bg-primary text-white" : "rounded-tl-sm bg-surface-container-high"}`}>{children}</div>;
}
