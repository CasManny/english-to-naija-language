import React from "react";
import Textarea from "./Textarea";
import SpeechRecognise from "../speakRecognition/SpeechRecognition";
import ReadWords from "../speakRecognition/ReadWords";

interface IUserInputProps {
  input: string;
  setInput: (value: string) => void;
}

const UserInput = ({ input, setInput }: IUserInputProps) => {
  return (
    <div className="mywords relative z-10 flex-col space-x-3 border rounded-lg shadow-lg border-neutral-700 shadow-gray-900/20">
      <Textarea
        value={input}
        id="source-language"
        onChange={(e) => setInput(e.target.value)}
        placeholder="What word or sentence do you want to translate"
      />
      <div className="flex flex-row justify-between w-full p-2">
        <span className="cursor-pointer flex space-x-4 flex-row">
          <SpeechRecognise setInput={setInput} />
          <ReadWords input={input} />
        </span>
      </div>
    </div>
  );
};

export default UserInput;
