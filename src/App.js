// import './styles/App.css';
import React from "react";

import Footer from "./sections/footer";
import Hero from "./sections/hero";
import AboutSection from "./sections/AboutSection";
import Navbar from "./components/navbar";
import CVSection from "./sections/CVSection";

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
                <section className="md:h-screen p-4 pb-24 md:pt-32 flex flex-col justify-center" id="about-me-section">
                    <AboutSection/>
                </section>

                <section className="md:h-screen pt-6 md:pt-24" id="cv-experience-section">
                    <CVSection />
                </section>

                <section className="h-screen p-6 flex flex-col justify-center" id="projects-section">
                    <h1 className="text-4xl font-extrabold">Projects</h1>
                </section>


            </main>
            <Footer />
        </div>
    );
}

export default App;
