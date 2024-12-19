import Image from 'next/image'
import Card from './card'

export default function PoleTopo() {
    return (
        <div className="">
            <Card 
                style='text-center md:!bg-white md:px-[25%]' 
                titleDivStyle='justify-center'
                title="Pole Topographie"
                titleStyle='md:mb-3 md:!text-2xl' 
                body="Le pôle topographie d’un cabinet de géomètre-expert est spécialisé dans la mesure et la représentation précise de l’espace physique."
            />
            <div className='flex items-start md:!bg-white'>
                <div className='md:!bg-white'>
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='py-0 md:!bg-white' 
                        title="Levé et implantation de chantiers"
                        body="Positionnement précis des éléments d’un projet (bâtiments, routes, fondations) sur le terrain, garantissant la conformité aux plans d’urbanisme et de construction."
                    />
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='md:!bg-white' 
                        title="Scanner laser 3D et photogrammétrie"
                        body="Utilisation des technologies comme les scanners 3D et les drones pour capturer des modèles numériques détaillés, permettant une analyse fine et une visualisation en 3D du site."
                    />
                </div>
                <Image
                    src="/services_img.jpg"
                    alt="Les services de notre pole Topographie"
                    width={600}
                    height={900}
                    className="md:order:3 object-cover rounded-2xl w-1/3 h-[380px]"
                />
                <div className=''>
                    <Card 
                        titleStyle='mb-3 md:!text-xl' 
                        style='py-0 md:!bg-white'
                        title="Drones et photogrammétrie"
                        body="prises de vues aériennes pour des levés topographiques de haute précision pour les projets de grande envergure comme les infrastructures routières ou les grands chantiers d’aménagement."
                    />
                    <Card 
                        titleStyle='mb-3 md:!text-xl'
                        style='md:!bg-white'
                        title="Etudes géodésiques"
                        body="Implémentation de réseau de points de contrôle géodésique pour des projets de grande envergure, assurant des mesures fiables et précises sur de vastes zones. "
                    />
                </div>
            </div>
            
        </div>
    )
}
