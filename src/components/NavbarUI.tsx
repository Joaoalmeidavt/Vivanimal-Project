'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import ButtonUI from "./ButtonUI";
import { Divider } from "@nextui-org/react";
import AvatarUI from "./AvatarUI";

const menuItems = [
    { value: "Home", link: "/" },
    { value: "Adopte-me", link: "/ajuda-voluntaria" },
    { value: "Seja um voluntário", link: "/ajuda-voluntaria" },
    { value: "Veterinários Parceiros", link: "https://clivetfloratinoco.pt/" },
    { value: "Adestrador", link: "https://www.dogaware.pt/?gad_source=1&gclid=CjwKCAiApY-7BhBjEiwAQMrrEcSoef6wgj_nWcKIqgTHx9eziVQ438WT2jaa581ZBj0YhRdAwcWiehoCJDwQAvD_BwE" }
];
export default function NavbarUI() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(true);
    const selfLinks = ["Home", "Adopte-me", "Seja um voluntário"];
    return (
        <Navbar isBordered onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4 -mt-2" onClick={() => window.location.href = "/"}>
                    <Image src="/logo.png" alt="logo" width={100} height={100} className="w-24 h-8" />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3 hover:text-[#1d7b89] text-semibold">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link color="foreground" href={item.link} target={selfLinks.includes(item.value) ? "_self" : "_blank"}  >
                                {
                                    index === 2 ? <ButtonUI classNames="!bg-transparent text-[#1d7b89]"  >

                                        {item.value}
                                    </ButtonUI> : <ButtonUI classNames="!bg-transparent active:bg-red-500"  >

                                        {item.value}
                                    </ButtonUI>
                                }

                            </Link>
                        </NavbarItem>
                    ))}

                </NavbarContent>
            </NavbarContent>

            <NavbarContent justify="center" className="max-w-12 -mr-64 lg:mr-0">
                <AvatarUI isLogin={isLogin} />
            </NavbarContent>
            <NavbarContent as="div" className="flex items-end justify-end md:hidden"  >

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
                        <NavbarMenuItem key={`${item.value}-${index}`}>
                            <Link color="foreground" href={item.link} target={item.link === "/ajuda-voluntaria" ? "_self" : "_blank"} className="">
                                {
                                    index === 2 ?
                                        <ButtonUI classNames="!bg-transparent text-[#1d7b89] !text-lg font-semibold">
                                            {item.value}
                                        </ButtonUI>
                                        :
                                        <ButtonUI classNames="!bg-transparent active:bg-red-500 !text-lg">
                                            {item.value}
                                        </ButtonUI>
                                }
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <Divider />
                    {isLogin ?
                        <ButtonUI classNames="!bg-transparent active:bg-red-500 !text-lg" onPress={() => setIsLogin(!isLogin)}> Logout</ButtonUI>
                        : <ButtonUI classNames="!bg-transparent active:bg-red-500 !text-lg" onPress={() => setIsLogin(!isLogin)}> Login</ButtonUI>}
                </NavbarMenu>


            </NavbarContent>
        </Navbar>
    );
}
