'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "../lib/card";
import FormLabelInput from './../lib/formLabelInput'
import ContactSection from "../lib/contactSection";

export default function Contact() {

    function handleSubmit(){
        
    }
    return (
        <div className="">
            <Card 
                title='Contactez notre équipe de service client'
                titleStyle="text-2xl my-4" 
                body="Notre équipe de service client dédiée est là pour vous aider avec toutes vos questions, préoccupations ou demandes de renseignements. Que vous ayez besoin d'aide pour une commande, ayez des questions liées aux produits." />
            <form className="p-5" onSubmit={handleSubmit}>
                <FormLabelInput multiline={false} label="Prénom" type="text" placeholder="Prénom"/>
                <FormLabelInput multiline={false} label="Nom de Famille" type="text" placeholder="Nom de famille" />
                <FormLabelInput multiline={false} label="Email" type="email" placeholder="Entrez votre email" />
                <FormLabelInput multiline={false} label="Numéro de téléphone" type="tel" placeholder="Entrez un numéro à 10 chiffres" />
                <FormLabelInput multiline={true} label="Sujet" type="text" placeholder="Ecrire le sujet" />
                <FormLabelInput multiline={true} label="Votre message" type="text" placeholder="Ecrivez ici..." />
                <button 
                    className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-md">
                    Envoyer un message <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
            </form>
            <ContactSection />
        </div>
    )
}