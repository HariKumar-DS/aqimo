import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Particles", to: "/particles" },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xs tracking-[0.3em] font-bold text-primary">KNOWLEDGE</Link>
        <nav className="flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.label}
                to={l.to}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest transition ${
                  active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label.toUpperCase()}
              </Link>
            );
          })}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="ml-2 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-muted/70 transition"
          >
            {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
};
