'use client'

import { useState, useEffect } from "react";
import Card from "./card";
import { servicesFoncier, servicesGeo, servicesTopo } from "./data";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRighIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import clsx from 'clsx';


export default function Caroussel() {
    const poles = [servicesFoncier, servicesTopo,servicesGeo]
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0)

    function nextPole(){
        setCurrentIndex((prevIndex) => (prevIndex + 1) % poles.length)
        console.log(currentIndex);
    }

    function prevPole(){
        setCurrentIndex((prevIndex) => (prevIndex - 1 + poles.length) % poles.length)
        console.log(currentIndex);
    }
    
    
    return (
        <div className="">
            {poles[currentIndex].map((item) => (
              <Card key={item.id}
                title={item.title}
                body={item.body}
                titleStyle='mb-3 text-2xl'
              />
            ))}
            <Image
              src="/services_img.jpg"
              alt="Illustration image"
              width={600}
              height={900}
              className="mb-5 p-5 object-cover rounded-2xl w-full h-[300px]"
            />
            <div className="mt-5 px-5 flex justify-between">
                <div onClick={prevPole} className="flex items-center justify-center left-4 h-10 w-10 rounded-full border-2 border-blue-900">
                    <ArrowLeftIcon className="h-5 w-5" />
                </div>
                <div className="bottom-4 flex items-center justify-center gap-x-2">
                    {poles.map((_, index) => (
                        <button
                            key={index}
                            className="w-3 h-3 rounded-full border-2 border-blue-900"
                        ></button>
                    ))}
                </div>
                <div onClick={nextPole} className="flex items-center justify-center right-4  h-10 w-10 rounded-full border-2 border-blue-900">
                    <ArrowRighIcon className="h-5 w-5" />
                </div>
            </div>
        </div>
    )
}