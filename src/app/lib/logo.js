import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex gap-1">
            <Image 
              src='/logo.png'
              width={64}
              height={64}
              alt="Logo du cabinet CGE-DAO"
            />
            <div className="h-16 flex items-center"> 
              <p className="text-lg text-blue-700 font-bold"> CGE-DAO </p>
            </div>
          </div>
    )
}