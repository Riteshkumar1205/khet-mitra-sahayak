import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import VoiceFeature from "@/components/VoiceFeature";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Dashboard />
      <VoiceFeature />
      <CTA />
    </main>
  );
};

export default Index;
