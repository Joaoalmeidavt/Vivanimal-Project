'use client'
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import ButtonUI from "../ButtonUI";
import PetCard from "../main/PetCard";
import Image from "next/image";
import { PetCardProps } from "@/types/types";

export default function ModalUI({
    children,
    name,
    species,
    age,
    gender,
    size,
    status,
    picture,
    description,
}: {
    children: React.ReactNode,
} & PetCardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();



    const handleOpen = (open: boolean) => {
        onOpen();
    };

    return (
        <>
            <button
                onClick={() => handleOpen(!isOpen)}
                className="w-full"
            >
                {children}
            </button>
            <Modal scrollBehavior="outside" backdrop="blur" isOpen={isOpen} onClose={onClose} placement="bottom-center" hideCloseButton={true}>
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalBody className="p-6 bg-sky-100 rounded-2xl" >
                                <Image
                                    alt={name}
                                    className="object-cover rounded-2xl m-auto "
                                    src={picture}
                                    width={371}
                                    height={370}
                                    style={{ maxHeight: '410px', width: '415px' }}
                                />
                                <article className="flex flex-col gap-5 mt-2">
                                    <section className="flex justify-between">
                                        <article >
                                            <h2 className="text-2xl font-semibold text-blue-900">{name}</h2>
                                            <p className="text-gray-600 text-sm ">{status === true ? "Adotado" : "Disponível para adoção"}</p>
                                        </article>
                                        <article>falta algo aqui</article>
                                    </section>

                                    <section className=" flex flex-col gap-2">
                                        <article className="flex gap-2">
                                            <ButtonUI
                                                classNames={`min-h-16 w-1/2 bg-white p-2 flex justify-start items-center ga p-2
                                            `}
                                            >
                                                <span className="bg-sky-100 w-12 h-12 flex justify-center items-center rounded-lg">
                                                    <Image src="/radio/catAndDog.png" alt="all" width={30} height={30} />
                                                </span>
                                                <span className="text-left">
                                                    <p className="text-xs text-gray-600">Idade</p>
                                                    <p className="font-bold text-blue-900">{age} ano</p></span>
                                            </ButtonUI>
                                            <ButtonUI
                                                classNames={`min-h-16 w-1/2 bg-white p-2 flex justify-start items-center gap-2
                                            `}
                                            >
                                                <span className="bg-sky-100 w-12 h-12 flex justify-center items-center rounded-lg">
                                                    <Image src="/radio/catAndDog.png" alt="all" width={30} height={30} />
                                                </span>
                                                <span className="text-left">
                                                    <p className="text-xs text-gray-600">Espécie</p>
                                                    <p className="font-bold text-blue-900">{species === "Cat" ? "Gato" : "Cachorro"}</p></span>
                                            </ButtonUI>
                                        </article>
                                        <article className="flex gap-2">
                                            <ButtonUI
                                                classNames={`min-h-16 w-1/2 bg-white p-2 flex justify-start items-center gap-2
                                            `}
                                            >
                                                <span className="bg-sky-100 w-12 h-12 flex justify-center items-center rounded-lg">
                                                    <Image src="/radio/catAndDog.png" alt="all" width={30} height={30} />
                                                </span>
                                                <span className="text-left">
                                                    <p className="text-xs text-gray-600">Gênero</p>
                                                    <p className="font-bold text-blue-900">{gender === "male" ? "Macho" : "Femea"}</p></span>
                                            </ButtonUI>
                                            <ButtonUI
                                                classNames={`min-h-16 w-1/2 bg-white p-2 flex justify-start items-center gap-2
                                            `}
                                            >
                                                <span className="bg-sky-100 w-12 h-12 flex justify-center items-center rounded-lg">
                                                    <Image src="/radio/catAndDog.png" alt="all" width={30} height={30} />
                                                </span>
                                                <span className="text-left">
                                                    <p className="text-xs text-gray-600">Tamanho</p>
                                                    <p className="font-bold text-blue-900">{size === "small" ? "Pequeno" : "Grande"}</p></span>
                                            </ButtonUI>
                                        </article>
                                    </section>
                                    <section>
                                        <article>
                                            <h2 className="text-xl font-semibold text-blue-900">Sobre o {name}</h2>
                                            <p>{description}</p>
                                        </article>
                                    </section>



                                </article>
                            </ModalBody>
                            <ModalFooter className="bg-sky-100">
                                <ButtonUI onPress={onClose}>
                                    Adote agora!
                                </ButtonUI>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}

