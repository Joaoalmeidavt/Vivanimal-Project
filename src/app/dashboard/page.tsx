
'use client'
import ButtonUI from '@/components/ButtonUI'
import AddAnimalForm from '@/components/dashboard/AddAnimalForm'
import BecomeAVolunteer from '@/components/volunteers/BecomeAVolunteer'
import FooterVolunteer from '@/components/volunteers/FooterVolunteer'
import Mbway from '@/components/volunteers/MbWay'
import Needs from '@/components/volunteers/Needs'

import { BsFillTelephoneFill } from 'react-icons/bs'

export default function Page() {
    return (
        <main className='h-full bg-gray-50 relative shadow '>
            <section className="container max-w-[1024px] m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8 lg:p-12 pb-24">

                <AddAnimalForm />
            </section>
            <FooterVolunteer />
        </main>
    )
}
