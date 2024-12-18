import Card from './card'
import QRCard from './QRCard'
import { questions_responses } from './data';


export default function ContactSection() {

    
    return (
        <section className='w-full px-5 py-12 md:flex md:justify-center'>
          <div className='lg:max-w-[90%]'>
            <Card 
              style='md:text-center md:px-[25%]'
              title="Questions fréquemment posées."
              titleStyle='mb-5 !text-2xl md:!text-3xl lg:!text-5xl' 
              body="Vous avez des questions ? Nous avons des réponses. Explorez notre foire aux questions pour en savoir plus sur nos services et processus." />          
            <div className='md:flex md:justify-center'>
              <div className='px-5 md:w-1/2 md:h-[400px] md:overflow-hidden'>
                { questions_responses.map((item) => (
                  <QRCard key={item.id} question={item.question} response={item.response}/>
                ))}
              </div>
              <Card 
                iconUrl="/svg/email.svg"
                size={128}
                style="border-2 rounded-xl flex flex-col justify-between items-center text-center mx-5 mt-5 p-12 md:h-[400px] md:w-[40%] md:py-16"
                title="Vous avez des questions différentes"
                titleStyle='my-3 text-2xl md:text-xl'
                body="Notre équipe répondra à toutes vos questions. Nous garantissons une réponse rapide."
              />
            </div>
          </div>
      </section>
    )
}