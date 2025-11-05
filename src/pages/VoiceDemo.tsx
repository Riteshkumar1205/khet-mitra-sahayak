import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import VoiceInput from '@/components/VoiceInput';
import { ArrowLeft, MessageSquare, Sparkles, Bot, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  type: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const VoiceDemo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTranscriptComplete = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      // Call AI farming advisor
      const { data, error } = await supabase.functions.invoke('farming-advisor', {
        body: { query: text.trim() }
      });

      if (error) throw error;

      if (data?.response) {
        const aiMessage: Message = {
          type: 'ai',
          text: data.response,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiMessage]);
        
        toast({
          title: 'Response Ready',
          description: 'AgriNova AI has analyzed your query',
        });
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: 'Error',
        description: 'Unable to process your query. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <h1 className="text-xl font-bold text-foreground">Voice Input Demo</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Speak in Your Language
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ask questions about crops, weather, prices, or farming techniques in any Indian language.
              Our AI understands and responds in your preferred language.
            </p>
          </div>

          {/* Voice Input Component */}
          <VoiceInput onTranscriptComplete={handleTranscriptComplete} />

          {/* Sample Questions */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Try These Sample Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { lang: 'Hindi', text: 'मेरी फसल में पीले पत्ते क्यों आ रहे हैं?' },
                { lang: 'Punjabi', text: 'ਅੱਜ ਮੌਸਮ ਕਿਹੋ ਜਿਹਾ ਰਹੇਗਾ?' },
                { lang: 'Tamil', text: 'உரத்தின் விலை என்ன?' },
                { lang: 'English', text: 'When should I harvest wheat?' },
                { lang: 'Marathi', text: 'माझ्या शेतात पाणी कधी द्यावे?' },
                { lang: 'Telugu', text: 'పంట వ్యాధుల గురించి చెప్పండి' },
              ].map((sample, index) => (
                <div 
                  key={index}
                  className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                  onClick={() => {
                    toast({
                      title: sample.lang,
                      description: sample.text,
                    });
                  }}
                >
                  <p className="text-xs font-semibold text-primary mb-1">{sample.lang}</p>
                  <p className="text-sm text-foreground">{sample.text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Conversation History */}
          {messages.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Conversation with AgriNova AI
              </h3>
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex gap-3 ${message.type === 'ai' ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'ai' ? 'bg-primary' : 'bg-accent'
                    }`}>
                      {message.type === 'ai' ? (
                        <Bot className="w-5 h-5 text-white" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <div className={`flex-1 ${message.type === 'ai' ? 'text-left' : 'text-right'}`}>
                      <div className={`inline-block p-4 rounded-lg ${
                        message.type === 'ai' 
                          ? 'bg-primary/5 border border-primary/20' 
                          : 'bg-accent/10 border border-accent/20'
                      }`}>
                        <p className="text-foreground whitespace-pre-wrap">{message.text}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {message.timestamp.toLocaleTimeString('en-IN', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Natural Speech</h4>
              <p className="text-sm text-muted-foreground">
                Speak naturally as you would in conversation
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Real-time Processing</h4>
              <p className="text-sm text-muted-foreground">
                See your words transcribed instantly
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">12+ Languages</h4>
              <p className="text-sm text-muted-foreground">
                Switch languages anytime during conversation
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoiceDemo;
