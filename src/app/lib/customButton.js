import Link from "next/link"

export default function CustomButton({text, href, style, onClick}) {
    return (
        <div>
          {href ? <Link href={href}>
          <button 
            onClick={onClick}
            className={`${style} rounded-sm`}>
            {text}
          </button>
          </Link> : <button 
            onClick={onClick}
            className={`${style} rounded-sm`}>
            {text}
          </button> } 
        </div>
    )
}