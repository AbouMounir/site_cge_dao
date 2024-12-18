'use client'

import { useState } from 'react'
import text_styles from './styles/text.module.css'

export default function FormLabelImput({multiline,label,type,placeholder,name,id}) {
    
  const [inputValue, setInputValue] = useState('')
  
  return (
        <div className="flex flex-col mb-4">
            <label className="text-lg font-bold mb-2" htmlFor={label}>{label}</label>
            { !multiline ? <input
              className={`${text_styles.body_text} border-2 rounded-lg p-3`}
              type={type}
              id={id}
              name={name}
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => {
                console.log(e.target);
                setInputValue(e.target.value)
              }}
            /> :
            <textarea
                className={`${text_styles.body_text} border-2 rounded-lg p-3`}
                id={id}
                name={name}
                rows="4" 
                cols="50" 
                placeholder={placeholder}>
            </textarea> }
          </div>
    )
}