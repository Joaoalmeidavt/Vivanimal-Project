'use client'
'use client';

import { useState } from "react";
import Categories from "./main/Categories";
import PetCard from "./main/PetCard";
import PetLover from "./main/PetLover";
import { texts } from "../lib/texts";
import Image from "next/image";
import ButtonUI from "./ButtonUI";
import VetPartner from "./main/Vetpartner";
import ModalUI from "./ModalUI.tsx/ModalUI";

export default function Main() {
    const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
    const animals = texts.animals;

    // Filtra os animais com base na espécie selecionada
    const filteredAnimals = selectedSpecies
        ? animals.filter((animal) =>
            animal.species.toLowerCase() === selectedSpecies.toLowerCase()
        )
        : animals;

    return (
        <section className="container max-w-[1024px] m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8 pb-24">
            <PetLover />
            <VetPartner />
            <h2 className="text-xl font-semibold text-blue-900 w-full">
                Categorias
            </h2>
            <article className="w-full flex gap-4 -mt-4">
                <ButtonUI
                    onPress={() => setSelectedSpecies("cat")}
                    classNames={`min-h-12 bg-white p-2 ${selectedSpecies === "cat"
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                        } shadow-md`}
                >
                    <span className="bg-sky-100 min-w-8 min-h-8 flex justify-center items-center rounded-lg">
                        <Image src="/radio/catRadio.png" alt="cat" width={20} height={20} />
                    </span>
                    <span className="px-2">Gatos</span>
                </ButtonUI>
                <ButtonUI
                    onPress={() => setSelectedSpecies("dog")}
                    classNames={`min-h-12 bg-white p-2 ${selectedSpecies === "dog"
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                        } shadow-md`}
                >
                    <span className="bg-sky-100 min-w-8 min-h-8 flex justify-center items-center rounded-lg">
                        <Image src="/radio/dogRadio.png" alt="dog" width={20} height={20} />
                    </span>
                    <span className="px-2">Cães</span>
                </ButtonUI>
                <ButtonUI
                    onPress={() => setSelectedSpecies(null)}
                    classNames={`min-h-12 bg-white p-2 ${selectedSpecies === null
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                        } shadow-md`}
                >
                    <span className="bg-sky-100 min-w-8 min-h-8 flex justify-center items-center rounded-lg">
                        <Image src="/radio/catAndDog.png" alt="all" width={20} height={20} />
                    </span>
                    <span className="px-2">Todos</span>
                </ButtonUI>
            </article>

            <article className="flex flex-wrap gap-4 justify-center md:justify-arround">
                {/* Renderiza os animais filtrados */}

                {filteredAnimals.map((animal) => (
                    <ModalUI key={animal.id}
                        name={animal.name}
                        species={animal.species}
                        age={animal.age}
                        gender={animal.gender}
                        size={animal.size}
                        status={animal.status}
                        picture={animal.picture}
                        description={animal.description}>
                        <PetCard
                            key={animal.id}
                            name={animal.name}
                            status={animal.status}
                            picture={animal.picture}
                        />
                    </ModalUI>

                ))}

            </article>
        </section>
    );
}
