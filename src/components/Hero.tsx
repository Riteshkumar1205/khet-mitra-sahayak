import { Button } from "@/components/ui/button";
import { Mic, Leaf, Cloud, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(45, 80, 22, 0.92), rgba(45, 80, 22, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">किसान के साथ, खेत के साथ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Smart Farming,
            <span className="block text-accent">Smarter Decisions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Complete agricultural intelligence platform powered by IoT sensors, AI diagnostics, 
            and real-time weather data - all in your language
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Mic className="mr-2 h-5 w-5" />
              Start with Voice
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
            >
              Explore Dashboard
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {[
              { icon: Leaf, label: "AI Crop Diagnosis", count: "99.5% Accurate" },
              { icon: Cloud, label: "Weather Alerts", count: "Real-time IMD" },
              { icon: TrendingUp, label: "Price Compare", count: "Best Rates" },
              { icon: Mic, label: "Voice Support", count: "12+ Languages" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-white/70 text-sm mb-1">{stat.label}</p>
                <p className="text-white font-bold text-lg">{stat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
