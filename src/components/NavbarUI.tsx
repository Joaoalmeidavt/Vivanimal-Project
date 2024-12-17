'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import AvatarUI from "./AvatarUI";
import { IoIosSearch } from "react-icons/io";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};


const menuItems = [
    "Features",
    "Customers",
    "Integrations",
    "Deletar perfil"
]
export default function NavbarUI() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <Navbar>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <AcmeLogo />
                    <p className="font-bold text-inherit text.">logo</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3">
                    {menuItems.map((item, index) => (

                        <NavbarItem key={index}>
                            <Link color="foreground" href="#">
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}

                </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<IoIosSearch className="w-6 h-6" />}
                    type="search"
                />

                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                        icon={<AvatarUI />}
                    />
                </NavbarContent>
                <NavbarMenu className="items-end">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </NavbarContent>
        </Navbar>
    );
}
