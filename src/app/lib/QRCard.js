'use client'

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import text_styles from '../lib/styles/text.module.css'


export default function QRCard({question,response}) {

    const [showResponse, setShowResponse] = useState(false)

    function toggleResponse() {
        setShowResponse((response) => !response)
    }
    
    return (
        <div className="border-gray-400 border-b py-5">
            <div className="flex items-center gap-x-2">
                <p className="">{question}</p>
                { !showResponse ? <div className="h-4 w-4"> <PlusIcon onClick={toggleResponse} className="h-4 w-4" /> </div> : <div className="h-4 w-4"> <MinusIcon onClick={toggleResponse} className="h-4 w-4" /> </div>}
            </div>
            <div className={`${text_styles.body_text}`}>
                {showResponse ? <p className="">{response}</p> : ""}
            </div>
        </div>
    )
}