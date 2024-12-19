
'use client'
import ButtonUI from '@/components/ButtonUI'
import BecomeAVolunteer from '@/components/volunteers/BecomeAVolunteer'
import FooterVolunteer from '@/components/volunteers/FooterVolunteer'
import Mbway from '@/components/volunteers/MbWay'

import { BsFillTelephoneFill } from 'react-icons/bs'

export default function Page() {
    return (
        <main className='h-full bg-gray-50 relative shadow'>
            <section className="container max-w-[1024px] m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8 pb-2">
                <Mbway />
                <ButtonUI classNames='bg-white shadow-md -mt-8' onPress={() => window.location.href = `tel:+351910022248`}
                >Agende uma vista <BsFillTelephoneFill className="min-w-3 min-h-3" />
                </ButtonUI>

                <section className='bg-red-200 w-full justify-left items-center'>
                    <h2 className="text-xl font-semibold text-blue-900 w-full">Saiba mais sobre como ajudar</h2>

                    <p> -Nossas maiores necessidades - </p>
                    <p>
                        produto de limpeza - lixivia****, detergente de louças, lava-tudo**, spray de tecido, detergente de roupas
                    </p>
                </section>
                <h2 className="text-xl font-semibold text-blue-900 w-full">Seja um voluntário</h2>
                <BecomeAVolunteer />






                adotar - agendar visita - marcação telefonica -

            </section>
            <FooterVolunteer />
        </main>
    )
}
