const scale = [
  { name: "Good", range: "0 - 50", desc: "Air quality is satisfactory, and air pollution poses little or no risk.", color: "hsl(var(--aqi-good))" },
  { name: "Moderate", range: "51 - 100", desc: "Air quality is acceptable. However, there may be a risk for some people, particularly those inherently sensitive to air pollution.", color: "hsl(var(--aqi-moderate))" },
  { name: "Poor", range: "101 - 200", desc: "Members of sensitive groups may experience health effects. The general public is less likely to be affected.", color: "hsl(var(--aqi-poor))" },
  { name: "Hazardous", range: "201+", desc: "Health warning of emergency conditions: everyone is more likely to be affected. Avoid outdoor exertion.", color: "hsl(var(--aqi-hazardous))" },
];

export const AQIScale = () => (
  <section className="container py-16">
    <h2 className="text-3xl md:text-4xl font-bold">Reference · AQI Scale</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {scale.map((s) => (
        <div key={s.name} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition">
          <div className="w-12 h-12 rounded-full" style={{ background: s.color, boxShadow: `0 0 30px ${s.color}` }} />
          <div className="mt-4 text-2xl font-bold" style={{ color: s.color }}>{s.name}</div>
          <div className="text-sm text-muted-foreground font-mono mt-1">{s.range}</div>
          <p className="text-sm text-muted-foreground mt-4">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
