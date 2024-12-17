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
            <div className="">
                <button
                    onClick={() => handleOpen(!isOpen)}
                    className="w-full"
                >
                    {children}
                </button>
            </div>
            <Modal scrollBehavior="outside" backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"> </ModalHeader>
                            <ModalBody className="p-0">
                                <Image
                                    alt={name}
                                    className="object-cover rounded-xl -mt-8"
                                    src={picture}
                                    width={371}
                                    height={370}
                                    style={{ maxHeight: '450px', width: '450px' }}
                                />
                                <article className="p-4">

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                        quam.
                                    </p>

                                </article>
                            </ModalBody>
                            <ModalFooter>
                                <ButtonUI onPress={onClose}>
                                    Close
                                </ButtonUI>
                                <ButtonUI onPress={onClose}>
                                    Action
                                </ButtonUI>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}

