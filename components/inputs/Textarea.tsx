import React from "react";

interface ITextareaProps {
    id?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
  }

const Textarea = ({ id, value, onChange, placeholder }: ITextareaProps) => {
  return <textarea value={value} name="input" id={id} rows={5} placeholder={placeholder} onChange={onChange} className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg" />;
};

export default Textarea;
