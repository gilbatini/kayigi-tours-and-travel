import { Hero } from "@/components/home/Hero";
import { Experiences } from "@/components/home/Experiences";
import { WhyBand } from "@/components/home/WhyBand";
import { VehiclesTeaser } from "@/components/home/VehiclesTeaser";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Experiences />
      <WhyBand />
      <VehiclesTeaser />
    </main>
  );
}
