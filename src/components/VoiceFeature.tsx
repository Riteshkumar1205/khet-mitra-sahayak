import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Languages, MessageCircle } from "lucide-react";

const languages = [
  "हिन्दी", "ਪੰਜਾਬੀ", "मराठी", "தமிழ்", "తెలుగు", "ગુજરાતી",
  "ಕನ್ನಡ", "বাংলা", "മലയാളം", "ଓଡ଼ିଆ", "English", "اردو"
];

const VoiceFeature = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                <Languages className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">12+ Indian Languages</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Speak, Don't Type
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                No typing skills? No problem. Just speak in your own language and our AI understands 
                everything - from asking about crop diseases to comparing market prices.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Natural Conversation</h4>
                    <p className="text-muted-foreground text-sm">
                      Ask questions naturally, just like talking to an expert
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Mic className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Always Listening</h4>
                    <p className="text-muted-foreground text-sm">
                      Voice input available throughout the app, anytime
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Languages className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Regional Dialects</h4>
                    <p className="text-muted-foreground text-sm">
                      Understanding of local variations and farming terms
                    </p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="gradient-accent text-white hover:opacity-90">
                <Mic className="mr-2 h-5 w-5" />
                Try Voice Input
              </Button>
            </div>
            
            <Card className="p-8 shadow-medium">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Mic className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Supported Languages
                </h3>
                <p className="text-muted-foreground">
                  Speak in any of these languages
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {languages.map((lang, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {lang}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-center text-muted-foreground italic">
                  "अब खेती की हर जानकारी अपनी भाषा में" - Now every farming information in your language
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceFeature;
