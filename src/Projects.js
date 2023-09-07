import Footer from "./sections/footer";
import Navbar from "./components/navbar";
import React, {useEffect, useState} from "react";
import projectData from "./assets/projectData.json"

export default function Projects() {
    const projectCards = projectData.map(
        project =>
            <ProjectCard name={project.name} description={project.description} image={project.image}/>
    )
    return (
        <main>
            <Navbar backgroundStyle="bg-slate-300"/>
            <div className="h-screen flex justify-center">
                <div className="self-center">
                    <h1 className="text-black text-6xl font-extrabold align-middle">Projects</h1>
                    <p className="text-black text-center">Coming soon...</p>
                </div>
            </div>
            <Footer />
        </main>
    )
};

function ProjectCard({ name, image, description}) {
    return (
        <div className="bg-slate-100 drop-shadow flex flex-col space-y-5 basis-1/3 p-10 hover:drop-shadow-xl">
            <h2 className="text-black text-3xl font-bold">{name}</h2>
            <img src={image} />
            <p>{description}</p>
        </div>
    )
}