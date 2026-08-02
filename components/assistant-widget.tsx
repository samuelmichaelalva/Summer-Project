"use client";

import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function AssistantWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLElement>(null);
  const [messages, setMessages] = useState([{ role: "assistant", text: "Namaste! Ask me about this page, schemes, eligibility, or applications." }]);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { const close = (event: MouseEvent) => { const target = event.target; if (!boxRef.current?.contains(target as Node) && !(target instanceof Element && target.closest("[data-assistant-launcher]"))) setOpen(false); }; document.addEventListener("mousedown", close); return () => document.removeEventListener("mousedown", close); }, []);
  if (pathname === "/assistant") return null;

  async function send() {
    if (!input.trim() || loading) return;
    const message = input.trim();
    setMessages((items) => [...items, { role: "user", text: message }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, context: pathname }) });
      const data = await res.json();
      setMessages((items) => [...items, { role: "assistant", text: data.answer || "I could not find an answer yet." }]);
    } finally { setLoading(false); }
  }

  return <>
    {open && <section ref={boxRef} className="fixed bottom-24 right-5 z-[70] flex h-[min(30rem,calc(100vh-8rem))] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-2xl">
      <header className="flex items-center justify-between bg-primary p-4 text-white"><div className="flex items-center gap-2"><Sparkles size={18} /><div><p className="font-bold">JanSeva AI</p><p className="text-xs opacity-80">Context: {pathname.slice(1) || "home"}</p></div></div><div className="flex items-center gap-2"><button onClick={() => setMessages([{ role: "assistant", text: "Chat refreshed. How can I help?" }])} className="text-xs underline" type="button">Refresh Chat</button><button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button></div></header>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">{messages.map((message, index) => <p key={index} className={`max-w-[88%] rounded-xl p-3 text-sm leading-5 ${message.role === "user" ? "ml-auto bg-primary text-white" : "bg-surface-container-high"}`}>{message.text}</p>)}{loading && <p className="text-sm text-on-surface-variant">Thinking...</p>}</div>
      <div className="flex gap-2 border-t border-outline-variant p-3"><input autoFocus={open} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && send()} className="h-10 min-w-0 flex-1 rounded-full border border-outline-variant px-3 text-sm" placeholder="Ask JanSeva AI..." /><button onClick={send} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white" aria-label="Send"><Send size={16} /></button></div>
    </section>}
    <button data-assistant-launcher onClick={() => setOpen(!open)} className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105" aria-label={open ? "Close JanSeva AI" : "Open JanSeva AI"}>{open ? <X size={22} /> : <MessageCircle size={24} />}</button>
  </>;
}
