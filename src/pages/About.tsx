import { Navbar } from "@/components/aqi/Navbar";
import Spline from "@splinetool/react-spline";
import { User } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-background relative overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Spline scene="https://prod.spline.design/zAPUcYww3wmIxBcH/scene.splinecode" />
      <div className="absolute inset-0 bg-background/50" />
    </div>
    <div className="relative z-10">
      <Navbar />
      <section className="container py-24 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-center">
          <div className="glass-card rounded-3xl p-10 w-[320px] flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center">
              <User className="w-28 h-28 text-foreground/80" />
            </div>
          </div>
          <div className="mt-6 text-center font-bold text-lg">
            Name: Hari Kumar
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;
