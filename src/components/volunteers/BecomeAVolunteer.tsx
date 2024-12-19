'use client'
import { Form } from "@nextui-org/form";
import ButtonUI from "../ButtonUI";
import { Input } from "@nextui-org/input";
import React from "react";

export default function BecomeAVolunteer() {
    const [action, setAction] = React.useState<string | null>(null);

    return (
        <Form
            className="w-full h-full flex flex-col gap-4 md:border p-6 shadow-lg rounded-lg md:w-[90%]"
            validationBehavior="native"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));
                setAction(`submit ${JSON.stringify(data)}`);
            }}
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
                className="pt-4"
            
            />

            <Input
                isRequired
                errorMessage="Por favor, insira sua experiência com voluntariado"
                label="Tens experiência com voluntariado? Se sim, onde?"
                labelPlacement="outside"
                name="experiencia_voluntariado"
                placeholder="Descreva sua experiência"
                type="text"
            />

            <Input
                isRequired
                errorMessage="Por favor, insira sua frequência de voluntariado"
                label="Com que frequência pretendes fazer voluntariado?"
                labelPlacement="outside"
                name="frequencia_voluntariado"
                placeholder="Ex: 1x por semana"
                type="text"
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
                className="pt-10"
            />

            <div className="flex gap-2">
                <ButtonUI type="submit">
                    Enviar
                </ButtonUI>
                <ButtonUI type="reset">
                    Resetar
                </ButtonUI>
            </div>
            {action && (
                <div className="text-small text-default-500">
                    Ação: <code>{action}</code>
                </div>
            )}
        </Form>
    );
}
