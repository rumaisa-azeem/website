// import './styles/App.css';
import Footer from "./sections/footer";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import React from "react";

// TODO: snap scrolling between sections
// TODO: compress profile pic

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />

                <section className="h-screen p-6 flex flex-col justify-center border-b border-gray-300" id="about-me-section">
                    <h1 className="text-4xl font-extrabold">About Me</h1>
                </section>

                <section className="h-screen p-6 flex flex-col justify-center border-b border-gray-300" id="projects-section">
                    <h1 className="text-4xl font-extrabold">Projects</h1>
                </section>

                <section className="h-screen p-6 flex flex-col justify-center border-b border-gray-300" id="cv-experience-section">
                    <h1 className="text-4xl font-extrabold">CV & Experience</h1>
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default App;
