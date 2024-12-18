'use client'
import Link from 'next/link';
import { TfiLinkedin } from 'react-icons/tfi';
import React, { useState } from 'react';

import {
    BiLogoGithub,
    BiLogoGmail,
    BiLogoWhatsapp,
    BiSolidDownload,
} from 'react-icons/bi';
import Contancts from '../footer/Contacts';
import { useRouter } from 'next/navigation';


export default function FooterVolunteer() {
    const route = useRouter();

    return (
        <section
            className="footer w-full flex flex-col justify-center items-center relative bg-[#1D7B83]" id='footer relative'
        >
            <section>
                <article className=" pt-16 pb-8 container flex flex-col justify-center items-center gap-8 m-auto w-[80%] text-white text-center">
                    {/* <h2 className="font-semibold text-2xl">lorem ipsum</h2>
                    <p>
                        aa
                    </p> */}
                    <button
                        className="py-2 px-6 rounded-full border border-white text-xl hover:border-[#1D7B83] hover:bg-white hover:text-[#1D7B83]"
                        onClick={() => window.location.href = `tel:+351910022248`}
                    >
                        Agende uma visita!
                    </button>
                    <aside className="w-full flex justify-center items-center gap-4 m-auto">
                        <Contancts />
                    </aside>
                    <span className="text-white"> &copy; Todos os direitos reservados a <strong className='uppercase'>vivanimal.lda</strong></span>
                </article>
            </section>
        </section>
    );
}

