import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Droplets, 
  Thermometer, 
  Wind,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  IndianRupee
} from "lucide-react";

const Dashboard = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Unified Farm Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All critical information synchronized in real-time - IoT data, weather, prices, and AI insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Live Field Status */}
          <Card className="p-6 col-span-1 shadow-soft hover:shadow-medium transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Live Field Status</h3>
              <Badge className="bg-green-500">Active</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-accent" />
                  <span className="font-medium">Soil Moisture</span>
                </div>
                <span className="font-bold text-primary">68%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Temperature</span>
                </div>
                <span className="font-bold text-foreground">28°C</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Wind className="w-5 h-5 text-sky-500" />
                  <span className="font-medium">Humidity</span>
                </div>
                <span className="font-bold text-foreground">72%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-green-500" />
                  <span className="font-medium">NPK Level</span>
                </div>
                <span className="font-bold text-green-600">Good</span>
              </div>
            </div>
          </Card>

          {/* Weather & Alerts */}
          <Card className="p-6 col-span-1 shadow-soft hover:shadow-medium transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Weather & Alerts</h3>
              <Badge variant="outline" className="border-accent text-accent">IMD Live</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-accent rounded-lg text-white">
                <p className="text-sm opacity-90 mb-1">Today's Forecast</p>
                <p className="text-3xl font-bold mb-2">32°C</p>
                <p className="text-sm">Partly Cloudy, 20% rain chance</p>
              </div>
              
              <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900 text-sm">Irrigation Alert</p>
                    <p className="text-xs text-amber-800">Consider watering in 2 days based on soil moisture</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-900 text-sm">Crop Health</p>
                    <p className="text-xs text-green-800">No disease detected. All plants healthy!</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Market Prices */}
          <Card className="p-6 col-span-1 shadow-soft hover:shadow-medium transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Market Prices</h3>
              <Badge variant="outline" className="border-green-500 text-green-600">Updated</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border-2 border-green-500 rounded-lg bg-green-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-900">Best Rate Today</span>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex items-baseline gap-1">
                  <IndianRupee className="w-5 h-5 text-green-700" />
                  <p className="text-3xl font-bold text-green-700">2,850</p>
                  <span className="text-sm text-green-600">/quintal</span>
                </div>
                <p className="text-xs text-green-800 mt-2">Govt. Mandi - Ludhiana</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">PACs Committee</span>
                  <span className="font-bold flex items-center">
                    <IndianRupee className="w-3 h-3" />2,720
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">Local Broker</span>
                  <span className="font-bold flex items-center">
                    <IndianRupee className="w-3 h-3" />2,680
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">Private Buyer</span>
                  <span className="font-bold flex items-center">
                    <IndianRupee className="w-3 h-3" />2,790
                  </span>
                </div>
              </div>
              
              <Button className="w-full gradient-primary hover:opacity-90 text-white">
                View All Rates
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Connect your IoT device and start receiving real-time insights
          </p>
          <Button size="lg" className="gradient-hero text-white hover:opacity-90">
            Connect Your Device
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
