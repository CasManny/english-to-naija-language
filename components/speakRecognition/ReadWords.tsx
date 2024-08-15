import { Volume2 } from 'lucide-react'
import 'regenerator-runtime/runtime';
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const ReadWords = ({ input }: { input: string }) => {
    const handleAudioPlayback = (words: string) => {
        const utterance = new SpeechSynthesisUtterance(words)
        window.speechSynthesis.speak(utterance)
    }
    return (
      <Volume2 size={22} onClick={() => handleAudioPlayback(input)} />
  )
}

export default ReadWords