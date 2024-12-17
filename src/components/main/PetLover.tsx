

import Image from "next/image";
import ButtonUI from "../ButtonUI";
export default function PetLover() {
    return (
        <>
            <section className="p-6 w-full  h-44 bg-petLove rounded-lg flex justify-between overflow-hidden relative">
                <article className="flex flex-col justify-center gap-4 w-2/3 text-white">
                    <article >
                        <h2 className="text-2xl font-semibold">Pet lover?</h2>
                        <p className="text-sm">Ajude o abrigo e seja um voluntário</p>

                    </article>
                    <ButtonUI classNames="bg-black text-md text-white rounded-lg w-36">Join Now</ButtonUI>
                </article>
            </section>
        </>
    )
}