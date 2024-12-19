'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonUI from "../ButtonUI";
import { IoCopyOutline } from "react-icons/io5";
import { Toaster, toast } from "sonner"; // Importa o toast do Sonner

export default function Needs() {
    // Números do MBWAY e do IBAN
    const mbwayNumber = "+351910022248";
    const ibanNumber = "PT50000201231234567890123"; // Exemplo de IBAN

    const copyToClipboard = (text: string, label: string) => {
        // Copia o texto para a área de transferência
        navigator.clipboard.writeText(text)
            .then(() => {
                // Exibe a notificação de "copiado" com a mensagem correta
                const successMessage = label === "mbway" ? "Número do MBway copiado!" : "IBAN copiado!";
                toast.success(successMessage);
            })
            .catch((err) => {
                console.error("Erro ao copiar o número:", err);
            });
    };

    const slideInFromLeft = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5, ease: "easeOut" },
    };

    return (
        <>
            <motion.section
                className="p-6 w-full h-60 bg-needs rounded-lg flex justify-between overflow-hidden relative shadow-md lg:h-60 lg:p-12"
                {...slideInFromLeft} // Aplicando a animação diretamente
            >
                <article className="flex flex-col justify-center gap-4 w-2/3 text-black">
                    <article>
                        <h2 className="text-2xl font-semibold lg:text-5xl">Nossas maiores necessidades</h2>
                    </article>
                    <Image
                        src={"/needsCat.png"}
                        alt="Imagem decorativa de um cachorro"
                        width={150}
                        height={150}
                        className="absolute -right-10 bottom-0 w-[160px] h-[150px] lg:w-[220px] lg:h-[200px] lg:right-12"
                    />
                    <article className="flex flex-col gap-4 lg:flex-row lg:gap-8 lg:ml-4 ">
                        <article className="flex flex-col">
                            <span className="flex flex-col md:flex-row lg:gap-4">
                                <li className="text-nowrap">Lixivia</li>
                                <li className="text-nowrap">Lava-tudo</li>
                            </span>
                            <span className="flex-col flex flex-wrap lg:flex-row lg:gap-4">
                                <li className="text-nowrap">Detergente de louças</li>
                                <li className="text-nowrap">Spray de tecido</li>
                                <li className="text-nowrap lg:-mt-3">Detergente de roupas</li>
                            </span>



                        </article>

                    </article>
                </article>
            </motion.section>


            {/* Toaster Component */}
            <Toaster richColors position="top-right" />
        </>
    );
}

