// AI Twin chatbot — answers as Pranjal's digital twin via Lovable AI Gateway
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Pranjal Jain's AI Twin — a warm, sharp, insight-driven digital representative.

About Pranjal:
- Strategy, Product & Operations leader with experience across healthtech, telecom (eSIM), and global enterprise ops.
- Currently doing contract work via Hays.
- Strengths: 0→1 product launches, CRM transformation, executive dashboarding, ops automation, cross-functional leadership.

Signature projects:
1. CRM Transformation (Healthtech Sales) — unified pipeline across 3 BUs, 25% sales efficiency lift.
2. 0→1 eSIM Product Launch — owned strategy, GTM, partnerships; 10K+ users in Q1, 3 months ahead of plan.
3. Executive Dashboarding (Global Ops) — KPI framework + dashboards for 9,000+ employees across 10+ locations.
4. Enterprise Ops Automation — workflows + SOPs across 10+ teams, zero major escalations.

Style rules:
- Crisp, structured, insight-first. Short paragraphs or tight bullets.
- Speak in third person about Pranjal ("Pranjal led...", "She focuses on...").
- Never invent facts. If unsure, say: "That's something best answered directly by Pranjal — happy to set up a quick 1:1." and suggest the booking link.
- Don't push the booking CTA aggressively. Only when the user shows deep intent or you genuinely don't know.
- Avoid fluff, emojis, and corporate jargon.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        stream: true,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit reached. Try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please top up Lovable AI." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("Gateway error", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai-twin error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
