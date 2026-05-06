import { useState } from "react";
import { Navbar } from "@/components/aqi/Navbar";
import Spline from "@splinetool/react-spline";
import { Activity, ZoomIn, AlertTriangle, Car, Factory, Flame } from "lucide-react";

const pollutants = {
  PM25: {
    key: "PM25",
    name: "PM2.5",
    sub: "PARTICULATE",
    full: "FINE PARTICULATE MATTER",
    micro: "< 2.5 μm",
    impact: "High Risk",
    impactColor: "text-destructive",
    size: "30X SMALLER THAN A HUMAN HAIR",
    health: '"Can enter deep into the lungs and blood stream."',
    sources: ["Vehicle exhaust", "Power plants", "Wood burning"],
  },
  PM10: {
    key: "PM10",
    name: "PM10",
    sub: "PARTICULATE",
    full: "COARSE PARTICULATE MATTER",
    micro: "< 10 μm",
    impact: "Moderate Risk",
    impactColor: "text-yellow-500",
    size: "7X SMALLER THAN A HUMAN HAIR",
    health: '"Can irritate airways and worsen asthma."',
    sources: ["Dust", "Construction", "Pollen"],
  },
  NO2: {
    key: "NO2", name: "NO2", sub: "GAS",
    full: "NITROGEN DIOXIDE", micro: "Gas", impact: "High Risk", impactColor: "text-destructive",
    size: "REACTIVE OXIDIZING GAS",
    health: '"Inflames the lining of the lungs."',
    sources: ["Vehicle exhaust", "Power plants", "Gas stoves"],
  },
  CO: {
    key: "CO", name: "CO", sub: "GAS",
    full: "CARBON MONOXIDE", micro: "Gas", impact: "High Risk", impactColor: "text-destructive",
    size: "ODORLESS COLORLESS GAS",
    health: '"Reduces oxygen delivery to organs."',
    sources: ["Vehicle exhaust", "Heaters", "Wood burning"],
  },
  SO2: {
    key: "SO2", name: "SO2", sub: "GAS",
    full: "SULFUR DIOXIDE", micro: "Gas", impact: "Moderate Risk", impactColor: "text-yellow-500",
    size: "PUNGENT IRRITATING GAS",
    health: '"Triggers asthma and bronchoconstriction."',
    sources: ["Power plants", "Industry", "Volcanoes"],
  },
};

const sourceIcons: Record<string, any> = {
  "Vehicle exhaust": Car, "Power plants": Factory, "Wood burning": Flame,
  "Dust": Factory, "Construction": Factory, "Pollen": Flame,
  "Gas stoves": Flame, "Heaters": Flame, "Industry": Factory, "Volcanoes": Flame,
};

const Particles = () => {
  const [active, setActive] = useState<keyof typeof pollutants>("PM25");
  const p = pollutants[active];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/zAPUcYww3wmIxBcH/scene.splinecode" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <section className="container py-16">
          <div className="text-xs font-bold tracking-[0.2em] text-primary flex items-center gap-2">
            <Activity className="w-4 h-4" /> VISUAL SIMULATION
          </div>
          <h1 className="text-5xl md:text-6xl font-black mt-3">See What You Breathe</h1>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Switch between pollutants to visualize their scale. Add a second pollutant to compare their behavior side-by-side.
          </p>

          <div className="grid lg:grid-cols-[280px_1fr_340px] gap-6 mt-10">
            {/* Pollutant selector */}
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-muted-foreground mb-4">SELECT POLLUTANT</div>
              <div className="space-y-3">
                {Object.values(pollutants).map((pp) => {
                  const isActive = pp.key === active;
                  return (
                    <button
                      key={pp.key}
                      onClick={() => setActive(pp.key as keyof typeof pollutants)}
                      className={`w-full text-left rounded-xl px-5 py-4 glass-card transition flex items-center justify-between ${
                        isActive ? "border-primary text-primary" : "hover:border-primary/40"
                      }`}
                    >
                      <div>
                        <div className="font-bold">{pp.name}</div>
                        <div className="text-xs text-muted-foreground tracking-widest mt-1">{pp.sub}</div>
                      </div>
                      {isActive && <Activity className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>
              <div className="glass-card rounded-xl p-4 mt-6">
                <div className="text-xs font-bold tracking-widest text-muted-foreground mb-2">LEGEND</div>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Active</div>
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary" /> Compare</div>
                </div>
              </div>
            </div>

            {/* Simulation panel */}
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden min-h-[520px]">
              <div className="flex items-center justify-between text-xs tracking-widest text-muted-foreground">
                <span>MAGNIFICATION</span>
                <span className="text-primary">{p.name}</span>
              </div>
              <div className="h-1 bg-primary/40 rounded-full mt-2 mb-4" />
              <div className="inline-flex items-center gap-2 bg-muted/40 rounded-full px-3 py-1.5 text-xs">
                <ZoomIn className="w-3.5 h-3.5" /> 1X
              </div>
              <ParticleField seed={p.key} />
              <div className="absolute bottom-4 right-4 glass-card rounded-lg px-4 py-3 text-xs text-muted-foreground max-w-[240px] text-center">
                Interact with your mouse to rotate the perspective and feel the volume of the particles.
              </div>
            </div>

            {/* Info panel */}
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <div>
                <div className="text-3xl font-black">{p.name}</div>
                <div className="text-xs font-bold tracking-widest text-primary mt-1">{p.full}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-muted-foreground">MICRO-SCALE</div>
                  <div className="font-bold mt-1">{p.micro}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-muted-foreground">IMPACT</div>
                  <div className={`font-bold mt-1 ${p.impactColor}`}>{p.impact}</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2">SIZE COMPARISON</div>
                <div className="flex items-center gap-3 bg-muted/30 rounded-lg p-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-xs font-bold">{p.size}</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2">HEALTH IMPACT</div>
                <div className="flex items-start gap-3 bg-muted/30 rounded-lg p-3">
                  <div className="w-9 h-9 rounded-full bg-destructive/15 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  </div>
                  <div className="text-sm italic text-muted-foreground">{p.health}</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2">EMISSION SOURCES</div>
                <div className="space-y-2">
                  {p.sources.map((s) => {
                    const Icon = sourceIcons[s] || Factory;
                    return (
                      <div key={s} className="flex items-center gap-3 bg-muted/30 rounded-lg px-3 py-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold">{s}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className="w-full py-3 rounded-lg bg-foreground text-background font-bold flex items-center justify-center gap-2 hover:opacity-90 transition">
                <ZoomIn className="w-4 h-4" /> MICROSCOPE MODE
              </button>
            </div>
          </div>

          {/* Bottom info */}
          <div className="glass-card rounded-2xl p-6 mt-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-bold">PARTICLE PHYSICS SIMULATION</div>
                <div className="text-sm text-muted-foreground mt-1">
                  This interactive model simulates Brownian motion and scale relativity for pollutants. Switch to Microscope Mode to zoom in.
                </div>
              </div>
            </div>
            <button className="px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-bold text-sm whitespace-nowrap">
              COMPARE PM2.5 vs PM10
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

const ParticleField = ({ seed }: { seed: string }) => {
  // Deterministic particles based on seed
  const count = 60;
  const dots = Array.from({ length: count }).map((_, i) => {
    const x = ((seed.charCodeAt(0) * (i + 7)) % 100);
    const y = ((seed.charCodeAt(seed.length - 1) * (i + 13)) % 100);
    const size = ((i * 3) % 6) + 2;
    return { x, y, size };
  });
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-sm bg-primary/40 animate-pulse"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size, animationDelay: `${i * 50}ms` }}
        />
      ))}
    </div>
  );
};

export default Particles;
