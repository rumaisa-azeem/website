import React from "react";

import Window from "../components/Window";
import Badge from "../components/Badge";

import {OpenInNew} from "@mui/icons-material";

import photographyPortfolio from "../assets/photography-portfolio.png";
import portfolio from "../assets/portfolio.png";
import studentRecords from "../assets/student-records.png";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Student Records Management System",
            skills: ["Python", "Django", "Bootstrap", "JavaScript", "Jest"],
            description: "2nd Year group software engineering project",
            screenshot: studentRecords
        },
        {
            title: "Photographer Portfolio",
            link: "https://hasanats-photos.vercel.app",
            skills: ["React", "TailwindCSS", "NodeJS", "APIs"],
            description: "For a friend to show off their photos :)",
            screenshot: photographyPortfolio
        },
        {
            title: "Portfolio Website",
            link: "https://github.com/rumaisa-azeem/website",
            skills: ["React", "TailwindCSS", "NodeJS"],
            description: "Very meta",
            screenshot: portfolio
        },
        {
            title: "KindleToZotero",
            link: "https://github.com/rumaisa-azeem/kindleToZotero",
            skills: ["Python"],
            description: "A script to transfer Kindle notes to Zotero, helpful for academic reading. Very unfinished but I stand by the idea.",
        }
        // {
        //     title: "LLM Research Project",
        //     skills: ["Python", "TensorFlow", "PyTorch", "Bash", "Sphinx"],
        //     description: "description"
        // },
    ];
    return (
        <div className={"w-full lg:container mx-auto py-16"}>
            <h1 className="text-4xl font-extrabold mb-6">Projects</h1>
            <div className={"md:grid grid-cols-3 gap-4"}>
                {projects.map((project, index) =>
                    <Window className={"h-[450px]"}>
                        <a href={project.link} target={"_blank"}>
                            <div
                                style={{
                                    backgroundImage: project.screenshot ? `url(${project.screenshot})` : "linear-gradient(to bottom right, powderblue, whitesmoke)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                className={`h-3/5 w-full mb-2 border border-gray-300 transition ease-in-out rounded hover:border-2 hover:border-blue-400`}
                            >
                            </div>
                        </a>
                        <div className={"flex justify-between"}>
                            <h2 className={"font-bold"}>
                                {project.title} {project.title === "Project" ? index : ""}
                            </h2>
                            {project.link &&
                                <a className={"text-blue-500 float-right"} href={project.link} target={"_blank"}>
                                    <OpenInNew/>
                                </a>
                            }
                        </div>
                        <div className={"flex gap-1 my-2"}>
                            {project.skills.map((skill) =>
                                <Badge>{skill}</Badge>
                            )}
                        </div>
                        <p className={"text-base"}>{project.description}</p>
                    </Window>
                )}
            </div>
        </div>
    );
}