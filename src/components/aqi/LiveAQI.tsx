import { MapPin } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";

const sampleData = Array.from({ length: 12 }, (_, i) => ({
  time: `${String((i * 2 + 4) % 24).padStart(2, "0")}:00`,
  aqi: 40 + Math.round(Math.sin(i / 2) * 25 + Math.random() * 15) + 30,
}));

export const LiveAQI = ({ city }: { city: string }) => {
  const [range, setRange] = useState<"24h" | "7d" | "30d">("24h");
  const aqi = 81;
  return (
    <section className="container pb-16 grid lg:grid-cols-[400px_1fr] gap-6">
      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold">
            <MapPin className="w-4 h-4 text-primary" /> {city.toUpperCase()}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> LIVE UPDATE
          </div>
        </div>
        <div className="mt-6 text-sm text-muted-foreground">Current AQI</div>
        <div className="flex items-end gap-4 mt-2">
          <div className="text-7xl font-black text-gradient-cyan">{aqi}</div>
          <div className="pb-3">
            <div className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "hsl(var(--aqi-moderate)/0.15)", color: "hsl(var(--aqi-moderate))" }}>
              Moderate
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            ["PM2.5", "38.5", "µg/m³"],
            ["PM10", "78", "µg/m³"],
            ["Ozone", "140", "µg/m³"],
            ["NO₂", "8.4", "µg/m³"],
          ].map(([k, v, u]) => (
            <div key={k} className="bg-muted/40 rounded-lg p-3">
              <div className="text-xs text-muted-foreground">{k}</div>
              <div className="text-lg font-bold mt-1">{v} <span className="text-xs text-muted-foreground font-normal">{u}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-primary">HISTORICAL AQI TRENDS</div>
            <h3 className="text-2xl font-bold mt-1">Conditions over time</h3>
          </div>
          <div className="flex bg-muted/40 rounded-lg p-1">
            {(["24h", "7d", "30d"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition ${
                  range === r ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {r.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sampleData}>
              <defs>
                <linearGradient id="aqiGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Area type="monotone" dataKey="aqi" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#aqiGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
