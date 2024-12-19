'use client'

import Card from './card'
import CustomButton from './customButton'
import PoleFoncier from './poleFoncier';
import PoleTopo from './poleTopo';
import PoleGeo from './poleGeo';
import { useState } from "react";
import { servicesFoncier, servicesGeo, servicesTopo } from "./data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from 'next/image';


export default function Services() {

  const poles = [servicesFoncier, servicesTopo,servicesGeo]
  const [currentIndex, setCurrentIndex] = useState(0)

  function nextPole(){
      setCurrentIndex((prevIndex) => (prevIndex + 1) % poles.length)
      console.log(currentIndex);
  }

  function prevPole(){
      setCurrentIndex((prevIndex) => (prevIndex - 1 + poles.length) % poles.length)
      console.log(currentIndex);
  }
  {/*bg-slate-300/30*/}
  return (
    <div className='md:max-w-[100%] lg:max-w-[90%]'>
          <div className='md:py-12 md:flex md:flex-col md:items-center'>
            <Card 
              title="Services"
              titleDivStyle='justify-center'
              style='md:text-center md:px-[25%]' 
              titleStyle='mb-3 !text-2xl md:!text-3xl lg:!text-5xl' 
              body="Des solutions complètes d'arpentage et de propriété adaptées pour répondre à vos besoins uniques" />
            <div className='hidden md:flex md:gap-1 border-2 border-orange-500 rounded-lg'>
              <CustomButton onClick={() => setCurrentIndex(0)} text='Pole Foncier' style={`px-8 py-2 ${currentIndex === 0 ? 'bg-orange-500 text-white' : 'bg-slate-300/50'}`}/>
              <CustomButton onClick={() => setCurrentIndex(1)} text='Pole Topographie' style={`px-8 py-2 ${currentIndex === 1 ? 'bg-orange-500 text-white' : 'bg-slate-300/50'}`}/>
              <CustomButton onClick={() => setCurrentIndex(2)} text='Pole Geomatique' style={`px-8 py-2 ${currentIndex === 2 ? 'bg-orange-500 text-white' : 'bg-slate-300/50'}`}/>
            </div>
          </div>
            <div className='md:hidden'>
              <div className="md:hidden">
                {poles[currentIndex].map((item) => (
                <Card key={item.id}
                    title={item.title}
                    body={item.body}
                    titleStyle='mb-3 md:!text-xl'
                />
                ))}
                <div className='px-5'>
                  <Image
                      src="/services_img.jpg"
                      alt="Les services de nos differents poles : Foncier, Topographie, Géomatique"
                      width={600}
                      height={900}
                      className="md:order:3 object-cover rounded-2xl w-full h-[300px]"
                  />    
                </div>              
              </div>
              <div className="mt-5 px-5 flex justify-between md:hidden">
                    <div onClick={prevPole} className="flex items-center justify-center left-4 h-10 w-10 rounded-full border-2 border-blue-900">
                        <Link href='#services'><ArrowLeftIcon className="h-5 w-5" /></Link>
                    </div>
                    <div className="bottom-4 flex items-center justify-center gap-x-2">
                        {poles.map((_, index) => (
                            <button
                                key={index}
                                className={`rounded-full border-blue-900 ${currentIndex === index ? 'w-2 h-2 border-4 bg-blue-900' : 'w-3 h-3 border-2'}`}
                            ></button>
                        ))}
                    </div>
                    <div onClick={nextPole} className="flex items-center justify-center right-4  h-10 w-10 rounded-full border-2 border-blue-900">
                        <Link href='#services'><ArrowRightIcon className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
              {currentIndex === 0 && <PoleFoncier />}
              {currentIndex === 1 && <PoleTopo />}
              {currentIndex === 2 && <PoleGeo />}
            </div>
        </div>
  )
}