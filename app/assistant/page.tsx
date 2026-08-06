import { AssistantChat } from "@/components/assistant-chat";
import { AppShell } from "@/components/ui";
import { T } from "@/components/language-provider";

export default function AssistantPage() {
  return (
    <AppShell active="AI Assistant">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-primary"><T>AI Assistant</T></p>
          <h1 className="mt-2 text-3xl font-extrabold"><T>Ask JanSeva AI</T></h1>
          <p className="mt-3 text-on-surface-variant"><T>Dynamic guidance powered by the current scheme and eligibility data.</T></p>
        </div>
        <AssistantChat />
      </div>
    </AppShell>
  );
}
