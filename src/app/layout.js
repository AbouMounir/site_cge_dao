import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from './lib/styles/bg.module.css'
import text_styles from './lib/styles/text.module.css'
import Logo from "./lib/logo"
import { PhoneIcon } from "@heroicons/react/24/outline";
import SocialsMedias from "./lib/socialMedia"
import Link from "next/link";
import CustomButton from "./lib/customButton";

{/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/}
{/*className={`${geistSans.variable} ${geistMono.variable} antialiased`}*/}


export const metadata = {
  title: "CGEDAO | Cabinet de Géomètre-Expert",
  description: "Cabinet de géomètre expert pour vos travaux de Lotissement, délimitation villageoise, Dossier technique, certificat foncier, topographie, géomatique, sig en Côte d'Iovire et dans la sous région",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <header>
          <div className="h-16 pl-10 bg-blue-900 md:flex md:items-center md:justify-around text-white">
            <SocialsMedias color="white" colorStroke="white" rx="5.7622"/>
            <div className="hidden md:flex">
              <p className="mr-2"> Email : </p>
              <Link href='/'> contact@cgedao.com</Link>
            </div>
            <div className="hidden md:flex">
              <div className="h-6 w-6 mr-2 rounded-full border-white border-2 flex justify-center items-center">
                <PhoneIcon className="h-4 w-4 text-slate-50" />
              </div>
              <Link href='/'> +225 0140729371, +225 0777045033</Link>
            </div>
          </div>
          <div className="flex justify-around items-center md:h-16 md:pl-10">
              <div className="w-11/12 flex justify-between md:w-auto">
                <Link href='/'><Logo /></Link>
                <svg className="h-16 md:hidden" width="24" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.50134H29M0 21.5013H29M3.29545 11.5013H29" stroke="#434343" strokeWidth="2"/>
                </svg>
              </div>
              <div className="hidden md:flex">
                <ul className={`text-sm lg:text-lg flex gap-2 md:gap-4`}>
                  <Link href='/'><li className="">Accueil</li></Link>
                  <Link href='#cabinet'><li className="">Presentation</li></Link>
                  <Link href='#services'><li className="">Services</li></Link>
                  <Link href='#projets'><li className="">Projets</li></Link>
                  <Link href='#technologies'><li className="">Technologies et outils</li></Link>
                </ul>
              </div>
              <CustomButton text='Contactez-nous' href='/contact' style='md:px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white !text-sm hidden md:flex' />
            </div>
        </header>
        {children}
        <footer className={`${styles.bg_footer} py-6 md:w-full md:flex md:justify-center md:py-12`}>
          <div className="ml-6 w-2/3 md:ml-0 md:flex md:justify-around md:w-[90%]">
            <div className="md:flex md:flex-col md:justify-around md:px-6 lg:px-24 lg:w-1/3">
              <Logo />
              <p className={`${text_styles.body_text} md:w-4/5 mb-4`}>Découvrez un monde de possibilités avec CGE-DAO.</p>
              <SocialsMedias color="black" colorStroke="black" rx="11.9085"/>
            </div>
            <div className="mt-8">
              <h1 className="font-bold mb-2"> Pages </h1>
              <ul className={`${text_styles.body_text} grid gap-2`}>
                  <Link href='#cabinet'><li className="">Presentation</li></Link>
                  <Link href='#services'><li className="">Services</li></Link>
                  <Link href='#projets'><li className="">Projets</li></Link>
                  <Link href='#technologies'><li className="">Technologies et outils</li></Link>
              </ul>
            </div>
            <div className="mt-8 mb-3">
              <h1 className="font-bold mb-2"> Contact </h1>
              <ul className="">
                <li className={`${text_styles.body_text} mb-1`}>+225 014 0729 371</li>
                <li className={text_styles.body_text}>Plateau 13 Boulevard</li>
                <li className={text_styles.body_text}>Batreau Roussel, 01 Bp</li>
                <li className={text_styles.body_text}>1831 Abidjan 01</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
