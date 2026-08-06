"use client";

import { RefreshCw, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui";
import { useLanguage } from "@/components/language-provider";

export function AssistantChat() {
  const [input, setInput] = useState("");
  const { language } = useLanguage();
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Namaste. Ask me about schemes, eligibility, or documents." },
  ]);

  async function send() {
    if (!input.trim()) return;
    const next = [...messages, { role: "user", text: input }];
    setMessages(next);
    setInput("");
    try { const response = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: input, language, context: "/assistant", history: messages.slice(-8) }) }); const data = await response.json(); setMessages([...next, { role: "assistant", text: data.answer || "I could not prepare an answer." }]); } catch { setMessages([...next, { role: "assistant", text: "JanSeva AI is temporarily unavailable." }]); }
  }

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white"><Sparkles size={22} /></div><div className="flex-1"><h2 className="font-bold">JanSeva Assistant</h2><p className="text-xs font-semibold text-secondary">Ready to help</p></div><button onClick={() => setMessages([{ role: "assistant", text: "Chat refreshed. How can I help?" }])} className="inline-flex items-center gap-1 text-xs font-bold text-primary" type="button"><RefreshCw size={14} /> Refresh Chat</button></div>
      <div className="space-y-4">{messages.map((message, index) => <Bubble key={index} mine={message.role === "user"}>{message.text}</Bubble>)}</div>
      <div className="mt-6 flex gap-2 border-t border-outline-variant pt-4">
        <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && send()} className="h-11 flex-1 rounded-full border border-outline-variant bg-white px-4 text-sm" placeholder="Type your question..." />
        <button onClick={send} className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white" aria-label="Send message"><Send size={18} /></button>
      </div>
    </Card>
  );
}

function Bubble({ children, mine = false }: { children: React.ReactNode; mine?: boolean }) {
  return <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-6 ${mine ? "ml-auto rounded-tr-sm bg-primary text-white" : "rounded-tl-sm bg-surface-container-high"}`}>{children}</div>;
}
