'use client'
import { useState } from "react";
import { PetCardProps } from "@/types/types";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

export default function PetCard({
    name,
    status,
    picture,
}: PetCardProps) {
    // Estado para controlar se o animal foi "favoritado"
    const [isFavorite, setIsFavorite] = useState(false);

    // Função para alternar entre os ícones
    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Card className="max-w-sm p-4 md:max-w-[326px]">
            <CardBody className="overflow-visible">
                <Image
                    alt={name}
                    className="object-cover rounded-xl"
                    src={picture}
                    width={371}
                    height={370}
                    style={{ maxHeight: '300px', width: '350px' }}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2  flex items-start">
                <article className="flex flex-col justify-between w-full pt-2 ">
                    <p className="uppercase font-bold">{name}</p>
                    <p className="text-gray-600 text-sm ">{status === true ? "Adotado" : "Disponível para adoção"}</p>
                </article>
                <article className="pt-2">
                    {/* <button
                        className="bg-gray-200/50 p-2 rounded-lg"
                        onClick={handleFavoriteToggle}
                    >
                        {isFavorite ? (
                            <IoIosHeart className="w-6 h-6 text-red-500" />
                        ) : (
                            <IoIosHeartEmpty className="w-6 h-6 text-gray-600" />
                        )}
                    </button> */}
                </article>
            </CardHeader>
        </Card>
    );
}
