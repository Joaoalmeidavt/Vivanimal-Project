'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



const menuItems = [
    "Home",
    "Adopte-me",
    "Seja um voluntário",
    "Veterinários Parceiros",
    "Adestrador"
]
export default function NavbarUI() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4 -mt-2">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3 font-bold">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link color="foreground" href="#">
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}

                </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="flex items-end justify-end"  >
                {/* <Input
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
                /> */}


                <NavbarContent justify="end">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="text-brand-text-primary"
                        icon={
                            isMenuOpen ? (
                                <IoMdClose className="w-8 h-8" />
                            ) : (
                                <IoMdMenu className="w-8 h-8" />
                            )
                        }
                    />
                </NavbarContent>
                <NavbarMenu className="items-end">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "primary" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item === "Adestrador" ? <>Encontre um adestrador</> : <>{item}</>}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </NavbarContent>
        </Navbar>
    );
}
