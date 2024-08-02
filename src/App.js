// import './styles/App.css';
import Footer from "./sections/footer";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import React from "react";

import {OpenInNew} from "@mui/icons-material";

// TODO: snap scrolling between sections
// TODO: compress profile pic

function App() {
    return (
        <div className={"bg-gradient-to-br from-purple-300 to-cyan-100"}>
            <div className="fixed w-screen z-10">
                <Navbar />
            </div>
            <main>
                <Hero />
                <section className="md:h-screen p-4 md:pt-6 flex flex-col justify-center border-b border-gray-300" id="about-me-section">
                    {/*<div className="container h-full mx-auto flex items-center gap-12">*/}
                    {/*    <img src={beReals} className="h-2/3"/>*/}
                    {/*    <div className="flex flex-col gap-2">*/}
                    {/*        <h1 className="text-5xl font-extrabold mb-3">About Me</h1>*/}
                    {/*        <p>*/}
                    {/*            <strong>Right now</strong> <br/>*/}
                    {/*            I'm studying for my Bachelor's Degree in Computer Science with Management & a*/}
                    {/*            Year in Industry at King's College London. Currently, I'm on my placement year*/}
                    {/*            as a Software Engineer Intern at Hewlett Packard Enterprise.*/}
                    {/*        </p>*/}
                    {/*        <p>*/}
                    {/*            <strong>My proudest achievements</strong> <br/>*/}
                    {/*            I'm grateful to have so many things to be proud of, but here's some recent highlights:*/}
                    {/*            <ul className="list-inside list-disc">*/}
                    {/*                <li>*/}
                    {/*                    Co-authored this paper:&nbsp;*/}
                    {/*                    <a href="https://arxiv.org/abs/2406.08824" className="text-blue-600" target="_blank">*/}
                    {/*                        <OpenInNew fontSize="inherit" />&nbsp;LLM-Driven Robots Risk Enacting Discrimination, Violence, and Unlawful Actions </a>*/}
                    {/*                    [2024]*/}
                    {/*                </li>*/}
                    {/*                <li>Awarded King's College London Department of Informatics Computer Science with Management Prize for top performance in first year cohort [2023]</li>*/}
                    {/*            </ul>*/}
                    {/*        </p>*/}
                    {/*        <p>*/}
                    {/*            <strong>Career interests & aspirations</strong> <br/>*/}
                    {/*            Integer egestas lacus quis ullamcorper tempor. Aenean sodales molestie*/}
                    {/*            leo eget maximus. Praesent id imperdiet tortor. Duis egestas aliquam ligula*/}
                    {/*            in sagittis. Praesent in purus eros. Praesent non leo in eros convallis*/}
                    {/*            lobortis et at magna. Integer euismod accumsan eros non fringilla. Aenean at*/}
                    {/*            auctor arcu, ut cursus quam.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="w-full md:container mx-auto rounded-lg bg-pink-200 border border-2 border-gray-500 p-2 drop-shadow-lg flex flex-col gap-3">
                        <div className={"flex gap-2 pt-1"}>
                            <div className={"bg-red-500 border-2 border-red-600 rounded-full h-4 w-4"}></div>
                            <div className={"bg-amber-400 border-2 border-amber-500 rounded-full h-4 w-4"}></div>
                            <div className={"bg-green-400 border-2 border-green-500 rounded-full h-4 w-4"}></div>
                        </div>
                        <div className={"flex flex-col md:grid md:grid-rows-1 md:grid-cols-4 h-full bg-white rounded-lg p-4 border border-2 border-gray-400"}>
                            <h1 className="font-extrabold text-5xl col-span-1">About</h1>
                            <div className="col-span-3 flex flex-col gap-3">
                                <p>
                                    Based in Manchester, I'm studying for my BSc in Computer Science with Management at King's College London.
                                    Currently, I'm on my industrial placement year at Hewlett Packard Enterprise (Bristol), where I'm working as a Software Engineer Intern.
                                </p>
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
                        </div>
                    </div>
                </section>

                <section className="h-screen p-6 flex flex-col justify-center border-b border-gray-300" id="projects-section">
                    <h1 className="text-4xl font-extrabold">Projects</h1>
                </section>

                <section className="h-screen p-6 flex flex-col justify-center border-b border-gray-300" id="cv-experience-section">
                    <h1 className="text-4xl font-extrabold">CV & Experience</h1>
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default App;
