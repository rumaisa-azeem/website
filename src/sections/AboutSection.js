import React from "react";

import Window from "../components/Window";

import kclLogo from "../assets/kclLogo.png";
import hpeLogo from "../assets/hpeLogo.jpeg";

import {OpenInNew} from "@mui/icons-material";

export default function AboutSection() {
    return (
        <Window>
            <h1 className="font-extrabold text-5xl col-span-1">About</h1>
            <div className="col-span-3 flex flex-col gap-3">

                <div className={"flex flex-col gap-4 md:flex-row"}>
                    <div className={"md:grow lg:basis-1/3"}>
                        Based in Manchester, I'm studying for my BSc in Computer Science with Management at King's College London.
                        Currently, I'm on my industrial placement year at Hewlett Packard Enterprise (Bristol), where I'm working as a Software Engineer Intern.
                    </div>
                    <div className={"flex gap-3 h-14 justify-center md:flex-col lg:flex-row lg:items-center md:justify-start md:h-full"}>
                        <img src={kclLogo} className={"max-h-60 lg:h-24 object-contain"} alt={"KCL logo"}/>
                        <img src={hpeLogo} className={"max-h-60 lg:h-24 object-contain"} alt={"HPE logo"}/>
                    </div>
                </div>
                <p>
                    Before I started coding for a career, I did it as a hobby. I love problem-solving, especially
                    when it comes to (unnecessarily) automating minor inconveniences in my daily life.
                </p>
                <p>
                    Being a highly inquisitive person has also led me down the path of research, and I'm incredibly proud to have co-authored this paper
                    in my second year at university:
                    <br/>
                    <a href="https://arxiv.org/abs/2406.08824" className="text-blue-600" target="_blank">
                        <OpenInNew fontSize="inherit" />&nbsp;LLM-Driven Robots Risk Enacting Discrimination, Violence, and Unlawful Actions </a>
                </p>
                <p>
                    Additionally, as a management student, I'm passionate about utilising software to optimise business operations, which
                    led me to become head of King's Labs in 2023, a pro-bono software engineering team at King's Business Club.
                    I really enjoy overseeing projects and driving teams forward, so I've led multiple successful projects in my
                    time at college and university. More in my CV below!
                </p>
                <p>
                    When I'm not coding, I love knitting and reading. Book recommendations are very welcome :)
                </p>

            </div>
        </Window>
    );
}