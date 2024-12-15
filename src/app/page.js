import Image  from 'next/image'
import Card from './lib/card';
import {tools, valeurs } from './lib/data';
import Caroussel from './lib/caroussel';
import CarousselProjet from './lib/carousselP';
import ToolsCard from './lib/outilsCard';
import ContactSection from './lib/contactSection';
import styles from './lib/styles/bg.module.css'
import text_styles from './lib/styles/text.module.css'

export default function Home() {
  return (
    <main className="flex flex-col gap-3 row-start-2 items-center sm:items-start">
      <section className="container mt-6 px-4 py-6 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Cabinet de géomètre expert 
          </h1>
          <h2
          className="p-0 m-0 text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Bâtir l&apos;avenir foncière avec expertise.</h2>
          <p className={`${text_styles.body_text}   text-muted-foreground mb-6`}>
            Votre partenaire de confiance pour des levés fonciers précis et des informations sur les propriétés. Nous apportons expertise et précision à chaque projet, vous aidant à prendre des décisions en toute confiance
          </p>
          <button 
            className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 text-md rounded-lg">
            Commencer
          </button>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="container px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
          <div className='pt-8 grid gap-y-6'>
            <Image
              src="/survey_grid_image_1.jpg"
              alt="Surveyor working on site"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full h-[300px]"
            />
            <Image
              src="/survey_grid_image_2.png"
              alt="Aerial view with markers"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
          <div className='grid'>
            <Image
              src="/survey_grid_image_3.jpg"
              alt="Surveying equipment"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full h-[300px]"
            />
            <Image
              src="/survey_grid_image_4.jpg"
              alt="Surveyor on road"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Qu'est ce qu'un géometre expert */}
      <section className={`${styles.bg_expert} container px-5 py-12 md:py-24`}>
        <div className="max-w-3xl">
          <h1
          className="p-0 m-0 text-2xl mb-6 font-bold md:text-5xl tracking-tight">
           Qu’est ce qu’un géomètre expert</h1>
          <p className={`${text_styles.body_text} text-muted-foreground`}>
          Le géomètre-expert est un acteur clé dans le domaine foncier, apportant une expertise technique, juridique et administrative indispensable au développement harmonieux des territoires. Il est un professionnel libéral reconnu par l&apos;ordre des géomètres experts, exclusivement habilité à établir le bornage des propriétés. Titulaire d&apos;un diplôme d&apos;ingénieur géomètre topographe et soumis à une réglementation stricte, il se distingue du simple géomètre par son expertise reconnue et ses obligations d&apos;objectivité et d&apos;impartialité.
          </p>
          <p className={`${text_styles.body_text} text-muted-foreground`}>
          La profession dispose d&apos;un monopole pour dresser les plans et documents topographiques délimitant les propriétés foncières. Outre les activités réservées par la loi, le géomètre-expert offre divers services de conseil et d&apos;accompagnement pour une clientèle variée comprenant particuliers, professionnels, entreprises de BTP, aménageurs et collectivités locales.
          </p>
        </div>
      </section>

      {/* Notre cabinet*/}
      <section className={`container px-5 py-6 md:py-24`}>
        <div className="max-w-3xl">
          <h1
          className="p-0 m-0 text-2xl text-black mb-6 font-bold md:text-5xl tracking-tight">
           Notre cabinet</h1>
          <div className={`${styles.bg_expert} px-8 py-12 mb-10 border-2 rounded-2xl bg-cyan-100`}>
            <p className={`${text_styles.cabinet_text} text-xl text-muted-foreground`}>
            CGE-DI est un cabinet géomètre expert agréé par l&apos;ordre des géomètres experts, basé en Côte d&apos;Ivoire.
            Nous sommes un cabinet de géomètre expert tourné vers les nouvelles technologies spatiales et la sécurité des transactions foncières.
            </p>
          </div>
          <Image
              src="/illustration.png"
              alt="Illustration image"
              width={600}
              height={900}
              className="rounded-2xl object-cover w-full h-[450px]"
            />
        </div>
      </section>

      {/* Mot du directeur */}
      <section className={`${styles.bg_directeur} container px-5 py-12 md:py-24`}>
        <div className="max-w-3xl">
          <h1
          className="p-0 m-0 text-2xl text-white mb-6 font-bold md:text-5xl tracking-tight">
           Mot du directeur</h1>
          <p className="mb-10 text-sm text-slate-400 text-muted-foreground">
            Nous avons pour ambition d&apos;être un acteur clé dans l&apos;évolution du secteur foncier en Côte d&apos;Ivoire et d&apos;être un allié décisif dans l&apos;accompagnement de la population sur les questions liées au foncier.
          </p>
          <p className="mb-10 text-sm text-slate-400 text-muted-foreground">
            Fort de notre expertise en foncier et topographie, nous offrons un accompagnement sur mesure pour vos projets de lotissement, d&apos;aménagement, de délimitation, de géomatique, d&apos;infrastructures et de construction, garantissant des solutions fiables et optimisées à chaque étape.
          </p>
          <p className="mb-10 text-sm text-slate-400 text-muted-foreground">
            Notre approche repose sur une expertise technique avancée et une compréhension profonde des besoins locaux, afin de proposer des services parfaitement adaptés aux exigences de nos clients.
          </p>
          <div className='mb-5 h-[350px] w-80 bg-cover bg-[url("/expert_img.jpg")] overflow-hidden'>
            
          </div>
        </div>
      </section>

      {/* Vision, Mission, Valeurs */}
      <section className='container px-5 py-6 md:py-24'>
        <div className=''>
          <Card 
            title="Vision, Mission, Valeurs" 
            titleStyle='mb-3 text-2xl text-black'
            body="Guidé par la précision, motivé par un objectif et engagé envers l’excellence dans chaque enquête" />
        </div>
        <div className='px-5'>
          <Card 
            title="Vision"
            titleStyle='mb-3 text-xl' 
            body="Notre mission est d’offrir des services de conseil et d’expertise pour les projets du foncier, de topographie, de géomatique, de construction, d'urbanisme, et de gestion immobilière répondant aux attentes de nos clients tout en ancrant nos actions au plus près des préoccupations de nos collaborateurs et partenaires." />
          <Card 
            title="Mission" 
            titleStyle='mb-3 text-xl'
            body="Révolutionner l’expertise foncière en alliant efficacité, innovation et durabilité. Nous aspirons à redéfinir les standards de précision et de qualité dans notre domaine, en adoptant les technologies les plus avancées et en nous engageant à répondre aux besoins évolutifs de nos clients." />
            {valeurs.map((item) => (
              <Card key={item.id}
                title={item.title}
                titleStyle='my-3 text-xl'
                body={item.body}
                iconUrl={item.url}
                size={46}
                imageStyle="bg-blue-900  rounded-lg p-2 mb-3"
              />
            ))}
        </div>
      </section>

      {/* Services */}
      <section className='container px-5 py-6 md:py-24'>
        <div className=''>
          <Card title="Services" titleStyle='mb-3 text-2xl' body="Des solutions complètes d'arpentage et de propriété adaptées pour répondre à vos besoins uniques" />
        </div>
        <div className=''>
            <Caroussel />
        </div>
      </section>

      {/* Projets */}
      <section className='container px-5 py-6 md:py-24'>
          <Card title="Projets" titleStyle="mb-3 text-2xl" body="Découvrez la diversité et la qualité de notre travail, et imaginez ce que votre ingénieur géomètre topographe peut concrétiser pour vous. Nous mettons en avant des études de cas, des avant/après époustouflants, et des témoignages de clients satisfaits. Contactez-nous pour toute demande d’information sur nos services et nos réalisations, et laissez-nous transformer vos idées en réalité !
" />
        <CarousselProjet />
      </section>

      {/* Statistiques*/}
      <section className={`${styles.bg_actuality} w-full py-12 px-10 md:py-24`}>
            <div className='border-1 rounded-xl bg-slate-50 px-8 '>
              <Card 
                style='mb-0 text-center border-b-2 border-blue-600 rounded-none'
                titleStyle='mb-0 pb-2'
                title="22+" 
                body="Years of Experience"/>
              <Card 
                style='mb-0 text-center border-b-2 border-blue-600 rounded-none' 
                titleStyle='mb-0 pb-2'
                title="700+" 
                body="Total Courses"/>
              <Card 
                style='mb-0 text-center border-b-2 border-blue-600 rounded-none' 
                titleStyle='mb-0 pb-2'
                title="1K+" 
                body="Satisfied Customer"/>
              <Card 
              style='mb-0 text-center' 
              title="100+"
              titleStyle='mb-0 pb-2' 
              body="Certificates & Awards"/>
            </div>
      </section>

      { /* Technologies et Outils*/}
      <section className={`${styles.bg_tools} px-5 py-6 md:py-24`}>
            <div className=''>
                <Card 
                  title="Technologies et Outils"
                  style="border-b-2 rounded-none"
                  titleStyle="text-2xl mb-3" 
                  body="Équipés de technologies de pointe et d’outils avancés, nous proposons des solutions d’arpentage précises et fiables. De la photogrammétrie 3D aux récepteurs GPS et équipements bathymétriques, nos outils garantissent précision et efficacité pour chaque projet"/>
            </div>
            <div className='my-6'>
              <ToolsCard 
                title='Matériels topographiques'
                tools={tools[0]} />
              <ToolsCard 
                title='Divers matériels de terrain'
                tools={tools[1]} />
              <ToolsCard 
                title="Matériels d'acquisition 3D et photogrammétrie"
                tools={tools[2]} />
              <Image
              src="/tools_img.jpg"
              alt="Surveyor working on site"
              width={350}
              height={400}
              className="rounded-2xl object-cover px-2 w-full h-[300px]"
          />
            </div>
      </section>

      {/* Actualités*/}
      <section className='container px-5 py-6 md:py-24'>
          <div className=''>
            <Card 
              title="Actualités" 
              titleStyle='mb-3 text-2xl'
              body="Retrouvez des articles techniques, des études de cas, et des informations sur la loi foncière du pays, les procédures légales et les techniques liées au métier de géomètre topographe."/>
          </div>
          <div className='px-5'>
            <Card 
              iconUrl="/actuality_img.png"
              style="border-2 rounded-xl"
              imageStyle="h-1/2 w-full mb-4 rounded-lg"
              titleStyle="mb-0 pb-4"
              size={175}
              title="Activities Improve Mind"
              body="This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs."
              readMore={true}
            />
            <Card 
              iconUrl="/actuality_img.png"
              style="border-2 rounded-xl"
              imageStyle="h-1/2 w-full mb-4 rounded-lg"
              size={175}
              title="Activities Improve Mind"
              body="This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs."
              readMore={true}
            />
            <Card 
              iconUrl="/actuality_img.png"
              style="border-2 rounded-xl"
              imageStyle="h-1/2 w-full mb-4 rounded-lg"
              size={175}
              title="Activities Improve Mind"
              body="This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs."
              readMore={true}
            />
          </div>
      </section>

      {/* Questions */}
      <ContactSection />
      {/* Go to action */}
      <section className='container px-5 py-6 md:py-24'>
        <div className='p-5'>
          <Card
            style='mb-0'
            title="Nous sommes là pour vous écouter."
            titleStyle='mb-3 text-2xl'
            body="Vous cherchez un cabinet de géomètre-expert pour vous accompagner dans votre projet"
          />
          <button 
            className="bg-orange-500 ml-5 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-md">
            Commencer
          </button>
          <Image
              src="/equipe_img.png"
              alt="Surveyor working on site"
              width={150}
              height={150}
              className="object-cover w-full px-5 mt-5"
          />
        </div>
      </section>
    </main>
  );
}

