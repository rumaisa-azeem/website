import React from "react";
import profilePic from '../assets/profilePic.png';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import IconButton from "./IconButton";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Hero() {
    const mainHeaderText = "Hi, I'm Rumaisa.";
    const taglineText = "> I study Computer Science with Management";
    return(
        <div id="hero" className="h-screen flex flex-col justify-center bg-gradient-to-br from-purple-300 to-cyan-100 md:pt-20">
            <div className="p-10 flex flex-col-reverse lg:flex-row">
                <div id="hero_text" className="flex basis-1/2 xl:basis-7/12 flex-col justify-center text-center lg:text-left space-y-3 lg:pl-10 ">
                    <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold">{mainHeaderText}</h1>
                    <p className="text-xl font-mono">{taglineText}</p>
                    <div id="hero_buttons" className="flex space-x-3 justify-center lg:justify-start">
                        <IconButton href="https://linkedin.com/in/rumaisa-azeem" imgSrc={linkedinIcon}/>
                        <IconButton href="https://github.com/rumaisa-azeem" imgSrc={githubIcon}/>
                    </div>
                </div>
                <div id="hero_image" className="shrink-0 basis-1/2 xl:basis-5/12  mb-8 lg:my-auto">
                    <img src={profilePic} alt='profile picture' className="rounded-full drop-shadow-lg bg-white mx-auto w-96"/>
                </div>
            </div>
            {/*<div id="hero_intro" className="text-center text-2xl lg:mt-10 hover:font-bold" onClick={clickIntro}>*/}
            {/*    /!*<Link activeClass="active" to="intro" smooth={true} duration={500}*!/*/}
            {/*    /!*>*!/*/}
            {/*    /!*    <p>Nice to meet you! Let me introduce myself...</p>*!/*/}
            {/*    /!*</Link>*!/*/}
            {/*</div>*/}
        </div>
    )
}

function clickIntro(e) {
    console.log("intro clicked")
    document.getElementById("intro").scrollIntoView(true);
}