import { chatSession } from "@/utils/AIModel";
import React, { useEffect, useState } from "react";
interface IGenerate {
  input: string;
  language: string;
  setOutput: (value: string) => void;
}

const useGenerate = ({ input, language, setOutput }: IGenerate) => {
    const [target, setTarget] = useState('')
  const generateAIContent = async () => {
    try {
      const finalAIPrompt = `You will be provided with a sentence. This sentence: 
              ${input}. Your tasks are to:
              - Detect what language the sentence is in
              - Translate the sentence into ${language}
              Do not return anything other than the translated sentence.`;
      const result = await chatSession.sendMessage(finalAIPrompt);
      setOutput(result.response.text());
    } catch (error) {
        console.log(error)
    }
  };
    
    useEffect(() => {
        if (input.trim() && input !== '') {
            const timeoutId = setTimeout(() => {
              generateAIContent();
            }, 500); // Adjust the delay as needed
      
            return () => clearTimeout(timeoutId);
          }
    }, [input, language])

};



export default useGenerate;
