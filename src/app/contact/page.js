'use client'
'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "../lib/card";
import FormLabelInput from './../lib/formLabelInput'
import ContactSection from "../lib/contactSection";
import { useState } from "react";

export default function Contact() {

    const [status, setStatus] = useState('');
    const [inputValues, setInputValues] = useState(
        {
            prenom:'',
            nom:'',
            email:'',
            tel:'',
            objet:'',
            message:''
        }
    )
    const formData = {}
    
    async function handleSubmit(e){
        e.preventDefault();
        const formElements = e.target.elements;
        for (let element of formElements) {
            let name = element.name
            let value = element.value
            console.log(`name : ${name} && value : ${value}`);
            formData[name] = value
        }
        try {
            const res = await fetch('/api/send-email', {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(formData)
            })

            if (res.ok) {
                setStatus('Message envoyé avec succès !');
                formData = {}
                for (let element of formElements) {
                    element.value = ''
                }
                console.log(status);
                
            } else {
                setStatus('Erreur lors de l\'envoi du message.');
                console.log(status);
            }
        } catch (error) {
            setStatus('Erreur lors de l\'envoi du message.');
            console.log(status);
        }           
    }
    return (
        <section className='w-full px-5 py-16 md:flex md:items-center md:justify-center'>
            <div className="md:flex md:flex-col md:items-center">
            <div className="md:w-4/5">
                <Card 
                    title='Contactez notre équipe de service client'
                    titleStyle="text-2xl my-4" 
                    body="Notre équipe de service client dédiée est là pour vous aider avec toutes vos questions, préoccupations ou demandes de renseignements. Que vous ayez besoin d'aide pour une commande, ayez des questions liées aux produits." />
                <form id="contactForm" className="p-5" onSubmit={handleSubmit}>
                    <FormLabelInput multiline={false} name='prenom' label="Prénom" type="text" placeholder="Prénom"/>
                    <FormLabelInput multiline={false} name='nom' label="Nom de Famille" type="text" placeholder="Nom de famille" />
                    <FormLabelInput multiline={false} name='email' label="Email" type="email" placeholder="Entrez votre email" />
                    <FormLabelInput multiline={false} name='tel' label="Numéro de téléphone" type="tel" placeholder="Entrez un numéro à 10 chiffres" />
                    <FormLabelInput multiline={true} name='objet' label="Objet" type="text" placeholder="Ecrire le sujet" />
                    <FormLabelInput multiline={true} name='message' label="Votre message" type="text" placeholder="Ecrivez ici..." />
                    <button 
                        className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-md">
                        Envoyer un message <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </button>
                </form>
            </div>
            <ContactSection />
            </div>
        </section>
    )
}