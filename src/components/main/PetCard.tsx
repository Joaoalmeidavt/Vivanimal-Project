import { PetCardProps } from "@/types/types";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
export default function PetCard({
    name,
    species,
    age,
    gender,
    size,
    status,
    picture,
    description,
}: PetCardProps) {
    return (
        <Card className="max-w-sm">
            <CardBody className="overflow-visible">
                <Image
                    alt={name}
                    className="object-cover rounded-xl"
                    src={picture}
                    width={270}
                />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <article className="flex justify-between w-full">
                    <p className="text-tiny uppercase font-bold">{name}</p>
                </article>
                <small className="text-default-500 mb-2">Age: {age} years</small>
                <p className="text-small text-default-500">
                    <strong>Species:</strong> {species}
                </p>
                <p className="text-small text-default-500">
                    <strong>Gender:</strong> {gender}
                </p>
                <p className="text-small text-default-500">
                    <strong>Size:</strong> {size}
                </p>
                <p className="text-small text-default-500">
                    <strong>Status:</strong> {status}
                </p>
                <p className="text-small text-default-500">
                    <strong>Description:</strong> {description}
                </p>
            </CardHeader>
        </Card>
    );
}

