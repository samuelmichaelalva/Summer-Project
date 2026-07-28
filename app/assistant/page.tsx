import { AssistantChat } from "@/components/assistant-chat";
import { AppShell } from "@/components/ui";

export default function AssistantPage() {
  return (
    <AppShell active="AI Assistant">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">AI Assistant</p>
          <h1 className="mt-2 text-3xl font-extrabold">Ask JanSeva AI</h1>
          <p className="mt-3 text-on-surface-variant">Dynamic guidance powered by the current scheme and eligibility data.</p>
        </div>
        <AssistantChat />
      </div>
    </AppShell>
  );
}
