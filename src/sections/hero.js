import React from "react";
import profilePic from '../assets/profilePic.png';

import {LinkedIn, GitHub} from "@mui/icons-material";
import Typewriter from "typewriter-effect";

export default function Hero() {
    return(
        <div id="hero-section" className="h-screen flex flex-col justify-center md:pt-10 snap-start">
            <div className="p-10 container mx-auto xs:pt-24 flex flex-col-reverse lg:flex-row">
                <div id="hero_text" className="flex basis-1/2 xl:basis-7/12 flex-col justify-center text-center lg:text-left space-y-3">
                    <h1 className="text-3xl xs:text-6xl lg:text-7xl font-extrabold font-display">hi, i'm rumaisa.</h1>
                    <span className="xs:text-2xl">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay("natural")
                                    .changeDeleteSpeed(1)
                                    .typeString("> BSc Computer Science with Management @ King's College London")
                                    .pauseFor(2000)
                                    .deleteChars(60)
                                    .typeString("Software Engineer Intern @ Hewlett Packard Enterprise")
                                    .pauseFor(2000)
                                    .deleteChars(53)
                                    .typeString("AI Ethics Research @ King's College London")
                                    .pauseFor(2000)
                                    .start();
                            }}
                            options={{skipAddStyles:true, loop:true}}
                        />
                    </span>
                    <div id="hero_buttons" className="flex space-x-2 justify-center items-center lg:justify-start">
                        <a href="https://github.com/rumaisa-azeem" className="text-[40px] hover:translate-y-1 transition ease-in-out">
                            <GitHub fontSize="inherit"/>
                        </a>
                        <a href="https://linkedin.com/in/rumaisa-azeem" className="text-[45px] hover:translate-y-1 transition ease-in-out">
                            <LinkedIn fontSize="inherit"/>
                        </a>
                    </div>
                </div>
                <div id="hero_image" className="shrink-0 basis-1/2 xl:basis-5/12 mb-10 lg:my-auto w-fit mx-auto black h-96">
                    <img src={profilePic} alt='profile picture' className="rounded-full bg-white mx-auto w-96"/>
                </div>
            </div>
        </div>
    )
}