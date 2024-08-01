import React from 'react';
import logo from '../assets/logo3.png';
import IconButton from "../components/IconButton";

import { Link as ScrollLink } from "react-scroll";
import {Navbar as FlowbiteNavbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";

export default function Navbar({props}) {

    const navList = [
        { name: 'About Me', link: 'about-me-section' },
        { name: 'Projects', link: 'projects-section' },
        { name: 'CV & Experience', link: 'cv-experience-section'},
        { name: 'Contact', link: '/contact'},
    ];

    const navbarTheme = {
        "root": {
            "base": "fixed w-screen z-10 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
        },
        "collapse": {
            "base": "w-full rounded bg-white md:bg-transparent md:block md:w-auto",
        },
        "link": {
            "base": "block py-2 pl-3 pr-4 md:p-0",
            "active": {
                "on": "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:translate-y-1 transition ease-in-out " +
                    "md:dark:hover:bg-transparent md:dark:hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            // TODO: border-b causes border on last list element, change to use flex so no border on last item
            }
        },
    };

    return (
        <FlowbiteNavbar fluid theme={navbarTheme}>
            <NavbarBrand>
                <ScrollLink to="hero-section" smooth="easeInOutQuad">
                    <IconButton imgSrc={logo} />
                </ScrollLink>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                {navList.map((nav) =>
                    <ScrollLink to={nav.link} smooth="easeInOutQuad">
                        <NavbarLink href="#">{nav.name}</NavbarLink>
                    </ScrollLink>
                )}
            </NavbarCollapse>
        </FlowbiteNavbar>
    );
}