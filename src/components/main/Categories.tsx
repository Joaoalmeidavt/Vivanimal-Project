import Image from "next/image";
import ButtonUI from "../ButtonUI";

export default function Categories() {
    return (
        <>
            <h2 className="text-xl font-semibold text-blue-900 w-full">
                Categories
            </h2>
            <article className="w-full flex gap-4 -mt-4">
                <ButtonUI classNames="min-h-12 bg-white p-2 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <span className="bg-sky-100 p-2 rounded-lg">
                        <Image src="/radio/catRadio.png" alt="dog" width={20} height={20} />
                    </span>
                    <span className="px-2">Gatos</span>
                </ButtonUI>
                <ButtonUI classNames="min-h-12 bg-white p-2 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <span className="bg-sky-100 p-2 rounded-lg">
                        <Image src="/radio/dogRadio.png" alt="dog" width={20} height={20} />
                    </span>
                    <span className="px-2">Cães</span>
                </ButtonUI>
            </article>
        </>
    )
}