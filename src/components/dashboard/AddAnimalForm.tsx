'use client';
import { Form } from "@nextui-org/form";
import ButtonUI from "../ButtonUI";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { texts } from "../../lib/texts";  // Importando os dados dos animais
import { Toaster, toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema de validação do Zod
const AnimalSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    species: z.string().min(1, "A espécie é obrigatória."),
    age: z.number().min(0, "A idade deve ser um número não negativo."),
    gender: z.string().min(1, "O gênero é obrigatório."),
    size: z.string().min(1, "O tamanho é obrigatório."),
    status: z.boolean().optional(),
    picture: z.string().url("A URL da imagem deve ser válida."),
    description: z.string().min(1, "A descrição é obrigatória."),
});

type AnimalFormData = z.infer<typeof AnimalSchema>;

export default function AddAnimalForm() {
    const [animals, setAnimals] = useState(texts.animals);  // Usando o estado de animais

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AnimalFormData>({
        resolver: zodResolver(AnimalSchema),
    });

    // Função para adicionar um novo animal
    const onSubmit = (data: AnimalFormData) => {
        console.log("Dados enviados:", data);

        // Cria um novo animal com id único
        const newAnimal = { id: animals.length + 1, ...data };

        // Atualiza o estado dos animais
        const updatedAnimals = [...animals, newAnimal];

        // Atualiza a lista de animais no estado local
        // setAnimals(updatedAnimals);

        // Atualiza o localStorage com a lista de animais atualizada
        localStorage.setItem('animals', JSON.stringify(updatedAnimals));

        toast.success("Animal adicionado com sucesso!");
    };

    return (
        <>
            <Form
                className="w-full h-full flex flex-col gap-8 md:border p-6 shadow-lg rounded-lg md:w-[90%] bg-white"
                onSubmit={handleSubmit(onSubmit)}  // Passando a função onSubmit corretamente
            >
                {/* Nome */}
                <Input
                    {...register("name")}
                    label="Nome"
                    placeholder="Insira o nome do animal"
                    type="text"
                    errorMessage={errors.name?.message}
                />

                {/* Espécie */}
                <Input
                    {...register("species")}
                    label="Espécie"
                    placeholder="Insira a espécie do animal"
                    type="text"
                    errorMessage={errors.species?.message}
                />

                {/* Idade */}
                <Input
                    {...register("age", { valueAsNumber: true })}
                    label="Idade"
                    placeholder="Insira a idade do animal"
                    type="number"
                    errorMessage={errors.age?.message}
                />

                {/* Gênero */}
                <Input
                    {...register("gender")}
                    label="Gênero"
                    placeholder="Insira o gênero do animal"
                    type="text"
                    errorMessage={errors.gender?.message}
                />

                {/* Tamanho */}
                <Input
                    {...register("size")}
                    label="Tamanho"
                    placeholder="Insira o tamanho do animal"
                    type="text"
                    errorMessage={errors.size?.message}
                />

                {/* URL da Imagem */}
                <Input
                    {...register("picture")}
                    label="Imagem"
                    placeholder="Insira a URL da imagem do animal"
                    type="url"
                    errorMessage={errors.picture?.message}
                />

                {/* Descrição */}
                <Input
                    {...register("description")}
                    label="Descrição"
                    placeholder="Insira a descrição do animal"
                    type="text"
                    errorMessage={errors.description?.message}
                />

                {/* Botão de Envio */}
                <ButtonUI
                    type="submit"
                    classNames="bg-primary text-white shadow-md hover:bg-primary-dark w-full md:w-auto"
                >
                    Adicionar
                </ButtonUI>
            </Form>

            <Toaster richColors position="top-right" />
        </>
    );
}
