"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import ButtonUI from "../ButtonUI";
import Image from "next/image";
import { PetCardProps } from "@/types/types";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbCoinEuroFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";

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
    children: React.ReactNode;
} & PetCardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [confirmOpen, setConfirmOpen] = useState(false);
    const route = useRouter();

    const handleConfirmOpen = () => {
        setConfirmOpen(true);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
    };

    const handleAdopt = () => {
        onClose();
        handleConfirmOpen();
    };

    return (
        <>
            <button onClick={() => onOpen()}>{children}</button>
            <Modal
                scrollBehavior="outside"
                backdrop="blur"
                isOpen={isOpen}
                onClose={onClose}
                placement="bottom-center"
                hideCloseButton={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="p-6 rounded-t-2xl">
                                <Image
                                    alt={name}
                                    className="object-cover rounded-2xl m-auto"
                                    src={picture}
                                    width={371}
                                    height={370}
                                    style={{ maxHeight: "410px", width: "415px" }}
                                />
                                <article className="flex flex-col gap-5 mt-2">
                                    <section className="flex justify-between">
                                        <article>
                                            <h2 className="text-2xl font-semibold text-blue-900">{name}</h2>
                                            <p className="text-gray-600 text-sm">
                                                {status === true ? "Adotado" : "Disponível para adoção"}
                                            </p>
                                        </article>
                                    </section>
                                    <section className="flex flex-col gap-2 -mt-2">
                                        <article className="flex gap-2">
                                            <ButtonUI
                                                classNames={`min-h-16 w-1/2 bg-white p-2 flex justify-start items-center shadow-md`}
                                            >
                                                <span className="bg-sky-100 w-12 h-12 flex justify-center items-center rounded-lg">
                                                    <Image
                                                        src="/animalModal/petAge.png"
                                                        alt="all"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                                <span className="text-left">
                                                    <p className="text-xs text-gray-600">Idade</p>
                                                    <p className="font-bold text-blue-900">{age} ano</p>
                                                </span>
                                            </ButtonUI>
                                            <ButtonUI
                                                classNames={`min-h-16 w-1/2 bg-white p-2 flex justify-start items-center shadow-md`}
                                            >
                                                <span className="bg-sky-100 w-12 h-12 flex justify-center items-center rounded-lg">
                                                    <Image
                                                        src="/animalModal/catPawsDark.png"
                                                        alt="all"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </span>
                                                <span className="text-left">
                                                    <p className="text-xs text-gray-600">Espécie</p>
                                                    <p className="font-bold text-blue-900">
                                                        {species === "cat" ? "Gato" : "Cachorro"}
                                                    </p>
                                                </span>
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
                            <ModalFooter>
                                <ButtonUI
                                    onPress={() => {
                                        onClose();
                                        window.location.href = `tel:+351910022248`;
                                    }}
                                    classNames="rounded-br-none h-12 text-gray-600 bg-gray-300 hover:bg-primary/80 hover:text-white"
                                >
                                    Contacto <BsFillTelephoneFill className="min-w-3 min-h-3" />
                                </ButtonUI>
                                <ButtonUI
                                    onPress={() => {
                                        onClose();
                                        route.push("/ajuda-voluntaria");
                                    }}
                                    classNames="rounded-br-none h-12 text-gray-600 hover:bg-primary/80 hover:text-white"
                                >
                                    Apadrinhar <TbCoinEuroFilled className="min-w-4 min-h-4" />
                                </ButtonUI>
                                <ButtonUI
                                    onPress={handleAdopt}
                                    classNames="rounded-br-none h-12 bg-[#E04465] text-white"
                                >
                                    Adopte-me!
                                    {species === "cat" ? (
                                        <Image
                                            src="/animalModal/catPaws.png"
                                            alt="all"
                                            width={20}
                                            height={20}
                                        />
                                    ) : (
                                        <Image
                                            src="/animalModal/dogsPaw.png"
                                            alt="all"
                                            width={20}
                                            height={20}
                                        />
                                    )}
                                </ButtonUI>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Modal de Confirmação */}
            <Modal
                scrollBehavior="outside"
                backdrop="blur"
                isOpen={confirmOpen}
                onClose={handleConfirmClose}
                placement="center"
                hideCloseButton={true}
            >
                <ModalContent>
                    <ModalBody className="p-6 rounded-t-2xl flex flex-col justify-center items-center text-center text-lg font-semibold">
                        <h2>
                            Olá!
                        </h2>
                        <h2>
                            Obrigado por querer adotar o(a) {name}!
                        </h2>
                        <p className="text-normal font-normal">

                            Como próximo passo, gostaríamos de agendar uma visita consigo para ver o(a) pet.
                            Por favor, entre em contacto.
                        </p>
                    </ModalBody>
                    <ModalFooter className="flex justify-center items-center">
                        <ButtonUI classNames='shadow-md -mt-8 w-full bg-gray-50 h-16 bg-primary text-white' onPress={() => window.location.href = `tel:+351910022248`}
                        >Agende uma visita <BsFillTelephoneFill className="min-w-3 min-h-3" />
                        </ButtonUI>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
