import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

const CALENDAR_URL = "https://calendly.com/pranjalhjain/30min";

const SUGGESTED = [
  "Tell me about Pranjal",
  "What projects has she worked on?",
  "What impact has she created?",
  "Why should I hire her?",
];

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-twin`;

const AITwin = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [showLabel, setShowLabel] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [recruiterCount] = useState(() => 47 + Math.floor(Math.random() * 18));
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show idle label bubble after a beat, hide once opened
  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 1600);
    return () => clearTimeout(t);
  }, []);

  // Detect when a project modal is open (body scroll-locked) → reduce prominence
  useEffect(() => {
    const check = () => setModalActive(document.body.style.overflow === "hidden" && !open);
    const observer = new MutationObserver(check);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    check();
    return () => observer.disconnect();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const userMsg: Msg = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next }),
      });

      if (resp.status === 429) {
        toast.error("Too many requests. Please wait a moment.");
        setLoading(false);
        return;
      }
      if (resp.status === 402) {
        toast.error("AI credits exhausted.");
        setLoading(false);
        return;
      }
      if (!resp.ok || !resp.body) throw new Error("Stream failed");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let assistant = "";
      let done = false;

      // create empty assistant message
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              assistant += delta;
              setMessages((prev) =>
                prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistant } : m))
              );
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Couldn't reach AI Twin. Try again.");
      setMessages((prev) => prev.filter((m) => m.content));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button + idle label bubble */}
      <motion.div
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: modalActive ? 0.8 : 1, scale: modalActive ? 0.95 : 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <AnimatePresence>
          {!open && showLabel && (
            <motion.button
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block bg-card border border-border rounded-full px-4 py-2 text-xs text-foreground shadow-lg hover:border-foreground/30 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hi, I'm Pranjal's AI Twin
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close chat" : "Open AI Twin"}
          className="relative w-[52px] h-[52px] rounded-full bg-foreground text-background flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
          animate={!open ? { scale: [1, 1.04, 1] } : { scale: 1 }}
          transition={!open ? { duration: 1.2, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" } : { duration: 0.2 }}
        >
          {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
          {!open && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-background" />
          )}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-[9999] w-[min(360px,calc(100vw-2rem))] h-[480px] bg-card border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    P
                  </div>
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-card" />
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Pranjal's AI Twin
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
                    Online · Trained on Pranjal's work
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="w-7 h-7 rounded-sm flex items-center justify-center hover:bg-muted/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hey I'm Pranjal's AI Twin. Ask me anything about her work, projects, or approach.
                  </p>
                  <div className="flex flex-col gap-2 pt-1">
                    {SUGGESTED.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-left text-xs px-3 py-2 rounded-sm border border-border text-foreground hover:border-foreground/40 hover:bg-muted/30 transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] text-sm rounded-md px-3 py-2 leading-relaxed ${
                      m.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-muted/50 text-foreground"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none dark:prose-invert [&>p]:my-1 [&>ul]:my-1 [&>ol]:my-1">
                        <ReactMarkdown>{m.content || "…"}</ReactMarkdown>
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}

              {loading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-muted/50 text-foreground rounded-md px-3 py-2 text-sm">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-pulse" />
                      <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-pulse [animation-delay:120ms]" />
                      <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-pulse [animation-delay:240ms]" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Booking CTA strip */}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border-t border-border text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Calendar className="w-3.5 h-3.5" />
              Book a 30-min sync
            </a>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 p-3 border-t border-border bg-card"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-8 h-8 flex items-center justify-center rounded-sm bg-foreground text-background disabled:opacity-30 hover:scale-105 transition-transform"
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AITwin;
