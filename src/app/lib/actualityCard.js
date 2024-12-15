import Image from "next/image";

export default function ActualityCard({iconUrl, title, tools}) {
    return (
        <div className="rounded-lg mb-6 p-5 bg-slate-300/10">
         {iconUrl && <Image 
            src={iconUrl}
            width={46}
            height={46}
            alt="image of the card"
            className="bg-blue-900 rounded-lg p-2 mb-3"
         />}
         <h1 className="text-xl text-black mb-6 font-bold md:text-5xl tracking-tight">
            {title}
         </h1>
         <ul>
            {tools.map((item,index) => (
                <li key={index}>{item}</li>
            ))}
         </ul>
        </div>
    )
}