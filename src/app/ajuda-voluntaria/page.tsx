
import Footer from '@/components/footer/Footer'
import BecomeAVolunteer from '@/components/volunteers/BecomeAVolunteer'
import Mbway from '@/components/volunteers/MbWay'
import VisiteForm from '@/components/volunteers/VisiteForm'

export default function Page() {
    return (
        <main className='h-full bg-gray-50 relative shadow'>
            <section className="container m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8 pb-24">
                <Mbway />

                <article>Agende uma vista - 999999999999
              
                </article>
                <article>Seja um voluntário
                    <BecomeAVolunteer />
                </article>

                necessidades:
                produto de limpeza - lixivia****, detergente de louças, lava-tudo**, spray de tecido, detergente de roupas



adotar - agendar visita - marcação telefonica - 
voluntario usa o formulário

            </section>
            <Footer />
        </main>
    )
}
