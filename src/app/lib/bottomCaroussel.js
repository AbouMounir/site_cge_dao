'use client'

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ButtonCaroussel() {
    return (
        <div className="mt-5 flex justify-between">
                <div onClick={prevPole} className="flex items-center justify-center left-4 h-12 w-12 rounded-full border-2 border-blue-900">
                    <ChevronLeftIcon className="h-6 w-6" />
                </div>
                <div className="bottom-4 flex items-center justify-center gap-x-2">
                    {poles.map((_, index) => (
                        <button
                            key={index}
                            className="w-4 h-4 rounded-full border-2 border-blue-900"
                        ></button>
                    ))}
                </div>
                <div onClick={nextPole} className="flex items-center justify-center right-4  h-12 w-12 rounded-full border-2 border-blue-900">
                    <ChevronRightIcon className="h-6 w-6" />
                </div>
            </div>
    )
}