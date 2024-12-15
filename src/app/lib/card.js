import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import text_styles from '../lib/styles/text.module.css'
export default function Card({iconUrl,size, title, body, readMore, style, titleStyle, imageStyle}) {
    return (
        <div className={`${style} rounded-lg p-5 bg-slate-300/10`}>
         {iconUrl && <Image 
            src={iconUrl}
            width={size}
            height={size}
            alt="image of the card"
            className={imageStyle}
         />}
         <h1 className={`${titleStyle} font-bold"`}>
            {title}
         </h1>
         <p className={`${text_styles.body_text} text-muted-foreground"`}>
            {body}
         </p>
         {readMore && <Link
            href="/login"
            className={`${text_styles.body_text} flex items-center self-start py-3`}
          >
            <span>Read More</span> <ArrowRightIcon className="w-4 ml-2 md:w-6" />
          </Link>}
        </div>
    )
}