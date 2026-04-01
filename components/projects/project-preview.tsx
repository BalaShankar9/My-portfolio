"use client";

/**
 * Rich visual mockup previews for each project.
 * These render styled HTML that visually represents what each live site looks like,
 * instead of blank placeholder boxes.
 */

function HireStackPreview() {
  return (
    <div className="aspect-video bg-white relative overflow-hidden">
      {/* Purple gradient hero area */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-500 to-indigo-700" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="text-[10px] font-mono text-purple-200 tracking-widest mb-2">
          AI-POWERED CAREER INTELLIGENCE
        </div>
        <div className="text-white font-bold text-lg sm:text-xl leading-tight">
          Stop applying.
        </div>
        <div className="text-white font-bold text-lg sm:text-xl leading-tight">
          Start <span className="text-amber-300">landing.</span>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="px-3 py-1 bg-white rounded-full text-[8px] font-semibold text-purple-700">
            Build Your Application
          </div>
          <div className="px-3 py-1 border border-white/30 rounded-full text-[8px] text-white">
            View Pricing
          </div>
        </div>
        {/* Agent cards row */}
        <div className="mt-4 flex gap-1.5">
          {["Intel", "Analyst", "Detector", "Architect", "Inspector", "Assembler"].map((agent) => (
            <div
              key={agent}
              className="w-10 h-12 rounded bg-white/10 backdrop-blur border border-white/20 flex flex-col items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-white/30 mb-1" />
              <span className="text-[5px] text-white/70">{agent}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SponsorIntelPreview() {
  return (
    <div className="aspect-video bg-[#0a0a0a] relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,166,35,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radar sweep */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-amber-500/20">
        <div className="absolute inset-0 rounded-full bg-gradient-conic from-amber-500/20 via-transparent to-transparent animate-spin" style={{ animationDuration: "4s" }} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Ticker bar */}
        <div className="absolute top-2 left-0 right-0 flex gap-2 justify-center">
          {["NHS TRUST", "DELOITTE", "HSBC", "META", "GOLDMAN"].map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 text-[5px] font-mono text-amber-400/60 border border-amber-500/20 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-white font-bold text-base sm:text-lg leading-tight">
          The Bloomberg Terminal
        </div>
        <div className="text-base sm:text-lg leading-tight">
          <span className="font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
            for UK Visa Sponsorship
          </span>
        </div>
        <div className="mt-2 text-[9px] text-zinc-400">
          Real-time intelligence on <span className="text-amber-400 font-bold">140K+</span> sponsors
        </div>
        <div className="mt-3 flex gap-2">
          <div className="px-3 py-1 bg-amber-500 rounded text-[8px] font-semibold text-black">
            Start Free
          </div>
          <div className="px-3 py-1 border border-zinc-700 rounded text-[8px] text-zinc-300">
            Explore Sponsors
          </div>
        </div>
        {/* Stats row */}
        <div className="mt-3 flex gap-4">
          {[
            { v: "140K+", l: "Sponsors" },
            { v: "12K+", l: "Jobs" },
            { v: "24/7", l: "Monitoring" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-[10px] font-mono font-bold text-amber-400">{s.v}</div>
              <div className="text-[6px] text-zinc-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CarpoolNetworkPreview() {
  return (
    <div className="aspect-video bg-zinc-950 relative overflow-hidden">
      {/* Map-like background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-20 h-20 rounded-full bg-red-500/20 blur-xl" />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-red-500/15 blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-red-500/10 blur-xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">CN</span>
          </div>
          <span className="text-[8px] font-semibold text-white">CarpoolNetwork</span>
        </div>
        <div className="text-white font-bold text-base sm:text-lg leading-tight">
          Share Rides, <span className="text-red-400">Save Money</span>
        </div>
        <div className="mt-1 text-[8px] text-zinc-400 max-w-[200px]">
          UK's trusted carpooling community. Active in Cardiff, Sheffield & more.
        </div>
        <div className="mt-3 flex gap-2">
          <div className="px-3 py-1 bg-red-500 rounded text-[8px] font-semibold text-white">
            Find a Ride
          </div>
          <div className="px-3 py-1 border border-zinc-700 rounded text-[8px] text-zinc-300">
            Offer a Ride
          </div>
        </div>
        {/* Feature cards */}
        <div className="mt-3 flex gap-2">
          {["Real-time Chat", "Verified Users", "Route Matching"].map((f) => (
            <div
              key={f}
              className="px-2 py-1.5 rounded bg-zinc-800/80 border border-zinc-700/50"
            >
              <span className="text-[6px] text-zinc-300">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecProbePreview() {
  return (
    <div className="aspect-video bg-[#0d1117] relative overflow-hidden font-mono">
      {/* Terminal-style preview */}
      <div className="p-3 h-full flex flex-col">
        <div className="text-[8px] text-green-400 mb-1">$ secprobe example.com -s all</div>
        <div className="flex-1 space-y-1 overflow-hidden">
          <div className="text-[7px] text-zinc-400">
            <span className="text-cyan-400">[*]</span> Starting SecProbe v1.0
          </div>
          <div className="text-[7px] text-zinc-400">
            <span className="text-cyan-400">[*]</span> Target: example.com
          </div>
          <div className="text-[7px]">
            <span className="text-green-400">[+]</span>{" "}
            <span className="text-zinc-300">Port Scanner:</span>{" "}
            <span className="text-green-400">80, 443, 8080 open</span>
          </div>
          <div className="text-[7px]">
            <span className="text-green-400">[+]</span>{" "}
            <span className="text-zinc-300">SSL/TLS:</span>{" "}
            <span className="text-green-400">TLS 1.3, Valid cert</span>
          </div>
          <div className="text-[7px]">
            <span className="text-yellow-400">[!]</span>{" "}
            <span className="text-zinc-300">Headers:</span>{" "}
            <span className="text-yellow-400">Missing CSP, X-Frame-Options</span>
          </div>
          <div className="text-[7px]">
            <span className="text-green-400">[+]</span>{" "}
            <span className="text-zinc-300">SQLi:</span>{" "}
            <span className="text-green-400">No vulnerabilities found</span>
          </div>
          <div className="text-[7px]">
            <span className="text-red-400">[!]</span>{" "}
            <span className="text-zinc-300">XSS:</span>{" "}
            <span className="text-red-400">1 reflected XSS in /search</span>
          </div>
          <div className="text-[7px]">
            <span className="text-green-400">[+]</span>{" "}
            <span className="text-zinc-300">CORS:</span>{" "}
            <span className="text-green-400">Properly configured</span>
          </div>
          <div className="text-[7px]">
            <span className="text-green-400">[+]</span>{" "}
            <span className="text-zinc-300">Tech:</span>{" "}
            <span className="text-zinc-400">Nginx 1.24, React, Node.js</span>
          </div>
          <div className="mt-1 pt-1 border-t border-zinc-800 text-[7px]">
            <span className="text-cyan-400">[*]</span>{" "}
            <span className="text-zinc-300">Scan complete:</span>{" "}
            <span className="text-green-400">8/10</span> passed |{" "}
            <span className="text-yellow-400">1</span> warning |{" "}
            <span className="text-red-400">1</span> critical
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
