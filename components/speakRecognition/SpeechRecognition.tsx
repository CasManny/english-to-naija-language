"use client";
import 'regenerator-runtime/runtime';
import { Mic } from "lucide-react";
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognise = ({ setInput }: {setInput: (value: string) => void}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
    
  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }

  useEffect(() => {
    setInput(transcript);
  }, [transcript, setInput]);

  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

    return <div>
      <Mic className="text-gray-400" size={22} onClick={handleVoiceRecording} />
  </div>;
};

export default SpeechRecognise;
