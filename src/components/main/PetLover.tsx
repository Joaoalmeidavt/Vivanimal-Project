'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonUI from "../ButtonUI";
import { useRouter } from "next/navigation";

export default function PetLover() {
    const route = useRouter();

    const fadeInFromRightAnimation = {
        initial: { opacity: 0, x: 100 },  // Começa fora da tela à direita
        animate: { opacity: 1, x: 0 },    // Vai para a posição original (x: 0)
        exit: { opacity: 0, x: 100 },     // Sai para a direita
        transition: { duration: 0.5, ease: "easeOut" },
    };

    return (
        <>
            <motion.section
                className="p-6 w-full h-44 bg-petLove rounded-lg flex justify-between overflow-hidden relative shadow-md lg:h-64 lg:p-12"
                {...fadeInFromRightAnimation}
            >
                <article className="flex flex-col justify-center gap-4 w-2/3 text-white lg:gap-8 ">
                    <article>
                        <h2 className="text-2xl font-semibold lg:text-7xl">Pet lover?</h2>
                        <p className="text-sm lg:text-2xl">Ajude o abrigo e seja um voluntário</p>
                    </article>
                    <ButtonUI
                        classNames="bg-black text-md text-white rounded-lg w-36 lg:min-h-12"
                        onPress={() => route.push('/ajuda-voluntaria')}
                    >
                        Quero ajudar
                    </ButtonUI>
                </article>
            </motion.section>
        </>
    );
}
