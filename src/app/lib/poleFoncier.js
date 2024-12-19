import Image from 'next/image'
import Card from './card'
export default function PoleFoncier() {
    return (
        <div className="">
            <Card 
                style='text-center md:!bg-white md:px-[25%]'
                titleDivStyle='justify-center'
                titleStyle='md:mb-3 md:!text-2xl' 
                title="Pole Foncier"
                body="Le pôle foncier joue un rôle central dans la sécurisation et la gestion des droits de propriété. Ce département est spécialisé dans l’étude, la délimitation, et la régularisation des terrains, assurant ainsi la sécurité juridique des biens fonciers pour les propriétaires, investisseurs et institutions publiques."
            />
            <div className='flex items-start md:!bg-white'>
                <div className='md:!bg-white'>
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='py-0 md:!bg-white' 
                        title="Bornage et délimitation"
                        body="Le bornage est l’opération qui définit juridiquement et matérialise sur le terrain les limites de propriétés privées."
                    />
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='md:!bg-white' 
                        title="Etudes et enquêtes foncières"
                        body="Analyse de la situation foncière d’un terrain (historique, droits, servitudes) pour une prise de décision éclairée pour les transactions immobilières."
                    />
                </div>
                <Image
                    src="/services_img.jpg"
                    alt="Les services de notre pole Foncier"
                    width={600}
                    height={900}
                    className="md:order:3 object-cover rounded-2xl w-1/3 h-[300px]"
                />
                <div className=''>
                    <Card 
                        titleStyle='mb-3 md:!text-xl' 
                        style='py-0 md:!bg-white'
                        title="Études d’impact foncier pour projets d’aménagement"
                        body="Evaluation des effets potentiels d’un projet (infrastructures, zones résidentielles) sur les propriétés avoisinantes, contribuant ainsi à une planification territoriale équilibrée."
                    />
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='md:!bg-white' 
                        title="Division de propriété"
                        body="Morcellement de propriété en vue d’obtenir plusieurs entités distinctes. "
                    />
                </div>
            </div>
            
        </div>
    )
}
