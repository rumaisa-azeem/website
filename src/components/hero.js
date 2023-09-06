import React from "react";
import profilePic from '../assets/profilePic.png';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Hero() {
    // let heroHeight = window.screen.height / 2;
    let mainHeaderText = "Hi, I'm Rumaisa.";
    let taglineText = "> pls give me job";
    return(
        <div id="hero" className="container-2xl h-screen flex flex-col justify-center bg-gradient-to-br from-purple-300 to-cyan-100">
            <div className="p-10 flex flex-col-reverse lg:flex-row">
                <div id="hero_text" className="flex basis-1/2 xl:basis-7/12 flex-col justify-center text-center lg:text-left space-y-3 lg:pl-10 ">
                    <h1 className="text-8xl font-extrabold">{mainHeaderText}</h1>
                    <p className="text-xl font-mono">{taglineText}</p>
                    <div id="hero_buttons" className="flex space-x-3 justify-center lg:justify-start">
                        <a href="https://linkedin.com/in/rumaisa-azeem"><img src={linkedinIcon} className="h-10"/></a>
                        <a href="https://github.com/rumaisa-azeem"><img src={githubIcon} className="h-10"/></a>
                    </div>
                </div>
                <div id="hero_image" className="shrink-0 basis-1/2 xl:basis-5/12  mb-8 lg:my-auto">
                    <img src={profilePic} alt='profile picture' className="rounded-full drop-shadow-lg bg-white mx-auto w-96"/>
                </div>
            </div>
            <div id="hero_intro" className="text-center text-2xl lg:mt-10 hover:font-bold" onClick={clickIntro}>
                <Link to="intro" smooth={true} duration={500}>
                    <p>Nice to meet you! Let me introduce myself...</p>
                </Link>
            </div>
        </div>
    )
}

function clickIntro(e) {
    console.log("intro clicked")
    document.getElementById("intro").scrollIntoView(true);
}