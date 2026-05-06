import { useState } from "react";
import { Navbar } from "@/components/aqi/Navbar";
import { Hero } from "@/components/aqi/Hero";
import { CitySearch } from "@/components/aqi/CitySearch";
import { LiveAQI } from "@/components/aqi/LiveAQI";
import { AQIScale } from "@/components/aqi/AQIScale";
import { Control } from "@/components/aqi/Control";

const Index = () => {
  const [city, setCity] = useState("Mumbai, IN");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CitySearch selected={city} onSelect={setCity} />
      <LiveAQI city={city} />
      <AQIScale />
      <Control />
    </div>
  );
};

export default Index;
