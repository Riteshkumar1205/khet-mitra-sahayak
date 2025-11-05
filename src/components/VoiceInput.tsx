import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useVoiceInput } from '@/hooks/useVoiceInput';
import { Mic, MicOff, Languages, Trash2, AlertCircle, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const INDIAN_LANGUAGES = [
  { code: 'hi-IN', name: 'हिन्दी (Hindi)', flag: '🇮🇳' },
  { code: 'pa-IN', name: 'ਪੰਜਾਬੀ (Punjabi)', flag: '🇮🇳' },
  { code: 'mr-IN', name: 'मराठी (Marathi)', flag: '🇮🇳' },
  { code: 'ta-IN', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
  { code: 'te-IN', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
  { code: 'gu-IN', name: 'ગુજરાતી (Gujarati)', flag: '🇮🇳' },
  { code: 'kn-IN', name: 'ಕನ್ನಡ (Kannada)', flag: '🇮🇳' },
  { code: 'bn-IN', name: 'বাংলা (Bengali)', flag: '🇮🇳' },
  { code: 'ml-IN', name: 'മലയാളം (Malayalam)', flag: '🇮🇳' },
  { code: 'or-IN', name: 'ଓଡ଼ିଆ (Odia)', flag: '🇮🇳' },
  { code: 'en-IN', name: 'English (India)', flag: '🇮🇳' },
  { code: 'ur-IN', name: 'اردو (Urdu)', flag: '🇮🇳' },
];

interface VoiceInputProps {
  onTranscriptComplete?: (text: string) => void;
}

const VoiceInput = ({ onTranscriptComplete }: VoiceInputProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('hi-IN');
  const { toast } = useToast();

  const {
    isListening,
    transcript,
    interimTranscript,
    error,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
    changeLanguage,
  } = useVoiceInput({
    language: selectedLanguage,
    continuous: true,
    interimResults: true,
    onResult: (text, isFinal) => {
      if (isFinal && text.trim()) {
        console.log('Final transcript:', text);
        onTranscriptComplete?.(text);
      }
    },
    onError: (errorMsg) => {
      toast({
        title: 'Voice Input Error',
        description: errorMsg,
        variant: 'destructive',
      });
    },
  });

  const handleLanguageChange = (langCode: string) => {
    setSelectedLanguage(langCode);
    changeLanguage(langCode);
    toast({
      title: 'Language Changed',
      description: `Now listening in ${INDIAN_LANGUAGES.find(l => l.code === langCode)?.name}`,
    });
  };

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleClear = () => {
    resetTranscript();
    toast({
      title: 'Cleared',
      description: 'Transcript has been cleared',
    });
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isSupported) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-3 text-destructive">
          <AlertCircle className="w-6 h-6" />
          <div>
            <p className="font-semibold">Voice Input Not Supported</p>
            <p className="text-sm text-muted-foreground">
              Please use Chrome, Edge, or Safari for voice input features.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 shadow-medium">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full ${isListening ? 'gradient-accent animate-pulse' : 'bg-muted'} flex items-center justify-center`}>
            {isListening ? <Mic className="w-6 h-6 text-white" /> : <MicOff className="w-6 h-6 text-muted-foreground" />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Voice Input</h3>
            <p className="text-sm text-muted-foreground">
              {isListening ? 'Listening...' : 'Click to start speaking'}
            </p>
          </div>
        </div>
        <Badge variant={isListening ? 'default' : 'outline'} className="bg-green-500">
          {isListening ? 'Active' : 'Ready'}
        </Badge>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
          <Languages className="w-4 h-4" />
          Select Your Language
        </label>
        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose language" />
          </SelectTrigger>
          <SelectContent>
            {INDIAN_LANGUAGES.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Transcript Display */}
      <div className="mb-6 min-h-[120px] p-4 bg-muted/30 rounded-lg border-2 border-dashed border-border">
        {transcript || interimTranscript ? (
          <div className="space-y-2">
            {transcript && (
              <p className="text-foreground leading-relaxed">
                {transcript}
              </p>
            )}
            {interimTranscript && (
              <p className="text-muted-foreground italic">
                {interimTranscript}
              </p>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">
            Your speech will appear here...
          </p>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2 text-destructive">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-3">
        <Button
          onClick={handleToggleListening}
          size="lg"
          className={`flex-1 ${isListening ? 'bg-destructive hover:bg-destructive/90' : 'gradient-primary hover:opacity-90'} text-white`}
        >
          {isListening ? (
            <>
              <MicOff className="mr-2 h-5 w-5" />
              Stop Listening
            </>
          ) : (
            <>
              <Mic className="mr-2 h-5 w-5" />
              Start Speaking
            </>
          )}
        </Button>

        {transcript && (
          <>
            <Button
              onClick={() => speakText(transcript)}
              size="lg"
              variant="outline"
              className="border-2"
            >
              <Volume2 className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleClear}
              size="lg"
              variant="outline"
              className="border-2"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>💡 Tips:</strong> Speak clearly and naturally. The system will automatically detect when you finish speaking. 
          You can switch languages anytime without stopping the recording.
        </p>
      </div>
    </Card>
  );
};

export default VoiceInput;
