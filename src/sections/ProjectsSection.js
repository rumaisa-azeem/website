import React from "react";

import Window from "../components/Window";
import Badge from "../components/Badge";

import {OpenInNew} from "@mui/icons-material";

import photographyPortfolio from "../assets/photography-portfolio.png";
import portfolio from "../assets/portfolio.png";
import studentRecords from "../assets/student-records.png";
import sudokuSolver from "../assets/sudokuSolver.png"
import philsocTalk from "../assets/philsoc-talk.jpg";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Student Records Management System",
            skills: ["Python", "Django", "Bootstrap", "JavaScript", "Jest"],
            description: "2nd Year full-stack group software engineering project for a client - KCL Informatics Admin Department",
            screenshot: studentRecords
        },
        {
            title: "Photographer Portfolio",
            link: "https://hasanats-photos.vercel.app",
            skills: ["React", "TailwindCSS", "Flickr API"],
            description: "For a friend to show off their photos :)",
            screenshot: photographyPortfolio
        },
        {
            title: "Portfolio Website",
            link: "https://github.com/rumaisa-azeem/website",
            skills: ["React", "TailwindCSS"],
            description: "Very meta",
            screenshot: portfolio
        },
        {
            title: "Backtracking Sudoku Solver Algorithm",
            link: "https://github.com/rumaisa-azeem/sudokuSolver",
            skills: ["Python", "JavaScript"],
            description: "A-Level programming project (graded 96%): a web app to play sudoku, with a back-end algorithm that can check and solve any sudoku grid",
            screenshot: sudokuSolver
        },
        {
            title: "KindleToZotero",
            link: "https://github.com/rumaisa-azeem/kindleToZotero",
            skills: ["Python"],
            description: "A script to transfer Kindle notes to Zotero, helpful for academic reading. Unfinished but I stand by the idea.",
        },
        {
            title: "PhilSoc Talk - AI & Neuroscience",
            link: "https://photos.google.com/share/AF1QipPNZUi87tJWdqAlL244WBWqKdaQCq_v30T7XUZgrHw-aM6X686B62AAI6U2FjycyQ?key=Z1VBMWJuTHE2OF85MGpINmhWQ2R6VDR6ZnpHTDlR",
            skills: [],
            description: "Presented my findings about the parallels between AI & neuroscience for an hour to 100ish students",
            screenshot: philsocTalk
        }
    ];
    return (
        <div className={"w-full lg:container mx-auto md:pt-16 pb-16"}>
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold">Projects</h1>
                <p>Various tech-related endeavours, coding and otherwise.</p>
            </div>
            <div className={"space-y-4 md:space-y-0 md:grid grid-cols-2 lg:grid-cols-3 gap-4"}>
                {projects.map((project, index) =>
                    <Window className={"h-[450px]"}>
                        <a href={project.link} target={"_blank"}>
                            <div
                                style={{
                                    backgroundImage: project.screenshot ? `url(${project.screenshot})` : "linear-gradient(to bottom right, powderblue, whitesmoke)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                className={`h-3/5 w-full mb-2 border border-gray-300 transition ease-in-out rounded ${project.link && "hover:border-2 hover:border-blue-400"}`}
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
                        <div className={"flex flex-wrap gap-1 my-2"}>
                            {project.skills.map((skill) =>
                                <Badge>{skill}</Badge>
                            )}
                            {project.title === "PhilSoc Talk - AI & Neuroscience" &&
                                <Badge>
                                    <span className={"line-through"}>Yapping</span>&nbsp;
                                    <span>Public Speaking</span>
                                </Badge>
                            }
                        </div>
                        <p className={"text-base"}>{project.description}</p>
                    </Window>
                )}
            </div>
        </div>
    );
}