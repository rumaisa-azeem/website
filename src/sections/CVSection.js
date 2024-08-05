import React, {useState} from "react";
import Window from "../components/Window"
import {Download} from "@mui/icons-material";

import downloadEarth from "../assets/downloadEarth.png";
import downloadFolder from "../assets/downloadFolder.png";
import downloadFile from "../assets/downloadFile.png";

const EDUCATION_TAB  = "education-tab";
const EXPERIENCE_TAB = "experience-tab";
const SKILLS_TAB = "skills-tab";
export default function CVSection() {

    const [activeTab, setActiveTab] = useState(EXPERIENCE_TAB);

    const changeTab = (event) => setActiveTab(event.target.id);

    const Tab = ({id, tabText, className}) => {
        return (
            <div id={id}
                 onClick={changeTab}
                 className={`bg-white px-4 h-8 cursor-pointer rounded-t border-2 border-b-0 border-gray-400 
                            ${activeTab === id ? " -translate-y-0.5 drop-shadow-[1px_-2px_2px_rgba(0,0,0,0.1)]" : " -translate-y-1"} ${className}`}>
                {tabText}
            </div>
        );
    }

    return (
        <div className={"space-y-6 lg:space-y-0 lg:grid grid-rows-1 grid-cols-3 mx-auto lg:container lg:gap-6 lg:h-full lg:px-4"}>

            <div className={"lg:col-span-1 space-y-16 lg:mt-24"}>

                <div className={"pb-5 mx-auto w-fit"}>
                    <Window className={"w-72 h-48 xs:h-40 md:h-32 absolute"} bgColor={"bg-green-100"} />
                    <Window className={"w-72 translate-y-5 translate-x-2"} bgColor={"bg-cyan-100"}>
                        <h1 className="text-4xl font-extrabold">CV & Experience</h1>
                        <a href={"#"} className={"lg:hidden text-blue-600 float-right"}>
                            <Download className={"me-1"}/>
                            Download CV
                        </a>
                    </Window>
                </div>

                <Window className={"hidden lg:flex w-3/5 mx-auto"}>
                    <div className={"flex justify-between mb-2"}>
                        <img src={downloadEarth} className={"h-10 xl:h-12"} />
                        <img src={downloadFile} className={"h-6 xl:h-8 pl-4 xl:pl-6"} />
                        <img src={downloadFolder} className={"h-10 xl:h-12"} />
                    </div>
                    <a href={"#"} className={"text-blue-600"}>
                        <Download className={"me-1"}/>
                        Download CV
                    </a>
                </Window>

            </div>

            <div className={"px-4 lg:p-0 lg:col-span-2"}>
                <div className={`rounded-lg border-2 border-gray-500 p-2 drop-shadow-lg flex flex-col gap-3 bg-pink-200 lg:mt-12 lg:h-4/5`}>
                    <div className={"flex gap-2 pt-1"}>
                        <div className={"bg-red-500 border-2 border-red-600 rounded-full h-4 w-4"}></div>
                        <div className={"bg-amber-400 border-2 border-amber-500 rounded-full h-4 w-4"}></div>
                        <div className={"bg-green-400 border-2 border-green-500 rounded-full h-4 w-4"}></div>

                        <div className={"absolute flex gap-1 translate-x-20"}>
                            <Tab id={EXPERIENCE_TAB} tabText={"Experience"} className={""}/>
                            <Tab id={EDUCATION_TAB} tabText={"Education"} className={""}/>
                            {/*<Tab id={SKILLS_TAB} tabText={"Skills"} className={""}/>*/}
                        </div>
                    </div>
                    <div className={"h-full w-full bg-white rounded-lg p-4 border-2 border-gray-400 overflow-y-scroll"}>

                        <div className={`space-y-3 ${activeTab !== EDUCATION_TAB ? "hidden" : ""}`}>
                            <div>
                                <p>BSc Computer Science with Management and a Year in Industry • 1st Class Honours</p>
                                <p>King's College London [2022-2026]</p>
                                <ul className={"text-gray-500"}>
                                    <li>>> Awarded Department of Informatics Computer Science with Management Prize for best performance in first-year cohort </li>
                                </ul>
                            </div>
                            <div>
                                <p>A Level Mathematics, Further Mathematics, Computer Science, Physics • A*A*A*A*</p>
                                <p>Manchester High School for Girls [2015-2022]</p>
                                <ul className={"text-gray-500"}>
                                    <li>>> Awards: Academic Scholarship, Computer Science Prize (2022), Christine Lee Jones Prize for Leadership & Initiative (2021)</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`space-y-3 ${activeTab !== EXPERIENCE_TAB ? "hidden" : ""}`}>
                            <div>
                                <p>Software Engineer - Year in Industry • Hewlett Packard Enterprise</p>
                                <p>2024-present</p>
                                <p className={"text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis sodales ultrices. Fusce feugiat blandit metus sed auctor. Pellentesque pharetra ex quis ex pulvinar consectetur. Vivamus tempor ante eget quam porta consectetur. In consectetur ultrices nibh tincidunt finibus. Nam egestas accumsan ligula, </p>
                            </div>
                            <div>
                                <p>Research Assistant • Responsible Robotics & AI Lab, King's College London</p>
                                <p>2023-present</p>
                                <p className={"text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis sodales ultrices. Fusce feugiat blandit metus sed auctor. Pellentesque pharetra ex quis ex pulvinar consectetur. Vivamus tempor ante eget quam porta consectetur. In consectetur ultrices nibh tincidunt finibus. Nam egestas accumsan ligula, </p>
                            </div>
                            <div>
                                <p>Principal of King's Labs, a pro-bono software engineering team at King's Business Club</p>
                                <p>2023-2024</p>
                                <p className={"text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis sodales ultrices. Fusce feugiat blandit metus sed auctor. Pellentesque pharetra ex quis ex pulvinar consectetur. Vivamus tempor ante eget quam porta consectetur. In consectetur ultrices nibh tincidunt finibus. Nam egestas accumsan ligula, </p>
                            </div>
                            <div>
                                <p>Computer Science Tutor - A Level/GCSE/AP • Educate Private</p>
                                <p>2023-present</p>
                                <p className={"text-gray-500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis sodales ultrices. Fusce feugiat blandit metus sed auctor. Pellentesque pharetra ex quis ex pulvinar consectetur. Vivamus tempor ante eget quam porta consectetur. In consectetur ultrices nibh tincidunt finibus. Nam egestas accumsan ligula, </p>
                            </div>
                        </div>

                        {/*<div className={`space-y-3 ${activeTab !== SKILLS_TAB ? "hidden" : ""}`}>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>

        </div>
    );
}