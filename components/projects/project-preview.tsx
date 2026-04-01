"use client";

/**
 * Pixel-accurate visual mockup previews for each project.
 * Built from real site inspection data — colors, text, layout match the live sites.
 */

function HireStackPreview() {
  return (
    <div className="aspect-video relative overflow-hidden" style={{ background: "hsl(220, 20%, 97%)" }}>
      {/* Decorative gradient blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30" style={{ background: "radial-gradient(circle, hsl(245, 58%, 51%, 0.15), transparent 70%)" }} />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(112,71,235,0.12), transparent 70%)" }} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
        {/* Nav bar hint */}
        <div className="absolute top-2 left-0 right-0 flex items-center justify-between px-4">
          <span className="text-[8px] font-bold" style={{ color: "hsl(224, 40%, 10%)" }}>HireStack AI</span>
          <div className="flex gap-2">
            <span className="text-[6px]" style={{ color: "hsl(224, 40%, 40%)" }}>Pricing</span>
            <span className="text-[6px] px-1.5 py-0.5 rounded-full text-white" style={{ background: "hsl(245, 58%, 51%)" }}>Try Free</span>
          </div>
        </div>

        <div className="text-[18px] sm:text-[22px] font-bold leading-tight" style={{ color: "hsl(224, 40%, 10%)" }}>
          Stop applying.
        </div>
        <div className="text-[18px] sm:text-[22px] font-bold leading-tight" style={{ color: "hsl(224, 40%, 10%)" }}>
          Start <span style={{ color: "hsl(245, 58%, 51%)" }}>landing.</span>
        </div>
        <div className="mt-1.5 text-[7px] max-w-[280px]" style={{ color: "hsl(224, 20%, 45%)" }}>
          6 AI agents collaborate to build your perfect application package — ATS-optimized CV, cover letter, and more.
        </div>

        {/* Stats row */}
        <div className="mt-2.5 flex gap-3">
          {[
            { v: "35+", l: "document types" },
            { v: "6", l: "AI agents" },
            { v: "94%", l: "ATS pass rate" },
            { v: "<3 min", l: "per application" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-[9px] font-bold" style={{ color: "hsl(245, 58%, 51%)" }}>{s.v}</div>
              <div className="text-[5px]" style={{ color: "hsl(224, 20%, 55%)" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-2.5 flex gap-2">
          <div className="px-3 py-1 rounded-lg text-[7px] font-semibold text-white shadow-sm" style={{ background: "hsl(245, 58%, 51%)" }}>
            Build Your Application — Free
          </div>
          <div className="px-3 py-1 rounded-lg text-[7px] font-medium border" style={{ color: "hsl(224, 40%, 30%)", borderColor: "hsl(220, 13%, 85%)" }}>
            View Pricing
          </div>
        </div>

        {/* Agent cards */}
        <div className="mt-3 flex gap-1">
          {["ReconIntel", "Atlas", "Cipher", "Quill", "Sentinel", "Nova"].map((agent) => (
            <div
              key={agent}
              className="w-9 h-11 rounded-lg flex flex-col items-center justify-center border shadow-sm"
              style={{ background: "white", borderColor: "hsl(220, 13%, 90%)" }}
            >
              <div className="w-3 h-3 rounded-full mb-0.5" style={{ background: "hsl(245, 58%, 51%, 0.15)" }} />
              <span className="text-[4px] font-medium" style={{ color: "hsl(224, 20%, 45%)" }}>{agent}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SponsorIntelPreview() {
  return (
    <div className="aspect-video bg-[#0a0a0a] relative overflow-hidden" style={{ fontFamily: "ui-monospace, monospace" }}>
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,166,35,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          mask: "radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)",
          WebkitMask: "radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)",
        }}
      />

      {/* Radar rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-40 h-40 rounded-full border border-[#f5a623]/10 absolute -translate-x-1/2 -translate-y-1/2" />
        <div className="w-28 h-28 rounded-full border border-[#f5a623]/15 absolute -translate-x-1/2 -translate-y-1/2" />
        <div className="w-16 h-16 rounded-full border border-[#f5a623]/20 absolute -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Nav */}
        <div className="absolute top-2 left-0 right-0 flex items-center justify-between px-3">
          <div className="flex items-center gap-1">
            <span className="text-[7px] font-bold text-[#f5a623]">SI</span>
            <span className="text-[6px] text-zinc-500">SPONSORINTEL</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[5px] text-zinc-500">Search</span>
            <span className="text-[5px] text-zinc-500">Jobs</span>
            <span className="text-[5px] text-zinc-500">Trends</span>
            <span className="text-[5px] px-1.5 py-0.5 rounded bg-[#f5a623] text-black font-bold">Start Free</span>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute top-7 left-0 right-0 flex gap-1.5 justify-center overflow-hidden">
          {["NHS TRUST LONDON", "DELOITTE UK", "HSBC BANK PLC", "META PLATFORMS", "GOLDMAN SACHS"].map((tag) => (
            <span key={tag} className="px-1 py-0.5 text-[4px] text-[#f5a623]/50 border border-[#f5a623]/15 rounded whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-white font-bold text-[16px] sm:text-[18px] leading-tight mt-2">
          The Bloomberg Terminal
        </div>
        <div className="text-[16px] sm:text-[18px] leading-tight font-bold">
          <span style={{ background: "linear-gradient(135deg, #fff 0%, #f5a623 50%, #00e5ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            for Visas
          </span>
        </div>
        <div className="mt-1.5 text-[7px] text-zinc-500 max-w-[260px]">
          Real-time intelligence on <span className="text-[#f5a623] font-bold">140,312+</span> UK visa sponsors. AI-powered job matching, policy alerts, risk signals.
        </div>

        {/* CTAs */}
        <div className="mt-2.5 flex gap-2">
          <div className="px-2.5 py-1 bg-[#f5a623] rounded text-[7px] font-bold text-black">
            Start Free →
          </div>
          <div className="px-2.5 py-1 border border-zinc-700 rounded text-[7px] text-zinc-300">
            Explore Sponsors
          </div>
        </div>

        {/* Stats */}
        <div className="mt-2.5 flex gap-3">
          {[
            { v: "140K+", l: "Sponsors Tracked" },
            { v: "12K+", l: "Jobs Indexed" },
            { v: "24/7", l: "AI Agents Active" },
          ].map((s) => (
            <div key={s.l} className="text-center px-2 py-1 rounded border border-white/5 bg-white/[0.03]" style={{ backdropFilter: "blur(10px)" }}>
              <div className="text-[9px] font-bold text-[#f5a623]">{s.v}</div>
              <div className="text-[4px] text-zinc-600">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CarpoolNetworkPreview() {
  return (
    <div className="aspect-video relative overflow-hidden">
      {/* White nav bar at top */}
      <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-100 px-4 py-1.5 flex items-center justify-between z-20">
        <span className="text-[7px] font-bold text-gray-900">Carpool Network</span>
        <div className="flex gap-2 items-center">
          <span className="text-[5px] text-gray-500">How It Works</span>
          <span className="text-[5px] text-gray-500">Communities</span>
          <span className="text-[5px] text-gray-500">Safety</span>
          <span className="text-[5px] text-red-600">Sign In</span>
          <span className="text-[5px] px-1.5 py-0.5 rounded-md text-white font-bold bg-gradient-to-r from-red-500 to-orange-500">Get Started</span>
        </div>
      </div>

      {/* Bold red-to-orange gradient hero — matching the real site */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-orange-500" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center pt-4">
        <div className="flex items-center gap-3 w-full max-w-[350px]">
          {/* Left side: text */}
          <div className="flex-1 text-left">
            <div className="text-white font-bold text-[16px] sm:text-[19px] leading-tight">
              Share Rides.
            </div>
            <div className="text-white font-bold text-[16px] sm:text-[19px] leading-tight">
              Save Money.
            </div>
            <div className="font-bold text-[16px] sm:text-[19px] leading-tight text-orange-200">
              Help the Planet.
            </div>
            <div className="mt-1.5 text-[7px] text-red-100/80 max-w-[180px]">
              Join our growing community of UK commuters sharing their daily journeys.
            </div>

            <div className="mt-2.5 flex gap-2">
              <div className="px-2.5 py-1 bg-white rounded-xl text-[7px] font-semibold text-red-600 shadow-sm">
                Get Started Free
              </div>
              <div className="px-2.5 py-1 border-2 border-white rounded-xl text-[7px] text-white font-medium">
                How It Works
              </div>
            </div>

            <div className="mt-1 text-[5px] text-red-200">
              Free to join. No credit card required.
            </div>
          </div>

          {/* Right side: frosted stats card */}
          <div className="w-[120px] bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/20">
            <div className="grid grid-cols-2 gap-2">
              {[
                { v: "500+", l: "Members" },
                { v: "1.2K", l: "Rides Shared" },
                { v: "890", l: "Completed" },
                { v: "4.9", l: "Avg Rating" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-[10px] font-bold text-white">{s.v}</div>
                  <div className="text-[4px] text-red-100/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecProbePreview() {
  return (
    <div className="aspect-video bg-[#0d1117] relative overflow-hidden font-mono">
      <div className="p-3 h-full flex flex-col">
        <div className="text-[8px] text-green-400 mb-1.5">
          <span className="text-zinc-500">$</span> secprobe example.com -s all -o console
        </div>
        <div className="flex-1 space-y-[3px] overflow-hidden">
          <div className="text-[6.5px] text-cyan-400">
            ═══ SecProbe v1.0 — Security Testing Toolkit ═══
          </div>
          <div className="text-[6.5px] text-zinc-500">Target: example.com | Modules: 10/10</div>
          <div className="h-px bg-zinc-800 my-1" />
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">Port Scanner</span> <span className="text-green-400 ml-1">80, 443, 8080 open</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">SSL/TLS</span> <span className="text-green-400 ml-1">TLS 1.3 — A+ grade</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-yellow-400">⚠</span> <span className="text-zinc-400">Headers</span> <span className="text-yellow-400 ml-1">Missing CSP, X-Frame-Options</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">SQLi</span> <span className="text-green-400 ml-1">No injection points found</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-red-400">✗</span> <span className="text-zinc-400">XSS</span> <span className="text-red-400 ml-1">1 reflected XSS in /search?q=</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">Directory</span> <span className="text-green-400 ml-1">No exposed paths</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">DNS</span> <span className="text-zinc-500 ml-1">3 subdomains found</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">Cookies</span> <span className="text-green-400 ml-1">Secure, HttpOnly, SameSite</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">CORS</span> <span className="text-green-400 ml-1">Properly restricted</span>
          </div>
          <div className="text-[6.5px]">
            <span className="text-green-400">✓</span> <span className="text-zinc-400">Tech</span> <span className="text-zinc-500 ml-1">Nginx 1.24 · React · Node.js</span>
          </div>
          <div className="h-px bg-zinc-800 my-1" />
          <div className="text-[7px] font-bold">
            <span className="text-cyan-400">Score:</span>{" "}
            <span className="text-green-400">B+</span>{" "}
            <span className="text-zinc-600">|</span>{" "}
            <span className="text-green-400">8</span> <span className="text-zinc-600">pass</span>{" "}
            <span className="text-yellow-400">1</span> <span className="text-zinc-600">warn</span>{" "}
            <span className="text-red-400">1</span> <span className="text-zinc-600">critical</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const previewMap: Record<string, React.ComponentType> = {
  "hirestack-ai": HireStackPreview,
  sponsorintel: SponsorIntelPreview,
  carpoolnetwork: CarpoolNetworkPreview,
  secprobe: SecProbePreview,
};

export function ProjectPreview({ slug }: { slug: string }) {
  const Preview = previewMap[slug];
  if (!Preview) {
    return (
      <div className="aspect-video bg-zinc-900 flex items-center justify-center">
        <span className="text-4xl font-bold text-zinc-800 font-mono">
          {slug[0]?.toUpperCase()}
        </span>
      </div>
    );
  }
  return <Preview />;
}
