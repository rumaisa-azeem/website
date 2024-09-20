import React, {useState} from "react";
import Window from "../components/Window"
import Badge from "../components/Badge";
import {Download, OpenInNew} from "@mui/icons-material";

import downloadEarth from "../assets/downloadEarth.png";
import downloadFolder from "../assets/downloadFolder.png";
import downloadFile from "../assets/downloadFile.png";

import {ResumeCard} from "../@/components/magicui/resume-card";
import ivyAndBrambleLogo from "../assets/ivyAndBrambleLogo.jpeg";
import {motion} from "framer-motion";
import NewTabLink from "../components/NewTabLink";

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
                                            <Badge>C</Badge>
                                            <Badge>Python</Badge>
                                            <Badge>Cloud Storage</Badge>
                                        </div>
                                        <ul className={"list-disc list-inside"}>
                                            <li>Datapath team (local & cloud storage engineering)</li>
                                        </ul>
                                    </div>
                                }
                                altText={""}
                                period={"Jul 2024 - present"}
                                logoUrl={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAOVBMVEX///8Ys4j3+/qi2cU8t44Ar4Cq4M/Z8Ok3vJcAsINuxaZvy67s+PSCyKs1tIpMwJ5jx6nK6+G44dKnzkBKAAAAxElEQVR4nO3Ruw7CMBBFQUIw4PBI4P8/lgrkgsrYZAUz/Up7dDcbAAAAAAAAAAAAAAAAAAD4E9ugqmIu111A10tVzJSGgNJUF5PXfvydLEZMf2J+NiYF0Cgmz+N+deOc28SczlX3TZ1PYl7E9CKmIKYXMQUxvYgpiOlFTEFML2IKYnoRUxDTS6uYFCMmtVlmuR1Wd1vaLDMMxwCev3wckwNoFhOJGDFfIEbMF1TG3MeQ7lUxAAAAAAAAAAAAAAAAAAD8iwez5S15GO9xFAAAAABJRU5ErkJggg=="}
                            />
                            <ResumeCard
                                title={"Responsible Robotics & AI Lab, King's College London"}
                                subtitle={"Research Assistant"}
                                description={
                                    <div>
                                        <div className={"space-x-1 space-y-1 mb-1"}>
                                            <Badge>Python</Badge>
                                            <Badge>TensorFlow</Badge>
                                            <Badge>Bash</Badge>
                                            <Badge>Machine Learning</Badge>
                                            <Badge>Generative AI</Badge>
                                        </div>
                                        <ul className={"list-disc list-inside"}>
                                            <li>
                                                Co-authored paper:&nbsp;
                                                <NewTabLink href={"https://arxiv.org/abs/2406.08824"} text={"LLM-Driven Robots Risk Enacting Discrimination, Violence, and Unlawful Actions"} />
                                            </li>
                                            <li>Utilised interdisciplinary knowledge of ethical challenges in AI to engineer a robust set of prompts probing LLMs for bias in robotic decision-making settings.</li>
                                            <li>Programmed Python and Bash scripts to test LLMs with the aforementioned prompt set, paying special attention to maximizing efficiency and producing results conducive to aggregation and quantitative analysis.</li>
                                            <li>Promoted from temporary Undergraduate Research Fellow to Research Assistant for commitment and excellent quality of work produced.</li>
                                        </ul>
                                    </div>
                                }
                                altText={""}
                                period={"June 2023 - June 2024"}
                                logoUrl={"https://pbs.twimg.com/profile_images/1277994430797144064/RybtX1Wp_400x400.jpg"}
                            />
                            <ResumeCard
                                title={"King's Labs"}
                                subtitle={"Principal"}
                                description={
                                    <ul className={"list-disc list-inside"}>
                                        <li>Leading a pro-bono student software engineering team to produce industry-standard software for various professional clients. Member of the Executive Committee at King’s Business Club, the UK’s largest business society.</li>
                                        <li>Spearheading agile full-stack software development, seeing projects through from initial vision to sprints to deployment.</li>
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
                                            <li>Offering tailored one-to-one sessions for comprehensive exam preparation and programming practice</li>
                                            <li>Working with students to fit their syllabus, individual learning style, and educational goals into a detailed study plan to work through together</li>
                                            <li>Providing detailed feedback and holistic guidance that is not only subject-related, but helps students to build better study habits as a whole, propelling academic achievement and satisfaction.</li>
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
                                        <li>Awarded Christine Lee Jones Prize for Leadership & Initiative for performance as Managing Director</li>
                                        <li>4 company awards, including Company of the Year in Greater Manchester</li>
                                    </ul>
                                }
                                altText={""}
                                period={"Sep 2020 - Jul 2021"}
                                logoUrl={ivyAndBrambleLogo}
                            />
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
                                            <Badge>Frontend Web Development</Badge>
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
                                logoUrl={"https://yt3.googleusercontent.com/hGn2aIDoysSxp8epxhTpnYX34HlRjnU8Y_jipmQdaCVfexwI3Su5xwGmHvLFEbXIU0Folwd-Ag=s900-c-k-c0x00ffffff-no-rj"}
                            />
                        </TabContent>

                    </div>
                </div>
            </div>

        </div>
    );
}