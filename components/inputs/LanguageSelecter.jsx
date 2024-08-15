import { Languages } from 'lucide-react'
import React from 'react'

const LanguageSelecter = ({language, setLanguage, languages}) => {
    return (
        <span className='cursor-pointer rounded-md space-x-1 flex items-center flex-row'>
            <Languages size={20} />
            <select name="selector" id="language-selector" value={language} onChange={(e) => setLanguage(e.target.value)} className='flex flex-row rounded-md py-1'>
                {languages.map((language) => (
                    <option value={language} key={language}>{ language}</option>
                ))}
            </select>
      </span>
  )
}

export default LanguageSelecter