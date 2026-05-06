export const AQIStory = () => (
  <section className="container py-16 grid md:grid-cols-2 gap-6">
    {[
      {
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80",
        tag: "When AQI Rises",
        title: "The Invisible Threat",
        desc: "The Air Quality Index (AQI) uses a 0–500 scale to convert complex pollutant data—PM2.5, PM10, NO₂, CO, and SO₂—into a simple number, revealing hidden dangers in the air you breathe.",
      },
      {
        img: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=900&q=80",
        tag: "When AQI is Clean",
        title: "Why Monitoring Matters",
        desc: "Monitoring allows people to safely plan outdoor activity, proactively protect vulnerable groups, and anticipate dangerous periods before they pose a significant risk.",
      },
    ].map((s) => (
      <div key={s.tag} className="glass-card rounded-2xl overflow-hidden group">
        <div className="h-64 overflow-hidden">
          <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
        </div>
        <div className="p-6">
          <div className="text-xs font-bold tracking-[0.2em] text-primary">{s.tag.toUpperCase()}</div>
          <h3 className="text-2xl font-bold mt-2">{s.title}</h3>
          <p className="text-muted-foreground mt-3">{s.desc}</p>
        </div>
      </div>
    ))}
  </section>
);
