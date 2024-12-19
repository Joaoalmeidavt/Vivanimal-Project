
'use client'
import ButtonUI from '@/components/ButtonUI'
import BecomeAVolunteer from '@/components/volunteers/BecomeAVolunteer'
import FooterVolunteer from '@/components/volunteers/FooterVolunteer'
import Mbway from '@/components/volunteers/MbWay'
import Needs from '@/components/volunteers/Needs'

import { BsFillTelephoneFill } from 'react-icons/bs'

export default function Page() {
    return (
        <main className='h-full bg-gray-50 relative shadow'>
            <section className="container max-w-[1024px] m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8 pb-2 lg:p-12">

                deskboard
                <Mbway />
                <ButtonUI classNames='shadow-2xl -mt-8 w-full bg-gray-50 h-16  bg-needs' onPress={() => window.location.href = `tel:+351910022248`}
                >Agende uma vista <BsFillTelephoneFill className="min-w-3 min-h-3" />
                </ButtonUI>

                <section className='w-full justify-left items-center'>
                    <h2 className="text-xl font-semibold text-blue-900 w-full pb-6">Saiba mais sobre como ajudar</h2>

                   <Needs/>
                </section>
                <h2 className="text-xl font-semibold text-blue-900 w-full">Seja um voluntário</h2>
                <BecomeAVolunteer />
            </section>
            <FooterVolunteer />
        </main>
    )
}
