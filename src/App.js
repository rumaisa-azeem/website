// import './styles/App.css';
import React from "react";

import Footer from "./sections/footer";
import Hero from "./sections/hero";
import AboutSection from "./sections/AboutSection";
import Navbar from "./components/navbar";

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
                    <AboutSection/>
                </section>

                <section className="h-screen p-6 flex flex-col justify-center border-b border-gray-300" id="cv-experience-section">
                    <h1 className="text-4xl font-extrabold">CV & Experience</h1>
                </section>

                <section className="h-screen p-6 flex flex-col justify-center border-b border-gray-300" id="projects-section">
                    <h1 className="text-4xl font-extrabold">Projects</h1>
                </section>


            </main>
            <Footer />
        </div>
    );
}

export default App;
