import React, {useState} from "react";
import Window from "../components/Window"
import {Download} from "@mui/icons-material";

import downloadEarth from "../assets/downloadEarth.png";
import downloadFolder from "../assets/downloadFolder.png";
import downloadFile from "../assets/downloadFile.png";

import {ResumeCard} from "../@/components/magicui/resume-card";
import ivyAndBrambleLogo from "../assets/ivyAndBrambleLogo.jpeg";
import {motion} from "framer-motion";

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

    const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis sodales ultrices. Fusce feugiat blandit metus sed auctor. Pellentesque pharetra ex quis ex pulvinar consectetur. Vivamus tempor ante eget quam porta consectetur. In consectetur ultrices nibh tincidunt finibus. Nam egestas accumsan ligula, ";

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

                        <TabContent tabId={EDUCATION_TAB}>
                            <ResumeCard
                                title={"King's College London"}
                                subtitle={"BSc Computer Science with Management and a Year in Industry - 1st Class Honours"}
                                description={placeholderText}
                                altText={""}
                                period={"2022-2026"}
                                logoUrl={"https://pbs.twimg.com/profile_images/1277994430797144064/RybtX1Wp_400x400.jpg"}
                            />
                            <ResumeCard
                                title={"Manchester High School for Girls Sixth Form"}
                                subtitle={"A Level Mathematics, Further Mathematics, Computer Science, Physics - A*A*A*A*"}
                                description={placeholderText}
                                altText={""}
                                period={"2020-2022"}
                                logoUrl={"https://yt3.googleusercontent.com/hGn2aIDoysSxp8epxhTpnYX34HlRjnU8Y_jipmQdaCVfexwI3Su5xwGmHvLFEbXIU0Folwd-Ag=s900-c-k-c0x00ffffff-no-rj"}
                            />
                            <ResumeCard
                                title={"Manchester High School for Girls"}
                                subtitle={"GCSEs - All 9s"}
                                description={placeholderText}
                                altText={""}
                                period={"2015-2020"}
                                logoUrl={"https://yt3.googleusercontent.com/hGn2aIDoysSxp8epxhTpnYX34HlRjnU8Y_jipmQdaCVfexwI3Su5xwGmHvLFEbXIU0Folwd-Ag=s900-c-k-c0x00ffffff-no-rj"}
                            />
                        </TabContent>

                        <TabContent tabId={EXPERIENCE_TAB}>
                            <ResumeCard
                                title={"Hewlett Packard Enterprise"}
                                subtitle={"Software Engineer - Year in Industry"}
                                description={placeholderText}
                                altText={""}
                                period={"Jul 2024 - present"}
                                logoUrl={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAOVBMVEX///8Ys4j3+/qi2cU8t44Ar4Cq4M/Z8Ok3vJcAsINuxaZvy67s+PSCyKs1tIpMwJ5jx6nK6+G44dKnzkBKAAAAxElEQVR4nO3Ruw7CMBBFQUIw4PBI4P8/lgrkgsrYZAUz/Up7dDcbAAAAAAAAAAAAAAAAAAD4E9ugqmIu111A10tVzJSGgNJUF5PXfvydLEZMf2J+NiYF0Cgmz+N+deOc28SczlX3TZ1PYl7E9CKmIKYXMQUxvYgpiOlFTEFML2IKYnoRUxDTS6uYFCMmtVlmuR1Wd1vaLDMMxwCev3wckwNoFhOJGDFfIEbMF1TG3MeQ7lUxAAAAAAAAAAAAAAAAAAD8iwez5S15GO9xFAAAAABJRU5ErkJggg=="}
                            />
                            <ResumeCard
                                title={"Responsible Robotics & AI Lab, King's College London"}
                                subtitle={"Research Assistant"}
                                description={placeholderText}
                                altText={""}
                                period={"Jul 2023 - present"}
                                logoUrl={"https://pbs.twimg.com/profile_images/1277994430797144064/RybtX1Wp_400x400.jpg"}
                            />
                            <ResumeCard
                                title={"King's Labs"}
                                subtitle={"Principal"}
                                description={placeholderText}
                                altText={""}
                                period={"Aug 2023 - Jun 2024"}
                                logoUrl={"https://media.licdn.com/dms/image/C560BAQHL0IvzH-dxYA/company-logo_200_200/0/1658232092933/king_s_labs_logo?e=2147483647&v=beta&t=K05_RDipqUKHpicosi5hfQvF5ACMmBERJxw6IAJ3sLo"}
                            />
                            <ResumeCard
                                title={"Educate Private"}
                                subtitle={"Computer Science Tutor - GCSE/A Level/AP"}
                                description={placeholderText}
                                altText={""}
                                period={"Apr 2023 - present"}
                                logoUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ij7pNpDVTH1pQFnXmdoZzUYgIpNaRxL0mA&s"}
                            />
                            <ResumeCard
                                title={"Ivy & Bramble"}
                                subtitle={"Co-Managing Director"}
                                description={placeholderText}
                                altText={""}
                                period={"Sep 2020 - Jul 2021"}
                                logoUrl={ivyAndBrambleLogo}
                            />
                        </TabContent>

                    </div>
                </div>
            </div>

        </div>
    );
}