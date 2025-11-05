/// <reference path="../types/speech-recognition.d.ts" />
import { useState, useEffect, useRef } from 'react';

export interface VoiceInputOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (transcript: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
}

export const useVoiceInput = (options: VoiceInputOptions = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Check if Web Speech API is supported
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      setError('Voice input is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = options.continuous ?? true;
    recognition.interimResults = options.interimResults ?? true;
    recognition.lang = options.language || 'hi-IN'; // Default to Hindi

    recognition.onstart = () => {
      console.log('Voice recognition started');
      setIsListening(true);
      setError(null);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimText = '';
      let finalText = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const text = result[0].transcript;

        if (result.isFinal) {
          finalText += text + ' ';
        } else {
          interimText += text;
        }
      }

      if (finalText) {
        setTranscript(prev => prev + finalText);
        options.onResult?.(finalText.trim(), true);
      }

      if (interimText) {
        setInterimTranscript(interimText);
        options.onResult?.(interimText, false);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Voice recognition error:', event.error);
      let errorMessage = 'An error occurred with voice recognition';
      
      switch (event.error) {
        case 'no-speech':
          errorMessage = 'No speech detected. Please try again.';
          break;
        case 'audio-capture':
          errorMessage = 'Microphone not found. Please check your device.';
          break;
        case 'not-allowed':
          errorMessage = 'Microphone access denied. Please allow microphone access.';
          break;
        case 'network':
          errorMessage = 'Network error. Please check your connection.';
          break;
      }
      
      setError(errorMessage);
      options.onError?.(errorMessage);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log('Voice recognition ended');
      setIsListening(false);
      setInterimTranscript('');
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [options.language, options.continuous, options.interimResults]);

  const startListening = () => {
    if (!isSupported) {
      setError('Voice input is not supported in this browser');
      return;
    }

    try {
      setTranscript('');
      setInterimTranscript('');
      setError(null);
      recognitionRef.current?.start();
    } catch (err) {
      console.error('Error starting recognition:', err);
      setError('Failed to start voice recognition');
    }
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  const resetTranscript = () => {
    setTranscript('');
    setInterimTranscript('');
  };

  const changeLanguage = (newLanguage: string) => {
    if (recognitionRef.current) {
      const wasListening = isListening;
      recognitionRef.current.stop();
      recognitionRef.current.lang = newLanguage;
      if (wasListening) {
        setTimeout(() => recognitionRef.current?.start(), 100);
      }
    }
  };

  return {
    isListening,
    transcript,
    interimTranscript,
    error,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
    changeLanguage,
  };
};
