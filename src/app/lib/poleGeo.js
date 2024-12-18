import Image from 'next/image'
import Card from './card'

export default function PoleGeo() {
    return (
        <div className="">
            <Card 
                style='text-center md:!bg-white md:px-[25%]' 
                titleDivStyle='justify-center'
                title="Pole Géomatique"
                titleStyle='md:mb-3 md:!text-2xl' 
                body="Le pôle géomatique se consacre à la gestion, l'analyse, et la visualisation de données géospatiales pour offrir des solutions précises et innovantes dans divers domaines, allant de l’urbanisme à l’environnement."
            />
            <div className='flex items-start md:!bg-white'>
                <div className='md:!bg-white'>
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='py-0 md:!bg-white' 
                        title="Gestion et analyse de bases de données   géospatiales"
                        body="Organisation et structuration des données géographiques pour faciliter leur accessibilité et leur utilisation dans des projets variés (urbanisme, agriculture, ressources naturelles)."
                    />
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='md:!bg-white' 
                        title="Études d’impact environnemental et gestion des ressources naturelles"
                        body="Analyse de l'impact des projets sur l'environnement et optimiser l'utilisation des ressources de manière durable."
                    />
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='md:!bg-white' 
                        title="Développement d’applications géospatiales"
                        body="Création d’applications et portails web SIG personnalisés pour faciliter l'accès et la gestion des données géographiques en ligne. "
                    />
                </div>
                <Image
                    src="/services_img.jpg"
                    alt="Illustration image"
                    width={600}
                    height={900}
                    className="md:order:3 object-cover rounded-2xl w-1/3 h-[380px]"
                />
                <div className=''>
                    <Card 
                        titleStyle='mb-3 md:!text-xl' 
                        style='py-0 md:!bg-white'
                        title="Imagerie satellite et télédétection"
                        body="Traitement et interprétation des images satellites pour des applications comme le suivi de l’occupation des sols, la gestion des ressources naturelles, et la surveillance des zones sensibles."
                    />
                    <Card
                        style='md:!bg-white' 
                        titleStyle='mb-3 md:!text-xl'
                        title="Cartographie numérique et SIG"
                        body="Conception et mise à jour des cartes numériques interactives, permettant une visualisation et une analyse dynamique des données géographiques. "
                    />
                </div>
            </div>
            
        </div>
    )
}
