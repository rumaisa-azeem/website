// import './styles/App.css';
import React from "react";

import Footer from "./sections/footer";
import Hero from "./sections/hero";
import AboutSection from "./sections/AboutSection";
import Navbar from "./components/navbar";
import CVSection from "./sections/CVSection";

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

                <section className="md:h-screen pt-6 md:pt-24 snap-center snap-mandatory" id="cv-experience-section">
                    <CVSection />
                </section>

                <section className="h-screen p-6 flex flex-col justify-center snap-center snap-mandatory" id="projects-section">
                    <h1 className="text-4xl font-extrabold">Projects</h1>
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default App;
