"use client";
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
    { value: "Adestrador", link: "https://www.dogaware.pt/?gad_source=1&gclid=CjwKCAiApY-7BhBjEiwAQMrrEcSoef6wgj_nWcKIqgTHx9eziVQ438WT2jaa581ZBj0YhRdAwcWiehoCJDwQAvD_BwE" },
    // { value: "Dashboard", link: "/dashboard" },
];

export default function NavbarUI() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(true);
    const selfLinks = ["Home", "Adopte-me", "Seja um voluntário"];

    return (
        <Navbar isBordered onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
            <NavbarContent justify="start" className="container">
                <NavbarBrand className="mr-4 -mt-2 cursor-pointer" onClick={() => window.location.href = "/"}>
                    <Image src="/logo.png" alt="logo" width={100} height={100} className="max-w-24 min-w-24 h-8" />
                </NavbarBrand>
                <NavbarContent className="hidden lg:flex gap-2 hover:text-[#1d7b89] text-semibold">
                    {menuItems.map((item, index) => (
                        // Condicional para mostrar o link "Dashboard" apenas se isLogin for true
                        (item.value !== "Dashboard" || isLogin) && (
                            <NavbarItem key={index}>
                                <Link
                                    color="foreground"
                                    href={item.link}
                                    target={selfLinks.includes(item.value) ? "_self" : "_blank"}
                                >
                                    {index === 2 ? (
                                        <ButtonUI classNames="!bg-transparent text-[#1d7b89] p-2">
                                            {item.value}
                                        </ButtonUI>
                                    ) : (
                                        <ButtonUI classNames="!bg-transparent active:bg-red-500 p-2">
                                            {item.value}
                                        </ButtonUI>
                                    )}
                                </Link>
                            </NavbarItem>
                        )
                    ))}
                    {/* Adicionando o botão de login/logout baseado no estado de isLogin */}
                    <NavbarItem>
                        {isLogin ? (
                            <ButtonUI
                                classNames="!bg-transparent active:bg-red-500"
                                onPress={() => setIsLogin(!isLogin)}
                            >
                                Logout
                            </ButtonUI>
                        ) : (
                            <ButtonUI
                                classNames="!bg-transparent active:bg-red-500"
                                onPress={() => setIsLogin(!isLogin)}
                            >
                                Login
                            </ButtonUI>
                        )}
                    </NavbarItem>
                </NavbarContent>


            </NavbarContent>

            <NavbarContent justify="center" className="max-w-12 -mr-56 md:mr-0 lg:mr-0">
                <AvatarUI isLogin={isLogin} />
            </NavbarContent>

            <NavbarContent as="div" className="flex items-end justify-end md:hidden">
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
                        // Condicional para mostrar o link "Dashboard" apenas se isLogin for true
                        (item.value !== "Dashboard" || isLogin) && (
                            <NavbarMenuItem key={`${item.value}-${index}`}>
                                {index === 2 ? (
                                    <ButtonUI classNames="!bg-transparent">
                                        <Link
                                            color="foreground"
                                            href={item.link}
                                            target={selfLinks.includes(item.value) ? "_self" : "_blank"}
                                            className="text-[#1d7b89] !text-lg font-semibold"
                                        >
                                            {item.value}
                                        </Link>
                                    </ButtonUI>
                                ) : (
                                    <ButtonUI classNames="!bg-transparent">
                                        <Link
                                            color="foreground"
                                            href={item.link}
                                            target={selfLinks.includes(item.value) ? "_self" : "_blank"}
                                            className="!text-lg"
                                        >
                                            {item.value}
                                        </Link>
                                    </ButtonUI>
                                )}

                            </NavbarMenuItem>
                        )
                    ))}
                    <Divider />
                    {isLogin ? (
                        <>
                            <ButtonUI classNames="!bg-transparent active:bg-red-500 !text-lg" onPress={() => setIsLogin(!isLogin)}>
                                Logout
                            </ButtonUI>
                        </>
                    ) : (
                        <ButtonUI classNames="!bg-transparent active:bg-red-500 !text-lg" onPress={() => setIsLogin(!isLogin)}>
                            Login
                        </ButtonUI>
                    )}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    );
}
