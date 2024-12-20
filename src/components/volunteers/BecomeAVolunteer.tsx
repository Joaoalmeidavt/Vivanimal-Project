"use client";
import { Form } from "@nextui-org/form";
import ButtonUI from "../ButtonUI";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { toast } from "sonner";

export default function BecomeAVolunteer() {
    const [action, setAction] = React.useState<string | null>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handlePress = () => {
        toast.success("Formulário enviado com sucesso!"); // Mostra o toast
        setIsDisabled(true); // Desativa o botão
        setTimeout(() => {
            setIsDisabled(false); // Reativa após 5 segundos
        }, 5000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Coleta os dados do formulário
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (response.ok) {
                setAction("E-mail enviado com sucesso!");
            } else {
                setAction(`Erro: ${result.message}`);
            }
        } catch (error) {
            console.error("Erro ao enviar o e-mail:", error);
            setAction("Erro ao enviar o e-mail, tente novamente.");
        }
    };

    return (
        <Form
            className="w-full h-full flex flex-col gap-8 md:border p-6 shadow-lg rounded-lg md:w-[90%]"
            validationBehavior="native"
            onReset={() => setAction("reset")}
            onSubmit={handleSubmit} // Atualizando para a nova função de submit
        >
            {/* Campos obrigatórios para o formulário */}
            <Input
                isRequired
                errorMessage="Por favor, insira seu nome"
                label="Nome"
                labelPlacement="outside"
                name="nome"
                placeholder="Insira seu nome"
                type="text"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira sua idade"
                label="Idade"
                labelPlacement="outside"
                name="idade"
                placeholder="Insira sua idade"
                type="number"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira sua localidade"
                label="Localidade"
                labelPlacement="outside"
                name="localidade"
                placeholder="Insira sua localidade"
                type="text"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira um e-mail válido"
                label="E-mail"
                labelPlacement="outside"
                name="email"
                placeholder="Insira seu e-mail"
                type="email"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira um número de telemóvel válido"
                label="Telemóvel"
                labelPlacement="outside"
                name="telemovel"
                placeholder="Insira seu telemóvel"
                type="tel"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira seu objetivo como voluntário"
                label="Qual é o teu objetivo em te tornares numa pessoa voluntária da nossa associação?"
                labelPlacement="outside"
                name="objetivo"
                placeholder="Insira seu objetivo"
                type="text"
                className="pt-8"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira sua experiência com voluntariado"
                label="Tens experiência com voluntariado? Se sim, onde?"
                labelPlacement="outside"
                name="experiencia_voluntariado"
                placeholder="Descreva sua experiência"
                type="text"
                className="pt-2"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira sua frequência de voluntariado"
                label="Com que frequência pretendes fazer voluntariado?"
                labelPlacement="outside"
                name="frequencia_voluntariado"
                placeholder="Ex: 1x por semana"
                type="text"
                className="pt-3"
            />

            {/* Caixa de seleção para atividades que o voluntário pode colaborar */}
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Que atividades te propões a colaborar:</label>
                <div className="flex gap-4">
                    <label>
                        <input type="checkbox" name="atividades" value="Apoio ao Canil" /> Apoio ao Canil
                    </label>
                    <label>
                        <input type="checkbox" name="atividades" value="Apoio ao Gatil" /> Apoio ao Gatil
                    </label>
                    <label>
                        <input type="checkbox" name="atividades" value="Família de Acolhimento Temporário (FAT)" /> Família de Acolhimento Temporário (FAT)
                    </label>
                </div>
                {/* Adicionar mais opções conforme necessário */}
            </div>

            <Input
                isRequired
                errorMessage="Por favor, insira sua experiência com animais"
                label="Tens alguma experiência com animais?"
                labelPlacement="outside"
                name="experiencia_animais"
                placeholder="Descreva sua experiência com animais"
                type="text"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira se você tem alergia ou condição médica"
                label="Tens alguma alergia ou condição médica que possa afetar a tua capacidade de interação com os animais?"
                labelPlacement="outside"
                name="alergia_condicao"
                placeholder="Descreva suas condições, se houver"
                type="text"
                className="pt-10 lg:pt-0"
            />

            <div className="flex gap-2">
                <ButtonUI
                    type="submit"
                    classNames={`bg-primary text-white shadow-md ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                        }`}
                    onPress={handlePress}
                    disabled={isDisabled} // Propriedade que controla se o botão está desativado
                >
                    Enviar
                </ButtonUI>
                <ButtonUI type="reset" classNames="bg-red-400 text-white shadow-md">
                    Resetar
                </ButtonUI>
            </div>
            {action && (
                <div className="text-small text-default-500">
                    {action}
                </div>
            )}
        </Form>
    );
}
