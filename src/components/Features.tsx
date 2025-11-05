import { Card } from "@/components/ui/card";
import { 
  Radio, 
  Brain, 
  Mic, 
  CloudRain, 
  Bell, 
  DollarSign, 
  TrendingUp, 
  Package 
} from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "IoT Field Monitoring",
    description: "Real-time soil moisture, humidity, and temperature data from your installed sensors",
    color: "bg-green-100 text-primary"
  },
  {
    icon: Brain,
    title: "AI Disease Detection",
    description: "Upload crop leaf images and get instant AI-powered disease diagnosis with treatment plans",
    color: "bg-blue-100 text-accent"
  },
  {
    icon: Mic,
    title: "Voice Input (Multilingual)",
    description: "Speak in your language - Hindi, Punjabi, Marathi, Tamil, and 8+ Indian languages supported",
    color: "bg-amber-100 text-secondary"
  },
  {
    icon: CloudRain,
    title: "IMD Weather Integration",
    description: "Get accurate weather forecasts from India Meteorological Department for better planning",
    color: "bg-sky-100 text-accent"
  },
  {
    icon: Bell,
    title: "Smart Irrigation Alerts",
    description: "Automatic notifications when to water or drain fields based on sensor data and weather",
    color: "bg-emerald-100 text-primary"
  },
  {
    icon: DollarSign,
    title: "Fertilizer Price Compare",
    description: "Find cheapest rates from retailers, Biskoman Bhawan, and government subsidized shops",
    color: "bg-orange-100 text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Harvest Timing & Handling",
    description: "AI suggests optimal harvest time and post-harvest storage methods to maximize profits",
    color: "bg-purple-100 text-primary"
  },
  {
    icon: Package,
    title: "Market Price Comparison",
    description: "Compare rates from PACs, local brokers, government buyers, and mandis to get best price",
    color: "bg-rose-100 text-destructive"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From soil to sale - complete agricultural intelligence synchronized for maximum yield and profit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
