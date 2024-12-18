'use client'

import Image from "next/image";
import ButtonUI from "../ButtonUI";
import { IoCopyOutline } from "react-icons/io5";

export default function Mbway() {
    const phoneNumber = "+351910022248"; // Número do MB WAY

    const copyAndOpenMBWay = () => {
        // Copia o número para a área de transferência
        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                // Abre o app de chamadas com o número (ou MB WAY, se suportar deep linking)
                window.location.href = `tel:${phoneNumber}`;
            })
            .catch((err) => {
                console.error("Erro ao copiar o número: ", err);
            });
    };

    return (
        <>
            <section className="p-6 w-full h-44 bg-mbway rounded-lg flex justify-between overflow-hidden relative">
                <article className="flex flex-col justify-center gap-4 w-2/3 text-black">
                    <article>
                        <h2 className="text-2xl font-semibold">Doe por MBway</h2>
                        <p className="text-sm">Toda ajuda é bem-vinda!</p>
                    </article>
                    <article>
                        <Image
                            src={"/mbwayDog.png"}
                            alt="Imagem decorativa de um cachorro"
                            width={150}
                            height={150}
                            className="absolute right-0 bottom-0"
                        />
                    </article>
                    <ButtonUI
                        classNames="bg-transparent text-md text-black rounded-lg w-36 shadow border-2 flex items-center justify-between"
                        onPress={copyAndOpenMBWay}
                    >
                        MB WAY <IoCopyOutline className="min-w-5 min-h-5" />
                    </ButtonUI>
                </article>
            </section>
        </>
    );
}
