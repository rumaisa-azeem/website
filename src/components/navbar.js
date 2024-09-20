import React, {useEffect} from 'react';
import logo from '../assets/logo3.png';
import IconButton from "../components/IconButton";
import {Terminal} from "@mui/icons-material";

import {Link as ScrollLink, animateScroll, Events, scrollSpy} from "react-scroll";
import {Navbar as FlowbiteNavbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";

export default function Navbar({props}) {

    const navList = [
        { name: 'About', link: 'about-me-section' },
        { name: 'CV & Experience', link: 'cv-experience-section'},
        { name: 'Projects', link: 'projects-section' },
    ];
    const contactLink = "mailto:rumaisa.azeem0@gmail.com";

    if (window.innerWidth > 768) {
        document.documentElement.style.scrollSnapType = "y mandatory";
    }

    useEffect(() => {
        if (window.innerHeight > 768) {
            Events.scrollEvent.register('begin', (to, element) => {
                document.documentElement.style.scrollSnapType = 'none';
            });
            Events.scrollEvent.register('end', (to, element) => {
                document.documentElement.style.scrollSnapType = 'y mandatory';
            });
            scrollSpy.update();

            return () => {
                Events.scrollEvent.remove('begin');
                Events.scrollEvent.remove('end');
            }
        }
    }, []);

    const navbarTheme = {
        "root": {
            "base": "px-2 py-2.5 m-4 drop-shadow-md border border-gray-500 border-2 rounded-lg bg-gray-300 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
        },
        "collapse": {
            "base": "w-full rounded bg-white md:bg-transparent md:block md:w-auto",
            "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:font-medium",
        },
        "link": {
            "base": "block py-2 pl-3 pr-4 md:p-0",
            "active": {
                "on": "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                "off": "border-b border-gray-100 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:translate-y-1 transition ease-in-out " +
                    "md:dark:hover:bg-transparent md:dark:hover:text-white dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            // TODO: border-b causes border on last list element, change to use flex so no border on last item
            }
        },
        "toggle": {
            "base": "inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
            "icon": "h-6 w-6 shrink-0"
        }
    };

    return (
        <FlowbiteNavbar fluid theme={navbarTheme}>
            <NavbarBrand>
                <ScrollLink to="hero-section" smooth="easeInOutQuad">
                    {/*<IconButton imgSrc={logo} />*/}
                    <a href="#" className="flex gap-2">
                        <div className={"-translate-y-0.5"}><Terminal /></div>
                        <span>RUMAISA AZEEM</span>
                    </a>
                </ScrollLink>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                {navList.map((nav) =>
                    <ScrollLink to={nav.link} smooth="easeInOutQuad" offset={window.innerHeight < 768 ? -80 : 0} className={'cursor-pointer transition ease-in-out'} activeClass={"text-blue-600"} spy={true}>
                        <NavbarLink>{nav.name}</NavbarLink>
                    </ScrollLink>
                )}
                    <NavbarLink href={contactLink}>Contact</NavbarLink>
            </NavbarCollapse>
        </FlowbiteNavbar>
    );
}