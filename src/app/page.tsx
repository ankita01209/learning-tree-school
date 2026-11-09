import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";
import Programs from "@/components/sections/Programs";
import WhyLearningTree from "@/components/sections/WhyLearningTree";
import SchoolLife from "@/components/sections/SchoolLife";
import Gallery from "@/components/sections/Gallery";
import Videos from "@/components/sections/Videos";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <div id="home"><Hero /></div>
      <TrustStats />
      <div id="about"><About /></div>
      <MissionVision />
      <div id="programs"><Programs /></div>
      <div id="why-us"><WhyLearningTree /></div>
      <div id="school-life"><SchoolLife /></div>
      <div id="gallery"><Gallery /></div>
      <Videos />
      <AdmissionsCTA />
      <div id="contact"><Contact /></div>
    </main>
  );
}
