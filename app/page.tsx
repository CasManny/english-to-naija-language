"use client";
import AIResponse from "@/components/inputs/AIResponse";
import Textarea from "@/components/inputs/Textarea";
import UserInput from "@/components/inputs/UserInput";
import useGenerate from "@/hooks/useGenerate";
import { chatSession } from "@/utils/AIModel";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("Yoruba");
  const Languages = ["Yoruba", "Igbo", "Hausa"];

  useGenerate({ input: input, language: language, setOutput })
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neural-200 ">
              Learn, <span className="text-[#F87315]">Speak Yoruba</span>{" "}
            </h1>
            <p className="mt-3 text-neutral-400">
              practice your English - 3 major Naija Languages...
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <UserInput input={input} setInput={setInput} />
                <AIResponse
                  language={language}
                  setLanguage={setLanguage}
                  languages={Languages}
                  output={output}
                  setOutput={setOutput}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
