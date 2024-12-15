import Card from './card'
import QRCard from './QRCard'
import { questions_responses } from './data';


export default function ContactSection() {
    return (
        <section className='container px-5 py-6 md:py-24'>
            <div className=''>
              <Card 
                title="Questions fréquemment posées."
                titleStyle='mb-5 text-2xl' 
                body="Vous avez des questions ? Nous avons des réponses. Explorez notre foire aux questions pour en savoir plus sur nos services et processus." />
            </div>
            <div className='px-5'>
              { questions_responses.map((item) => (
                <QRCard key={item.id} question={item.question} response={item.response}/>
              ))}
            </div>
            <Card 
              iconUrl="/svg/email.svg"
              size={128}
              style="border-2 rounded-xl flex flex-col items-center text-center mx-5 mt-5 p-12"
              title="Vous avez des questions différentes"
              titleStyle='my-3 text-2xl'
              body="Notre équipe répondra à toutes vos questions. Nous garantissons une réponse rapide."
            />
      </section>
    )
}