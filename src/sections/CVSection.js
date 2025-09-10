import React, {useState} from "react";
import Window from "../components/Window"
import Badge from "../components/Badge";
import {Download, ArrowForward} from "@mui/icons-material";
import {ResumeCard} from "../@/components/magicui/resume-card";
import {motion, useAnimate} from "motion/react";

import downloadEarth from "../assets/downloadEarth.png";
import downloadFolder from "../assets/downloadFolder.png";
import downloadFile from "../assets/downloadFile.png";
import ivyAndBrambleLogo from "../assets/ivyAndBrambleLogo.jpeg";
import mhsgLogo from "../assets/mhsg-logo.png";
import cv from "../assets/cv.pdf"

import NewTabLink from "../components/NewTabLink";

const cvFilename = "Rumaisa Azeem CV.pdf";

export default function CVSection() {

    const EDUCATION_TAB  = "education-tab";
    const EXPERIENCE_TAB = "experience-tab";
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
    const TabContent = ({tabId, children}) => {
        return (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: activeTab === tabId ? 1 : 0,
                    height: activeTab === tabId ? "auto" : 0,
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className={`space-y-3 ${activeTab !== tabId ? "hidden" : ""}`}
            >
                {children}
            </motion.div>
        )
    }

    const [scope, animate] = useAnimate()
    const animateDownload = () => {
        const images = scope.current.children
        animate([
            [images[1], { rotate: [-180, 0], opacity: [0, 1], scale: [0, 1]}, {duration: 0.5}],
            [images[1], { x: [-50, 70]}, {duration: 1}],
            [images[1], { opacity: [1, 0], scale: [1, 0]}, {duration: 0.5}],
        ])
    }

    return (
        <div className={"space-y-6 lg:space-y-0 lg:grid grid-rows-1 grid-cols-3 mx-auto lg:container lg:gap-6 lg:h-full lg:px-4"}>

            <div className={"lg:col-span-1 space-y-16 lg:mt-24"}>

                <div className={"pb-5 mx-auto w-fit"}>
                    <Window className={"w-72 h-48 xs:h-40 md:h-32 absolute"} bgColor={"bg-green-100"} />
                    <Window className={"w-72 translate-y-5 translate-x-2"} bgColor={"bg-cyan-100"}>
                        <h1 className="text-4xl font-extrabold">CV & Experience</h1>
                        <a href={cv} download={cvFilename} className={"lg:hidden text-blue-600 float-right"}>
                            <Download className={"me-1"}/>
                            Download CV
                        </a>
                    </Window>
                </div>

                {/* download cv window */}
                <Window className={"hidden lg:flex w-3/5 mx-auto"}>
                    <div className={"flex justify-between mb-2"} ref={scope}>
                        <img src={downloadEarth} className={"h-10 xl:h-12"} />
                        <img src={downloadFile} className={"h-6 xl:h-8 -translate-x-10 opacity-0"} />
                        <img src={downloadFolder} className={"h-10 xl:h-12"} />
                    </div>
                    <a
                        href={cv} download={cvFilename}
                        className={"text-blue-600 group"}
                        onMouseOver={animateDownload}
                    >
                        <Download className={"me-1"}/>
                        <span className={"relative after:bg-blue-600 after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300"}>Download CV</span>
                    </a>
                </Window>

            </div>

            {/* experience/education tabs */}
            <div className={"px-4 lg:p-0 lg:col-span-2"}>
                <div className={`rounded-lg border-2 border-gray-500 p-2 drop-shadow-lg flex flex-col gap-3 bg-pink-200 lg:mt-12 lg:h-4/5`}>
                    <div className={"flex gap-2 pt-1"}>
                        <div className={"bg-red-500 border-2 border-red-600 rounded-full h-4 w-4"}></div>
                        <div className={"bg-amber-400 border-2 border-amber-500 rounded-full h-4 w-4"}></div>
                        <div className={"bg-green-400 border-2 border-green-500 rounded-full h-4 w-4"}></div>

                        <div className={"absolute flex gap-1 translate-x-20"}>
                            <Tab id={EXPERIENCE_TAB} tabText={"Experience"} className={""}/>
                            <Tab id={EDUCATION_TAB} tabText={"Education"} className={""}/>
                        </div>
                    </div>
                    <div className={"h-full w-full bg-white rounded-lg p-4 border-2 border-gray-400 overflow-y-scroll"}>

                        <TabContent tabId={EXPERIENCE_TAB}>
                            <ResumeCard
                                title={"Hewlett Packard Enterprise "}
                                subtitle={"Software Engineer - Year in Industry"}
                                description={
                                    <div>
                                        <div className={"space-x-1 space-y-1 mb-1"}>
                                            <Badge>C++</Badge>
                                            <Badge>Python</Badge>
                                            <Badge>Docker</Badge>
                                            <Badge>Bash</Badge>
                                            <Badge>TypeScript</Badge>
                                            <Badge>React</Badge>
                                            <Badge>Redux</Badge>
                                            <Badge>Flask</Badge>
                                            <Badge>Cloud Storage</Badge>
                                        </div>
                                        <ul className={"list-disc list-inside"}>
                                            <li>Independently investigated backup application start time – developed a lightweight simulation of the
                                                app's deduplication algorithm reducing testing time by 97%, presented findings to seniors to inform further development, and documented
                                                actionable insights for external teams to resolve active customer support cases.</li>
                                            <li>Developed features for and maintained an internal performance-testing web application,
                                                 reducing hours of manual effort required by 30 other engineers and improving accuracy of pre-release testing.</li>
                                            <li>Architected and implemented cloud storage command line support tools for AWS, GCP, and Azure, shipped on HPE’s
                                                latest backup appliance.</li>
                                            <li>Created a novel data profiling method with security and customer profiling applications, winning HPE’s Bristol Hack
                                                Days and subsequently co-authoring intellectual property disclosures to be submitted as patents.</li>
                                            <li>Led the team’s transition to a Docker-based development environment, delivering automated setup scripts and
                                                onboarding documentation.</li>
                                            <li>Maintained GitHub Actions CICD pipelines to automate building and testing workflows, removing hours of weekly
                                                manual testing.</li>
                                            <li>Awarded ✨‘Intern of the Quarter for Business Impact’✨and retained as a part-time intern  after the placement year for
                                                standout technical contributions.</li>
                                        </ul>
                                    </div>
                                }
                                altText={""}
                                period={"Jul 2024 - present"}
                                logoUrl={"https://brandlogo.org/wp-content/uploads/2025/06/Hewlett-Packard-Enterprise-HPE-Logo-2025.png.webp"}
                            />
                            <ResumeCard
                                title={"Responsible Robotics & AI Lab, King's College London"}
                                subtitle={"Research Assistant"}
                                description={
                                    <div>
                                        <div className={"space-x-1 space-y-1 mb-1"}>
                                            <Badge>Python</Badge>
                                            <Badge>PyTorch</Badge>
                                            <Badge>HuggingFace Transformers</Badge>
                                            <Badge>Bash</Badge>
                                            <Badge>Large Language Models</Badge>
                                            <Badge>HRI</Badge>
                                        </div>
                                        <ul className={"list-disc list-inside"}>
                                            <li>
                                                Co-authored paper:&nbsp;
                                                <NewTabLink href={"https://arxiv.org/abs/2406.08824"} text={"LLM-Driven Robots Risk Enacting Discrimination, Violence, and Unlawful Actions"} />
                                            </li>
                                            <li>Utilised interdisciplinary knowledge of ethical challenges in AI to engineer a robust set of prompts probing LLMs for bias in robotic decision-making settings.</li>
                                            <li>Programmed Python and Bash scripts to test LLMs with the aforementioned prompt set, paying special attention to maximizing efficiency and producing results conducive to aggregation and quantitative analysis.</li>
                                            <li>Promoted from temporary Undergraduate Research Fellow to Research Assistant for commitment and excellent quality of work.</li>
                                        </ul>
                                    </div>
                                }
                                altText={""}
                                period={"Jun 2023 - Dec 2024"}
                                logoUrl={"https://pbs.twimg.com/profile_images/1277994430797144064/RybtX1Wp_400x400.jpg"}
                            />
                            <ResumeCard
                                title={"King's Labs"}
                                subtitle={"Principal"}
                                description={
                                    <ul className={"list-disc list-inside"}>
                                        <li>Led a pro-bono student software engineering team to produce industry-standard software for various professional clients. Member of the Executive Committee at King’s Business Club, the UK’s largest business society.</li>
                                        <li>Directed agile full-stack software development, managing projects from client consultations to deployment.</li>
                                        <li>Oversaw all business operations, including software engineering, marketing, corporate relations, and business strategy.</li>
                                        <li>Demonstrated excellent interpersonal skills by fostering an inclusive, productive culture in a team of 9 software engineers, as well as developing valuable client relations through networking.</li>
                                    </ul>
                                }
                                altText={""}
                                period={"Aug 2023 - May 2024"}
                                logoUrl={"https://media.licdn.com/dms/image/C560BAQHL0IvzH-dxYA/company-logo_200_200/0/1658232092933/king_s_labs_logo?e=2147483647&v=beta&t=K05_RDipqUKHpicosi5hfQvF5ACMmBERJxw6IAJ3sLo"}
                            />
                            <ResumeCard
                                title={"Educate Private"}
                                subtitle={"Computer Science Tutor - GCSE/A Level/AP"}
                                description={
                                    <div>
                                        <div className={"space-x-1 space-y-1 mb-1"}>
                                            <Badge>Python</Badge>
                                            <Badge>Java</Badge>
                                        </div>
                                        <ul className={"list-disc list-inside"}>
                                            <li>Demonstrated thorough understanding of computer science theory by tutoring students for exams in GCSE/A-Level/AP computer science, including Python and Java programming.</li>
                                            <li>Developed tailored, time-paced study plans, providing detailed feedback and guidance to help students not only pass their exams but build better study habits.</li>
                                        </ul>
                                    </div>
                                }
                                altText={""}
                                period={"Apr 2023 - May 2024"}
                                logoUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ij7pNpDVTH1pQFnXmdoZzUYgIpNaRxL0mA&s"}
                            />
                            <ResumeCard
                                title={"Ivy & Bramble"}
                                subtitle={"Co-Managing Director & Technology Director"}
                                description={
                                    <ul className={"list-disc list-inside"}>
                                        <li>Developed company website to advertise the business and mange orders, which led to widespread recognition for consistency of branding and ease of use for the customer.</li>
                                        <li>Implemented digital management solutions to boost the team’s productivity and organisation, which directly translated to an increase in profit.</li>
                                        <li>Awarded Christine Lee Jones Prize for Leadership & Initiative for performance as Managing Director</li>
                                        <li>Additionally earned 4 company awards, including Company of the Year in Greater Manchester</li>
                                    </ul>
                                }
                                altText={""}
                                period={"Sep 2020 - Jul 2021"}
                                logoUrl={ivyAndBrambleLogo}
                            />
                            <div className={"pt-2"}>
                                <a onClick={() => setActiveTab(EDUCATION_TAB)} className={"text-blue-600 cursor-pointer flex items-center w-fit gap-1 mx-auto"}>
                                    <span>See Education</span>
                                    <ArrowForward fontSize="inherit" />
                                </a>
                            </div>
                        </TabContent>

                        <TabContent tabId={EDUCATION_TAB}>
                            <ResumeCard
                                title={"King's College London"}
                                subtitle={"BSc Computer Science with Management and a Year in Industry - 1st Class Honours"}
                                description={
                                    <div>
                                        <div className={"space-x-1 space-y-1 mb-1"}>
                                            <Badge>Python</Badge>
                                            <Badge>Java</Badge>
                                            <Badge>C++</Badge>
                                            <Badge>Scala</Badge>
                                            <Badge>SQL</Badge>
                                            <Badge>Django</Badge>
                                        </div>
                                        <ul className={"list-disc list-inside"}>
                                            <li>2x awarded Department of Informatics Computer Science with Management Prize for best results in cohort (22-23 & 23-24)</li>
                                            <li>Undergraduate Research Fellow</li>
                                        </ul>
                                    </div>
                                }
                                altText={""}
                                period={"2022-2026"}
                                logoUrl={"https://pbs.twimg.com/profile_images/1277994430797144064/RybtX1Wp_400x400.jpg"}
                            />
                            <ResumeCard
                                title={"Manchester High School for Girls"}
                                subtitle={"A Level - A*A*A*A* / GCSEs - All 9s"}
                                description={
                                    <ul className={"list-disc list-inside"}>
                                        <li>A Level subjects: Mathematics, Further Mathematics, Computer Science, Physics</li>
                                        <li>Awards: School Computer Science Award (2022, 2020), Christine Lee Jones Prize for Leadership & Initiative (2022), Merlyn Lowther Scholarship Award (2020), Academic Scholarship (2015-2022)</li>
                                        <li>CEM IBE baseline aptitude assessment score: 99th percentile nationally (2020)</li>
                                    </ul>
                                }
                                altText={""}
                                period={"2015-2022"}
                                logoUrl={mhsgLogo}
                            />
                        </TabContent>

                    </div>
                </div>
            </div>

        </div>
    );
}