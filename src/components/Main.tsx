'use client'
'use client';

import { useState } from "react";
import Categories from "./main/Categories";
import PetCard from "./main/PetCard";
import PetLover from "./main/PetLover";
import { texts } from "../lib/texts";
import Image from "next/image";
import ButtonUI from "./ButtonUI";

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
        <section className="container m-auto w-[90%] flex flex-col gap-8 justify-center items-center pt-8">
            {/* Componente para exibir informações adicionais */}
            <PetLover />

            {/* Botões com filtros */}
            <h2 className="text-xl font-semibold text-blue-900 w-full">
                Categorias
            </h2>
            <article className="w-full flex gap-4 -mt-4">
                <ButtonUI
                    onClick={() => setSelectedSpecies("cat")}
                    classNames={`min-h-12 bg-white p-2 ${selectedSpecies === "cat"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                        }`}
                >
                    <span className="bg-sky-100 p-2 rounded-lg">
                        <Image src="/radio/catRadio.png" alt="cat" width={20} height={20} />
                    </span>
                    <span className="px-2">Gatos</span>
                </ButtonUI>
                <ButtonUI
                    onClick={() => setSelectedSpecies("dog")}
                    classNames={`min-h-12 bg-white p-2 ${selectedSpecies === "dog"
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                        }`}
                >
                    <span className="bg-sky-100 p-2 rounded-lg">
                        <Image src="/radio/dogRadio.png" alt="dog" width={20} height={20} />
                    </span>
                    <span className="px-2">Cães</span>
                </ButtonUI>
                <ButtonUI
                    onClick={() => setSelectedSpecies(null)}
                    classNames={`min-h-12 bg-white p-2 ${selectedSpecies === null
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
                        }`}
                >
                    <span className="bg-sky-100 p-2 rounded-lg">
                        <Image src="/radio/allRadio.png" alt="all" width={20} height={20} />
                    </span>
                    <span className="px-2">Todos</span>
                </ButtonUI>
            </article>

            {/* Renderiza os animais filtrados */}
            {filteredAnimals.map((animal) => (
                <PetCard
                    key={animal.id}
                    name={animal.name}
                    species={animal.species}
                    age={animal.age}
                    gender={animal.gender}
                    size={animal.size}
                    status={animal.status}
                    picture={animal.picture}
                    description={animal.description}
                />
            ))}
        </section>
    );
}
