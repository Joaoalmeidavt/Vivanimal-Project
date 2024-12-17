

import Image from "next/image";
import ButtonUI from "../ButtonUI";
export default function VetPartner() {
    return (
        <>
            <section className="p-6 w-full h-24 bg-vetPartner rounded-lg flex justify-between overflow-hidden relative">
                <article className="w-full flex justify-between items-center text-white">
                    <article className="">
                        <h2 className="text-2xl font-semibold">Vet Partner</h2>
                        <p className="text-sm text-nowrap">Ajude o abrigo e seja</p>
                    </article>
                    <ButtonUI classNames="bg-[#87C7E2] text-md text-white rounded-lg w-24 ">Contato</ButtonUI>
                </article>
            </section>
        </>
    )
}