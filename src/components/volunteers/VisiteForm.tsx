'use client'
import { Form } from "@nextui-org/form";
import ButtonUI from "../ButtonUI";
import { Input } from "@nextui-org/input";
import React from "react";

export default function VisiteForm() {
    // Define o estado como string ou null
    const [action, setAction] = React.useState<string | null>(null);

    return (
        <Form
            className="w-full max-w-xs flex flex-col gap-4 bg-red-500"
            validationBehavior="native"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));
                setAction(`submit ${JSON.stringify(data)}`);
            }}
            
        >
            <Input
                isRequired
                errorMessage="Please enter a valid username"
                label="Username"
                labelPlacement="outside"
                name="username"
                placeholder="Enter your username"
                type="text"
            />

            <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
            />
            <div className="flex gap-2">
                <ButtonUI type="submit">
                    Submit
                </ButtonUI>
                <ButtonUI type="reset">
                    Reset
                </ButtonUI>
            </div>
            {action && (
                <div className="text-small text-default-500">
                    Action: <code>{action}</code>
                </div>
            )}
        </Form>
    );
}
