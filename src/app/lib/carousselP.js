'use client'

import { useState, useEffect } from "react";
import { projets } from "./data";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import clsx from 'clsx';
import text_styles from './styles/text.module.css'


export default function CarousselProjet() {

    const [currentIndex, setCurrentIndex] = useState(0)

    function nextPole(){
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projets.length)
        console.log(currentIndex);
    }

    function prevPole(){
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projets.length) % projets.length)
        console.log(currentIndex);
    }
    
    
    return (
        <div className="">
            <div key={projets[currentIndex].id} className="rounded-lg px-5 py-3">
                <Image
                    src={projets[currentIndex].url}
                    alt="Illustration image"
                    width={600}
                    height={900}
                    className="mb-5 rounded-lg object-cover w-full h-[300px]"
                />
                <h1 className="text-2xl my-3">
                    {projets[currentIndex].title}
                </h1>
                <p className={`${text_styles.body_text}`}><span className="font-bold"> Détails : </span> {projets[currentIndex].details}</p>
                <p className={`${text_styles.body_text} my-3`}><span className="font-bold"> Impacts : </span> {projets[currentIndex].impacts}</p>
              </div>
            <div className="mx-5 flex justify-between">
                <div onClick={prevPole} className="flex items-center justify-center left-4 h-10 w-10 rounded-full border-2 border-blue-900">
                    <ChevronLeftIcon className="h-5 w-5" />
                </div>
                <div className="bottom-4 flex items-center justify-center gap-x-2">
                    {projets.map((_, index) => (
                        <button
                            key={index}
                            className="w-3 h-3 rounded-full border-2 border-blue-900"
                        ></button>
                    ))}
                </div>
                <div onClick={nextPole} className="flex items-center justify-center right-4  h-10 w-10 rounded-full border-2 border-blue-900">
                    <ChevronRightIcon className="h-5 w-5" />
                </div>
            </div>
        </div>
    )
}