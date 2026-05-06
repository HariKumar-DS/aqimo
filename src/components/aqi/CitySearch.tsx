import { Search } from "lucide-react";
import { useState } from "react";

const presets = ["Chandigarh, IN","Fatehgarh Sahib, IN","Ludhiana, IN","Amritsar, IN","Delhi, IN","Mumbai, IN","London, UK","New York, USA"];

export const CitySearch = ({ selected, onSelect }: { selected: string; onSelect: (s: string) => void }) => {
  const [q, setQ] = useState("");
  return (
    <section className="py-16 container">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Search AQI by City</h2>
      <form
        onSubmit={(e) => { e.preventDefault(); if (q) onSelect(q); }}
        className="mt-8 max-w-xl mx-auto flex gap-2"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Enter city name..."
            className="w-full bg-muted/50 border border-border rounded-full pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <button className="px-6 py-3 rounded-full bg-primary/10 border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition">
          Search
        </button>
      </form>

      <div className="mt-10">
        <div className="text-xs font-bold tracking-[0.2em] text-muted-foreground">QUICK LOAD · CITY PRESETS</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p}
              onClick={() => onSelect(p)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selected === p
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
