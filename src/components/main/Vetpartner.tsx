'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonUI from "../ButtonUI";
import Link from "next/link";

export default function VetPartner() {
    const slideInFromLeft = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5, ease: "easeOut" },
    };

    return (
        <>
            <motion.section
                className="p-6 w-full h-24 bg-vetPartner rounded-lg flex justify-between overflow-hidden relative shadow-md"
                {...slideInFromLeft}
            >
                <article className="w-full flex justify-between items-center text-white">
                    <article>
                        <h2 className="text-2xl font-semibold">Vet Partner</h2>
                        <p className="text-sm text-nowrap">Ajude o abrigo e seja</p>
                    </article>
                    <Link href="https://clivetfloratinoco.pt/" target="_blank" aria-label="Veteriná Partner">
                        <ButtonUI classNames="bg-[#87C7E2] text-md text-white rounded-lg w-24">
                            Contato
                        </ButtonUI>
                    </Link>
                </article>
            </motion.section>
        </>
    );
}
