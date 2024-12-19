'use client';
import { Form } from "@nextui-org/form";
import ButtonUI from "../ButtonUI";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { texts } from "../../lib/texts";  // Importando os dados dos animais

// Definindo a interface para um animal
interface Animal {
    id: number;
    name: string;
    species: string;
    age: number;
    gender: string;
    size: string;
    status: boolean;
    picture: string;
    description: string;
}

export default function AddAnimalForm() {
    const [action, setAction] = useState<string | null>(null);
    const [animals, setAnimals] = useState<Animal[]>(texts.animals);  // Armazenando os animais no estado

    const addAnimal = (newAnimal: Animal) => {
        setAnimals((prevAnimals) => {
            return [...prevAnimals, newAnimal];
        });
        console.log("Animal adicionado: ", newAnimal);
    };

    // const handleFormSubmit = () => {

    //     console.log("Formulário enviado!");


    //   console.log("Dados do formulário:", data);

    //     // const newAnimal: Animal = {
    //     //     id: animals.length + 1,
    //     //     name: data.name as string,
    //     //     species: data.species as string,
    //     //     age: parseInt(data.age as string, 10),
    //     //     gender: data.gender as string,
    //     //     size: data.size as string,
    //     //     status: data.status === "on",
    //     //     picture: data.imageUrl as string,
    //     //     description: data.description as string,
    //     // };

    //     // addAnimal(newAnimal);
    //     // setAction(`submit ${JSON.stringify(data)}`);
    // };

    return (
        <Form
            className="w-full h-full flex flex-col gap-8 md:border p-6 shadow-lg rounded-lg md:w-[90%] bg-white"
            validationBehavior="native"
            onReset={() => setAction("reset")}

        >
            {/* Nome do Animal */}
            <Input
                isRequired
                errorMessage="Por favor, insira um nome válido"
                label="Nome"
                labelPlacement="outside"
                name="name"
                placeholder="Insira o nome do animal"
                type="text"
                className="mb-4"
            />

            {/* Espécie */}
            <Input
                isRequired
                errorMessage="Por favor, insira uma espécie válida"
                label="Espécie"
                labelPlacement="outside"
                name="species"
                placeholder="Insira a espécie do animal"
                type="text"
                className="mb-4"
            />

            {/* Idade */}
            <Input
                isRequired
                errorMessage="Por favor, insira uma idade válida"
                label="Idade"
                labelPlacement="outside"
                name="age"
                placeholder="Insira a idade do animal"
                type="number"
                className="mb-4"
            />

            {/* Gênero */}
            <Input
                isRequired
                errorMessage="Por favor, insira um gênero válido"
                label="Gênero"
                labelPlacement="outside"
                name="gender"
                placeholder="Insira o gênero do animal"
                type="text"
                className="mb-4"
            />

            {/* Tamanho */}
            <Input
                isRequired
                errorMessage="Por favor, insira o tamanho do animal"
                label="Tamanho"
                labelPlacement="outside"
                name="size"
                placeholder="Insira o tamanho do animal"
                type="text"
                className="mb-4"
            />

            {/* Status */}
            <Input
                isRequired
                errorMessage="Selecione o status"
                label="Status"
                labelPlacement="outside"
                name="status"
                type="checkbox"
                className="mb-4"
            />

            {/* Descrição */}
            <Input
                isRequired
                errorMessage="Por favor, insira uma descrição"
                label="Descrição"
                labelPlacement="outside"
                name="description"
                placeholder="Insira a descrição do animal"
                type="text"
                className="mb-4"
            />

            {/* URL da Imagem */}
            <Input
                isRequired
                errorMessage="Por favor, insira uma URL válida para a imagem"
                label="Imagem"
                labelPlacement="outside"
                name="imageUrl"
                placeholder="Insira a URL da imagem do animal"
                type="url"
                className="mb-4"
            />

            {/* Botões de Envio e Reset */}
            <div className="flex gap-4 mt-6">
                <ButtonUI type="submit" classNames="bg-primary text-white shadow-md hover:bg-primary-dark w-full md:w-auto" 
                // onPress={(e) => {
                //     console.log("Formulário enviado!11111");
                //     // handleFormSubmit(); // Chama a função handleFormSubmit corretamente
                // }}
                >
                    Adicionar
                </ButtonUI>
                <ButtonUI type="reset" classNames="bg-red-400 text-white shadow-md hover:bg-red-500 w-full md:w-auto">
                    Resetar
                </ButtonUI>
            </div>

            {/* Feedback de Ação */}
            {action && (
                <div className="mt-4 text-small text-gray-500">
                    {action}
                </div>
            )}
        </Form>
    );
}
