import { Factory, Wind, Filter, Activity } from "lucide-react";

const items = [
  { icon: Factory, title: "Source Control", desc: "Minimize emissions by reducing smoke, chemicals, and harmful pollutants. Small actions at the source create a big impact on air quality." },
  { icon: Wind, title: "Improved Ventilation", desc: "Bring in fresh air when outdoor air is cleaner, but avoid opening windows during heavily polluted periods." },
  { icon: Filter, title: "Air Filtration", desc: "Use advanced air purifiers like HEPA filters to remove harmful particles and maintain a clean and safe indoor environment." },
  { icon: Activity, title: "Smarter Exposure Choices", desc: "Reduce outdoor activity, avoid heavy physical exercise, and correctly time your activities for cleaner hours when AQI is high." },
];

export const Control = () => (
  <section className="container py-16">
    <div className="text-xs font-bold tracking-[0.2em] text-primary">CONTROL STRATEGIES</div>
    <h2 className="text-3xl md:text-4xl font-bold mt-2">How to Control AQI</h2>
    <p className="text-muted-foreground mt-3 max-w-2xl">
      Managing AQI isn't just about the environment—it's about your health. Reduce pollution, limit exposure, and take control of the air you breathe.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mt-4">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{desc}</p>
        </div>
      ))}
    </div>

    <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} AQI Knowledge · Built for cleaner air
    </footer>
  </section>
);
