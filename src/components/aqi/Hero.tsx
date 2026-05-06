import { Wind, Layers } from "lucide-react";
import Spline from "@splinetool/react-spline";

export const Hero = () => (
  <section id="home" className="relative pt-20 pb-16 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline scene="https://prod.spline.design/zAPUcYww3wmIxBcH/scene.splinecode" />
      <div className="absolute inset-0 bg-background/60" />
    </div>

    <div className="container relative z-10">
      <h1 className="text-5xl md:text-7xl font-black leading-[1.05] max-w-4xl">
        What is <span className="text-gradient-cyan">AQI</span>,
        <br />
        and why does it matter?
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        AQI shows how clean or polluted your air is—and why it matters.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        <FeatureCard
          tag="3D INTERACTIVE"
          tagColor="text-primary"
          title={<>See What<br/>You Breathe</>}
          desc="Visualize microscopic pollutants in 3D and understand their impact on your health through our advanced particle simulation."
          cta="Try Simulation"
          ctaHref="/particles"
          ctaClass="bg-primary text-primary-foreground hover:glow-cyan"
          icon={<Wind className="w-12 h-12 text-primary/70" />}
        />
        <FeatureCard
          tag="INTERACTIVE STORY"
          tagColor="text-secondary"
          title={<>About The<br/>Technology</>}
          desc="Learn about the science behind air quality monitoring, the datasets we use, and how machine learning predicts pollutant levels."
          cta="Learn More"
          ctaHref="/about"
          ctaClass="bg-secondary text-secondary-foreground hover:glow-purple"
          icon={<Layers className="w-12 h-12 text-secondary/70" />}
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ tag, tagColor, title, desc, cta, ctaHref, ctaClass, icon }: any) => (
  <div className="glass-card rounded-2xl p-8 hover:border-primary/40 transition group">
    <div className="flex items-start justify-between">
      <div className={`text-xs font-bold tracking-[0.2em] ${tagColor}`}>{tag}</div>
      <div className="opacity-70 group-hover:opacity-100 transition">{icon}</div>
    </div>
    <h3 className="text-3xl font-bold mt-4">{title}</h3>
    <p className="text-muted-foreground mt-4 max-w-sm">{desc}</p>
    <a href={ctaHref} className={`inline-block mt-6 px-6 py-3 rounded-lg font-bold text-sm transition ${ctaClass}`}>
      {cta}
    </a>
  </div>
);
