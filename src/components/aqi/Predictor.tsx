import { useState } from "react";
import { Sparkles } from "lucide-react";

const fields = [
  { key: "pm25", label: "PM2.5 (µg/m³)" },
  { key: "pm10", label: "PM10 (µg/m³)" },
  { key: "no2", label: "NO₂ (µg/m³)" },
  { key: "co", label: "CO (µg/m³)" },
  { key: "so2", label: "SO₂ (µg/m³)" },
];

export const Predictor = () => {
  const [vals, setVals] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  const predict = () => {
    const nums = fields.map((f) => Number(vals[f.key] || 0));
    const aqi = Math.round(nums[0] * 2 + nums[1] * 0.5 + nums[2] * 1.2 + nums[3] * 5 + nums[4] * 1.5);
    setResult(Math.min(aqi, 500));
  };

  const cat = result == null ? null : result <= 50 ? ["Good","aqi-good"] : result <= 100 ? ["Moderate","aqi-moderate"] : result <= 200 ? ["Poor","aqi-poor"] : ["Hazardous","aqi-hazardous"];

  return (
    <section className="container py-16">
      <div className="text-xs font-bold tracking-[0.2em] text-secondary">PREDICTION ENGINE</div>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Predict AQI from Pollutants</h2>
      <p className="text-muted-foreground mt-3 max-w-2xl">
        Enter pollutant levels to estimate AQI and understand air quality risk.
      </p>

      <div className="grid lg:grid-cols-[1fr_400px] gap-6 mt-8">
        <div className="glass-card rounded-2xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {fields.map((f) => (
              <label key={f.key} className="block">
                <div className="text-xs text-muted-foreground mb-2">{f.label}</div>
                <input
                  type="number"
                  value={vals[f.key] || ""}
                  onChange={(e) => setVals({ ...vals, [f.key]: e.target.value })}
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                />
              </label>
            ))}
          </div>
          <button
            onClick={predict}
            className="mt-6 w-full py-3 rounded-lg bg-secondary text-secondary-foreground font-bold hover:glow-purple transition"
          >
            Predict AQI
          </button>
        </div>

        <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[260px]">
          {result == null ? (
            <>
              <Sparkles className="w-10 h-10 text-muted-foreground/50" />
              <div className="mt-4 font-bold">Awaiting Input Data</div>
              <p className="text-sm text-muted-foreground mt-2">Submit pollutant values to see prediction.</p>
            </>
          ) : (
            <>
              <div className="text-xs tracking-widest text-muted-foreground">PREDICTED AQI</div>
              <div className="text-7xl font-black mt-2" style={{ color: `hsl(var(--${cat![1]}))` }}>{result}</div>
              <div className="mt-3 px-4 py-1.5 rounded-full text-xs font-bold" style={{ background: `hsl(var(--${cat![1]})/0.15)`, color: `hsl(var(--${cat![1]}))` }}>
                {cat![0]}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
