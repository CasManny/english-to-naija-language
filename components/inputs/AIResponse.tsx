import React from "react";
import Textarea from "./Textarea";
import LanguageSelecter from '../inputs/LanguageSelecter'
import ReadWords from "../speakRecognition/ReadWords";

interface IAIResponseProps {
  language: string;
  setLanguage: (value: string) => void;
  languages: string[],
  output: string;
  setOutput: (value: string) => void;

}

const AIResponse = ({language, setLanguage, languages, output, setOutput}: IAIResponseProps) => {
  return (
    <div className="mywords relative z-10 flex-col space-x-3 border rounded-lg shadow-lg border-neutral-700 shadow-gray-900/20">
      <Textarea id="output" placeholder="" value={output} onChange={(e) => setOutput(e.target.value)} />
      <div className="flex flex-row justify-between w-full p-2">
        <span className="cursor-pointer flex space-x-4 flex-row items-center">
          <LanguageSelecter language={language} setLanguage={setLanguage} languages={languages} />
          <ReadWords input={output} />
        </span>
      </div>
    </div>
  );
};

export default AIResponse;
