
'use client'
import ButtonUI from '@/components/ButtonUI'
import ModalUI from '@/components/ModalUI.tsx/ModalUI'
import AddAnimalForm from '@/components/dashboard/AddAnimalForm'
import PetCard from '@/components/main/PetCard'
import BecomeAVolunteer from '@/components/volunteers/BecomeAVolunteer'
import FooterVolunteer from '@/components/volunteers/FooterVolunteer'
import Mbway from '@/components/volunteers/MbWay'
import Needs from '@/components/volunteers/Needs'
import { texts } from '@/lib/texts'
import Image from 'next/image'
import { useState } from 'react'

import { BsFillTelephoneFill } from 'react-icons/bs'

export default function Page() {
    const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
    const animals = texts.animals;
    const filteredAnimals = selectedSpecies
        ? animals.filter((animal) =>
            animal.species.toLowerCase() === selectedSpecies.toLowerCase()
        )
        : animals;

    const [addOrEditAnimal, setAddOrEditAnimal] = useState(true);
    return (
        <main className='h-full ßmax-w-[1024px] m-auto  bg-gray-50 relative shadow'>
            <section className="container max-w-[1024px] m-auto w-[90%] lg:w-full flex flex-col gap-8 justify-center items-center pt-8  pb-24">
                <article className='flex justify-center items-center gap-4'>
                    <ButtonUI classNames='bg-white shadow-md hover:bg-primary hover:text-white focus:bg-primary focus:text-white' onPress={() => setAddOrEditAnimal(true)}>Edite um animal</ButtonUI>
                    <ButtonUI classNames='bg-white shadow-md hover:bg-primary hover:text-white focus:bg-primary focus:text-white' onPress={() => setAddOrEditAnimal(false)}>Adicionar um novo animal</ButtonUI>
                </article>


                {addOrEditAnimal ? (<>
                    <article className='flex items-center justify-center'>
                        <h2 className="text-xl font-semibold text-blue-900 w-full pb-6">Edite as informações de um animal</h2>
                    </article>
                    <article className="w-full flex justify-center items-center gap-4 -mt-4 ">
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
                    <article className="w-full flex flex-wrap gap-4 justify-center md:justify-arround">

                        {/* Renderiza os animais filtrados */}

                        {animals.map((animal) => (
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
                </>
                ) : (<>
                    <article className='flex items-center justify-center'>
                        <h2 className="text-xl font-semibold text-blue-900 w-full pb-6">Adicione um novo animal</h2>
                    </article><AddAnimalForm />
                </>
                )}
            </section>
            <FooterVolunteer />
        </main>
    )
}
