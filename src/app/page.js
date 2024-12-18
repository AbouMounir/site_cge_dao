import Image  from 'next/image'
import Card from './lib/card';
import {tools, valeurs } from './lib/data';
import Projets from './lib/projets';
import Services from './lib/services'
import ToolsCard from './lib/outilsCard';
import ContactSection from './lib/contactSection';
import styles from './lib/styles/bg.module.css'
import text_styles from './lib/styles/text.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col gap-3 row-start-2 items-center sm:items-start">
      <section className="w-full mt-6 px-4 py-6 md:p-12 md:text-center flex flex-col items-center">
        <div className="md:max-w-[100%] md:flex md:flex-col md:items-center">
          <h1 className="mb-2 text-3xl md:text-5xl font-bold tracking-tight md:mb-5 md:w-11/12">
            Cabinet de géomètre expert 
          </h1>
          <h1
          className="text-3xl md:text-5xl md:mt-3 font-bold tracking-tight mb-6 md:w-11/12">
            Bâtir l&apos;avenir foncière avec expertise.</h1>
          <p className={`${text_styles.body_text} md:!text-xl text-muted-foreground mb-6 lg:w-4/5 md:w-11/12`}>
            Votre partenaire de confiance pour des levés fonciers précis et des informations sur les propriétés. Nous apportons expertise et précision à chaque projet, vous aidant à prendre des décisions en toute confiance
          </p>
          <Link href='/contact'>
            <button 
              className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 text-md rounded-lg md:px-6">
              Commencer
            </button>
          </Link>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full px-4 py-6 md:flex md:justify-center">
        <div className="md:max-w-[100%] lg:max-w-[90%] flex gap-4">
          <div className='pt-8 gap-4 md:flex md:justify-end md:gap-6 md:pt-0'>
            <Image
              src="/survey_grid_image_1.jpg"
              alt="Surveyor working on site"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full md:w-[45%] h-[300px] md:h-[400px]"
            />
            <Image
              src="/survey_grid_image_2.png"
              alt="Aerial view with markers"
              width={350}
              height={400}
              className="rounded-lg object-cover h-[300px] mt-4 w-full md:w-[45%] md:h-[400px] md:mt-10"
            />
          </div>
          <div className='md:flex md:gap-6'>
            <Image
            src="/survey_grid_image_3.jpg"
            alt="Surveying equipment"
            width={350}
            height={400}
            className="rounded-lg object-cover w-full md:w-[45%] h-[300px] md:h-[400px]"
            />
            <Image
              src="/survey_grid_image_4.jpg"
              alt="Surveyor on road"
              width={350}
              height={400}
              className="rounded-lg object-cover h-[300px] mt-4 w-full md:w-[45%] md:h-[400px] md:mt-10"
            />
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section className='w-full py-8 flex justify-center'>
        <div className='md:w-[100%] lg:max-w-[90%] flex lg:justify-center gap-4 overflow-scroll lg:overflow-hidden'>
          <Image 
            src='/svg/sponsor1.svg'
            alt='sponsor'
            height={120}
            width={30}
            className='h-[40px] w-[180px] lg:px-4 px-8 border-r-2'
          />
          <Image 
            src='/svg/sponsor2.svg'
            alt='sponsor'
            height={120}
            width={30}
            className='h-[40px] w-[180px] lg:px-4 px-8 border-r-2'
          />
          <Image 
            src='/svg/sponsor3.svg'
            alt='sponsor'
            height={120}
            width={30}
            className='h-[40px] w-[180px] lg:px-4 px-8 border-r-2'
          />
          <Image 
            src='/svg/sponsor4.svg'
            alt='sponsor'
            height={120}
            width={30}
            className='h-[40px] w-[180px] lg:px-4 px-8 border-r-2'
          />
          <Image 
            src='/svg/sponsor1.svg'
            alt='sponsor'
            height={120}
            width={30}
            className='h-[40px] w-[180px] lg:px-4 px-8'
          />
        </div>
      </section>

      {/* Qu'est ce qu'un géometre expert */}
      <section className={`${styles.bg_expert} w-full px-8 py-12 md:flex md:items-center md:justify-center md:py-24`}>
        <div className='md:max-w-[100%] lg:max-w-[90%] md:flex'>
          <div className="md:w-[50%] md:order-2 mt-5">
            <h1
            className="text-2xl mb-6 md:mb-4 md:text-3xl lg:text-4xl tracking-tight">
            Qu’est ce qu’un géomètre expert</h1>
            <p className={`${text_styles.body_text} mb-2 text-muted-foreground md:!text-base lg:!text-lg lg:mb-4`}>
            Le géomètre-expert est un acteur clé dans le domaine foncier, apportant une expertise technique, juridique et administrative indispensable au développement harmonieux des territoires.
            </p>
            <p className={`${text_styles.body_text} mb-2 text-muted-foreground md:!text-base lg:!text-lg`}>Il est un professionnel libéral reconnu par l&apos;ordre des géomètres experts, exclusivement habilité à établir le bornage des propriétés. Titulaire d&apos;un diplôme d&apos;ingénieur géomètre topographe et soumis à une réglementation stricte, il se distingue du simple géomètre par son expertise reconnue et ses obligations d&apos;objectivité et d&apos;impartialité.</p>
            <p className={`${text_styles.body_text} text-muted-foreground md:!text-base md:mt-4 lg:!text-lg`}>
            La profession dispose d&apos;un monopole pour dresser les plans et documents topographiques délimitant les propriétés foncières. Outre les activités réservées par la loi, le géomètre-expert offre divers services de conseil et d&apos;accompagnement pour une clientèle variée comprenant particuliers, professionnels, entreprises de BTP, aménageurs et collectivités locales.
            </p>
          </div>
          <div className='md:w-[45%] md:mr-10 md:order-1 mt-5'>
              <Image
                src="/survey_grid_image_1.jpg"
                alt="Surveyor working on site"
                width={350}
                height={400}
                className="rounded-lg object-cover w-full h-[250px] mb-6 md:h-[60%] md:w-[100%] md:mb-0"
              />
            <div className='flex justify-between md:w-[100%] md:mt-4'>
              <Image
                src="/survey_grid_image_1.jpg"
                alt="Surveyor working on site"
                width={350}
                height={400}
                className="rounded-lg object-cover w-[47%] h-[150px] mr-6 md:h-[150px]"
              />
              <Image
                src="/survey_grid_image_1.jpg"
                alt="Surveyor working on site"
                width={350}
                height={400}
                className="rounded-lg object-cover w-[47%] h-[150px] md:h-[150px]"
              />
              <Image
                src="/survey_grid_image_1.jpg"
                alt="Surveyor working on site"
                width={350}
                height={400}
                className="rounded-lg object-cover w-full h-[300px] md:h-[150px] md:w-auto md:mr-2 hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre cabinet*/}
      <section className={`w-full px-5 py-16 md:py-24 md:flex md:flex-col md:items-center`}>
        <div className="md:w-[100%] lg:max-w-[90%] text-center w-full">
          <h1
          className="p-0 m-0 text-2xl mb-6 font-bold md:!text-3xl lg:!text-5xl tracking-tight">
           Notre cabinet</h1>
          <div className={`${styles.bg_expert} px-8 py-12 mb-10 border-2 rounded-2xl bg-cyan-100 w-full`}>
            <p className={`${text_styles.cabinet_text} md:!text-lg text-muted-foreground`}>
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
      <section className={`${styles.bg_directeur} w-full px-5 py-16 md:py-24 md:flex md:items-center md:justify-center`}>
        <div className="flex flex-col md:w-[100%] lg:max-w-[90%] md:flex-row justify-center">
          <div className='md:w-[48%] md:p-6 md:order-2'>
            <h1
            className="p-0 m-0 text-2xl lg:text-4xl text-white mb-6 font-bold md:text-3xl tracking-tight">
            Mot du directeur</h1>
            <p className="mb-8 text-sm lg:text-lg text-slate-400 text-muted-foreground md:mb-6">
              Nous avons pour ambition d&apos;être un acteur clé dans l&apos;évolution du secteur foncier en Côte d&apos;Ivoire et d&apos;être un allié décisif dans l&apos;accompagnement de la population sur les questions liées au foncier.
            </p>
            <p className="mb-8 text-sm lg:text-lg text-slate-400 text-muted-foreground md:mb-6">
              Fort de notre expertise en foncier et topographie, nous offrons un accompagnement sur mesure pour vos projets de lotissement, d&apos;aménagement, de délimitation, de géomatique, d&apos;infrastructures et de construction, garantissant des solutions fiables et optimisées à chaque étape.
            </p>
            <p className="mb-8 text-sm lg:text-lg text-slate-400 text-muted-foreground md:mb-6">
              Notre approche repose sur une expertise technique avancée et une compréhension profonde des besoins locaux, afin de proposer des services parfaitement adaptés aux exigences de nos clients.
            </p>
          </div>
          <div className='self-center mb-5 h-[350px] bg-cover bg-[url("/expert_img.jpg")] md:order-1 md:h-[400px] lg:md:h-[500px] w-80 md:w-[48%] overflow-hidden'>
            
          </div>
        </div>
      </section>

      {/* Vision, Mission, Valeurs */}
      <section className='w-full px-5 py-16 md:flex md:items-center md:justify-center'>
        <div className='md:max-w-{100%} lg:max-w-[90%]'>
          <div className='md:flex md:flex-col md:items-center'>
            <Card 
              style='my-2 px-5 md:mb-6 md:text-center md:px-[22.5%]'
              titleDivStyle='justify-center'
              title="Vision, Mission, Valeurs" 
              titleStyle='mb-3 !text-2xl md:!text-3xl lg:!text-5xl text-center'
              body="Guidé par la précision, motivé par un objectif et engagé envers l’excellence dans chaque enquête" />
          </div>
        <div className='px-5 grid md:grid-cols-6 md:grid-rows-3 gap-6'>
          <Card 
            title="Vision"
            icon={true}
            style='h-full md:col-span-3 bg-slate-300/30'
            titleStyle='mb-3 md:!text-2xl' 
            body="Notre mission est d’offrir des services de conseil et d’expertise pour les projets du foncier, de topographie, de géomatique, de construction, d'urbanisme, et de gestion immobilière répondant aux attentes de nos clients tout en ancrant nos actions au plus près des préoccupations de nos collaborateurs et partenaires." />
          <Card 
            title="Mission"
            icon={true}
            style="h-full md:col-span-3 bg-slate-300/30" 
            titleStyle='mb-3 md:!text-2xl'
            body="Révolutionner l’expertise foncière en alliant efficacité, innovation et durabilité. Nous aspirons à redéfinir les standards de précision et de qualité dans notre domaine, en adoptant les technologies les plus avancées et en nous engageant à répondre aux besoins évolutifs de nos clients." />
            {valeurs.map((item) => (
              <Card key={item.id}
                style={`h-full md:col-span-2 bg-slate-300/30 ${item.id === 3 ? 'md:row-span-2':''}`}
                title={item.title}
                titleStyle='my-3 md:!text-xl'
                body={item.body}
                iconUrl={item.url}
                size={46}
                imageStyle="bg-blue-900  rounded-lg p-2 mb-3"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className='w-full px-5 py-16 md:flex md:items-center md:justify-center md:bg-[#F3F9FD]'>
        <Services />
      </section>

      {/* Projets */}
      <section className='w-full px-5 py-16 md:flex md:items-center md:justify-center'>
        <div className='md:max-w-[100%] lg:max-w-[90%] md:flex md:flex-col md:items-center md:justify-center'>
          <Card id='projets'
            style='md:text-center md:px-[15%]' 
            title="Projets" 
            titleDivStyle='md:justify-center'
            titleStyle="mb-3 !text-2xl md:!text-3xl lg:!text-5xl" 
            body="Découvrez la diversité et la qualité de notre travail, et imaginez ce que votre ingénieur géomètre topographe peut concrétiser pour vous. Nous mettons en avant des études de cas, des avant/après époustouflants, et des témoignages de clients satisfaits. Contactez-nous pour toute demande d’information sur nos services et nos réalisations, et laissez-nous transformer vos idées en réalité !" />
          <Projets />
          {/*<CarousselProjet />*/}
        </div>
      </section>

      {/* Statistiques*/}
      <section className={`${styles.bg_actuality} w-full mt-8 md:mt-0 py-16 px-10 lg:px-24 md:flex md:justify-center`}>
        <div className='border-1 rounded-xl bg-slate-50 px-8 md:flex md:justify-between md:max-w-[100%] lg:max-w-[90%]'>
          <Card 
            style='mb-0 text-center border-b-2 border-blue-600 rounded-none md:border-r-2 md:border-b-0 md:px-10 md:w-1/4'
            titleStyle='mb-0 pb-2'
            titleDivStyle='justify-center'
            title="22+" 
            body="Années d'expérience"/>
          <Card 
            style='h-full mb-0 text-center border-b-2 border-blue-600 rounded-none md:border-r-2 md:border-b-0 md:px-10 md:w-1/4' 
            titleStyle='mb-0 pb-2'
            titleDivStyle='justify-center'
            title="700+" 
            body="Cours "/>
          <Card 
            style='mb-0 text-center border-b-2 border-blue-600 rounded-none md:border-r-2 md:border-b-0 md:px-10 md:w-1/4' 
            titleStyle='mb-0 pb-2'
            titleDivStyle='justify-center'
            title="1K+" 
            body="Clients satisfaits"/>
          <Card 
          style='mb-0 text-center md:px-10 md:w-1/4' 
          title="100+"
          titleStyle='mb-0 pb-2' 
          titleDivStyle='justify-center'
          body="Certificats & Prix"/>
        </div>
      </section>

      { /* Technologies et Outils*/}
      <section className={`${styles.bg_tools} w-full px-5 py-16 md:flex md:items-center md:justify-center`}>
        <div className='md:max-w-[100%] lg:max-w-[90%] md:flex md:flex-col md:flex-wrap md:h-[650px]'>
            <div className='md:w-[45%]'>
              <Card 
                title="Technologies et Outils"
                style="border-b-2 rounded-none md:mb-6"
                titleStyle="!text-2xl md:!text-3xl lg:!text-4xl mb-3" 
                body="Équipés de technologies de pointe et d’outils avancés, nous proposons des solutions d’arpentage précises et fiables. De la photogrammétrie 3D aux récepteurs GPS et équipements bathymétriques, nos outils garantissent précision et efficacité pour chaque projet"/>
              <div className='px-5'>
                <Image
                src="/tools_img.jpg"
                alt="Surveyor working on site"
                width={300}
                height={300}
                className="hidden rounded-2xl object-cover w-full md:block h-[300px]"
                />
              </div>
            </div>
            <div className='my-6 md:w-[45%]'>
              <ToolsCard 
                title='Matériels topographiques'
                tools={tools[0]} />
              <ToolsCard 
                title='Divers matériels de terrain'
                tools={tools[1]} />
              <ToolsCard 
                title="Matériels d'acquisition 3D et photogrammétrie"
                tools={tools[2]} />
            </div>
            <div className='px-5'>
              <Image
                src="/tools_img.jpg"
                alt="Surveyor working on site"
                width={300}
                height={300}
                className="rounded-2xl object-cover w-full md:hidden md:w-[45%] h-[300px]"
              />
            </div>
        </div>
      </section>

      {/* Actualités*/}
      <section className='w-full md:min-h-max px-5 py-12 md:flex md:items-center md:justify-center'>
          <div className='md:max-w-[100%] lg:max-w-[90%]'>
            <Card 
              title="Actualités" 
              style='md:text-center md:px-[25%]'
              titleDivStyle='md:justify-center'
              titleStyle='mb-3 !text-2xl md:!text-3xl lg:!text-5xl'
              body="Retrouvez des articles techniques, des études de cas, et des informations sur la loi foncière du pays, les procédures légales et les techniques liées au métier de géomètre topographe."/>
          
            <div className='px-5 md:flex md:min-h-max md:gap-x-2'>
              <Card 
                iconUrl="/actuality_img.png"
                style="border-2 rounded-xl"
                imageStyle="h-1/2 w-full mb-4 rounded-lg"
                titleStyle="pb-2 md:!text-xl lg:!text-2xl"
                size={175}
                title="Activities Improve Mind"
                body="This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs."
                readMore={true}
              />
              <Card 
                iconUrl="/actuality_img.png"
                style="border-2 rounded-xl mt-3 md:mt-0"
                imageStyle="h-1/2 w-full mb-4 rounded-lg"
                size={175}
                title="Activities Improve Mind"
                titleStyle='pb-2 md:!text-xl'
                body="This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs."
                readMore={true}
              />
              <Card 
                iconUrl="/actuality_img.png"
                style="border-2 rounded-xl mt-3 md:mt-0"
                imageStyle="h-1/2 w-full mb-4 rounded-lg"
                size={175}
                title="Activities Improve Mind"
                titleStyle='pb-2 md:!text-xl'
                body="This comprehensive suite of payment products offers a fully integrated solution for handling various payment needs."
                readMore={true}
              />
            </div>
          </div>
      </section>

      {/* Questions */}
      <ContactSection />

      {/* Go to action */}
      <section className='w-full px-5 py-6 md:flex md:items-center md:justify-center'>
        <div className='p-5 md:flex md:items-center md:justify-center md:max-w-[100%] md:gap-6'>
          <div className='md:order-2 md:w-[45%]'>
          <Card
            style='mb-0'
            title="Nous sommes là pour vous écouter."
            titleStyle='mb-3 lg:!text-4xl'
            body="Vous cherchez un cabinet de géomètre-expert pour vous accompagner dans votre projet"
          />
          <Link href='/contact'>
            <button 
              className="bg-orange-400 ml-5 hover:bg-orange-600 text-white px-4 py-2 text-md rounded-lg">
              Commencer
            </button>
          </Link>
          </div>
          <Image
              src="/equipe_img.png"
              alt="Surveyor working on site"
              width={150}
              height={150}
              className="object-cover w-full px-5 mt-5 rounded-xl md:order-1 md:w-1/3 md:px-0 md:mt-0"
          />
        </div>
      </section>
    </main>
  );
}

