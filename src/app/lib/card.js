import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import text_styles from '../lib/styles/text.module.css'
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Card({id,iconUrl,icon, size, title, body, readMore, style, titleStyle,bodyStyle, titleDivStyle, imageStyle}) {
    return (
        <div id={id} className={`${style} rounded-lg p-5 h-fit`}>
         {iconUrl && <Image 
            src={iconUrl}
            width={size}
            height={size}
            alt="image of the card"
            className={imageStyle}
         />}
         <div className={`flex items-center ${titleDivStyle}`}>
            {icon && <CheckCircleIcon className="h-10 w-10 mr-3 mb-3 text-violet-500" />}
            <h1 className={`${titleStyle} font-bold text-xl`}>
               {title}
            </h1>
         </div>
         <p className={`${text_styles.body_text} ${bodyStyle} text-muted-foreground md:!text-base lg:!text-lg`}>
            {body}
         </p>
         {readMore && <Link
            href="/login"
            className={`${text_styles.body_text} lg:!text-lg flex items-center self-start mt-3`}
          >
            <span>Read More</span> <ArrowRightIcon className="w-4 ml-2 md:w-6" />
          </Link>}
        </div>
    )
}