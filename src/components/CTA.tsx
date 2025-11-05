import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center gradient-hero rounded-3xl p-12 md:p-16 shadow-medium">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already using smart technology to increase yields, 
            reduce costs, and make better decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">10,000+</p>
              <p className="text-white/80 text-sm">Active Farmers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">5M+</p>
              <p className="text-white/80 text-sm">Acres Monitored</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">35%</p>
              <p className="text-white/80 text-sm">Avg. Yield Increase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
