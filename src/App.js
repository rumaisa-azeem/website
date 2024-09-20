// import './styles/App.css';
import React from "react";

import Footer from "./sections/footer";
import Hero from "./sections/hero";
import AboutSection from "./sections/AboutSection";
import Navbar from "./components/navbar";
import CVSection from "./sections/CVSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {

    return (
        <div>
            <div className="fixed w-screen z-10">
                <Navbar />
            </div>
            <main className={"bg-gradient-to-br from-purple-300 to-cyan-100"}>
                <Hero />

                <section className="md:h-screen p-4 pb-24 md:pt-32 flex flex-col justify-center snap-center snap-mandatory" id="about-me-section">
                    <AboutSection/>
                </section>

                <section className="lg:h-screen pt-6 pb-24 md:pb-0 md:pt-24 snap-center snap-mandatory" id="cv-experience-section">
                    <CVSection />
                </section>

                <section className="min-h-screen p-6 flex flex-col justify-center snap-start snap-mandatory" id="projects-section">
                    <ProjectsSection />
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default App;
