'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonUI from "../ButtonUI";
import { IoCopyOutline } from "react-icons/io5";
import { Toaster, toast } from "sonner"; // Importa o toast do Sonner

export default function Mbway() {
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

    const fadeInRightAnimation = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
        transition: { duration: 0.5, ease: "easeOut" },
    };

    return (
        <>
            <motion.section
                className="p-6 w-full h-44 bg-mbway rounded-lg flex justify-between overflow-hidden relative shadow-md"
                {...fadeInRightAnimation} // Aplicando a animação diretamente
            >
                <article className="flex flex-col justify-center gap-4 w-2/3 text-black">
                    <article>
                        <h2 className="text-2xl font-semibold">Doe por MBway</h2>
                    </article>

                    <Image
                        src={"/mbwayDog.png"}
                        alt="Imagem decorativa de um cachorro"
                        width={150}
                        height={150}
                        className="absolute right-0 bottom-0"
                    />

                    <ButtonUI
                        classNames="bg-transparent text-md text-black rounded-lg w-36 h-16 shadow border-2 flex items-center justify-between"
                        onPress={() => copyToClipboard(mbwayNumber, "mbway")} // Copia o número MBWay
                    >
                        MB WAY <IoCopyOutline className="min-w-5 min-h-5" />
                    </ButtonUI>
                    <ButtonUI
                        classNames="bg-transparent text-md text-black rounded-lg w-36 h-16 shadow border-2 flex items-center justify-between"
                        onPress={() => copyToClipboard(ibanNumber, "iban")} // Copia o IBAN
                    >
                        IBAN <IoCopyOutline className="min-w-5 min-h-5" />
                    </ButtonUI>
                </article>
            </motion.section>

            {/* Toaster Component */}
            <Toaster position="top-right" />
        </>
    );
}

