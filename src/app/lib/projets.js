'use client'

import { useState } from "react";
import { projets } from "./data";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import text_styles from './styles/text.module.css'
import Link from "next/link";


export default function Projets() {

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
        <div className="w-full">
            <div className="flex md:justify-center  md:gap-x-8 w-full overflow-hidden">
                {projets.map((item) => (
                    <div className="px-5 flex-shrink-0 w-full transition-transform duration-500 ease-in-out md:w-[45%]"  style={{ transform: `translateX(-${currentIndex * 100}%)` }} key={item.id}>
                        <Image
                            src={item.url}
                            alt="Illustration image"
                            width={600}
                            height={900}
                            className="mb-5 rounded-xl object-cover w-full h-[300px]"
                        />
                        <h1 className="text-xl font-bold my-3">
                            {item.title}
                        </h1>
                        <p className={`${text_styles.body_text} md:!text-base lg:!text-lg`}><span className="font-bold"> Détails : </span> {item.details}</p>
                        <p className={`${text_styles.body_text} my-3 md:!text-base lg:!text-lg`}><span className="font-bold"> Impacts : </span> {item.impacts}</p>
                    </div>
                ))
            }
            </div>
            <div className="mx-5 flex justify-between">
                <div onClick={prevPole} className="flex items-center justify-center left-4 h-10 w-10 rounded-full border-2 border-blue-900">
                    <Link href="#projets"><ArrowLeftIcon className="h-5 w-5" /></Link>
                </div>
                <div className="bottom-4 flex items-center justify-center gap-x-2">
                    {projets.map((_, index) => (
                        <button
                            key={index}
                            className={`rounded-full border-blue-900 ${currentIndex === index ? 'w-2 h-2 border-4 bg-blue-900' : 'w-3 h-3 border-2'}`}
                        ></button>
                    ))}
                </div>
                <div onClick={nextPole} className="flex items-center justify-center right-4  h-10 w-10 rounded-full border-2 border-blue-900">
                <Link href='#projets'><ArrowRightIcon className="h-5 w-5" /></Link>
                </div>
            </div>
        </div>
    )
}