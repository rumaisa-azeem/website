import Footer from "./sections/footer";
import Navbar from "./components/navbar";
import profilePic from "./assets/profilePic.png";
import React from "react";

export default function AboutMe() {
    const aboutBody = (
        <>
            <br/>
            <p>As a Principal at King's Labs, I lead a team of software engineers to develop industry-level software solutions for innovative companies. I am also a research assistant at King's College London, where I work on projects related to machine learning and generative AI using Python, Java, and other programming languages. </p>
            <br/>
            <p>In addition, I am a Computer Science Tutor, offering tailored one-to-one sessions for students up to A Level or equivalent, covering topics such as programming, data structures, algorithms, and web development. I have a passion for teaching and mentoring, and I have helped many students achieve their academic goals and improve their coding skills. </p>
            <br/>
            <p>I am currently pursuing a BSc in Computer Science with Management and a Year in Industry at King's College London. I have a stellar academic record, having won several awards and scholarships, such as the Computer Science with Management Prize 22-23, the Merlyn Lowther Scholarship Award, and the Christine Lee Jones Prize for Leadership and Initiative. </p>
            <br/>
            <p>I am looking for industrial placement and internship opportunities that will allow me to apply my knowledge and skills to real-world problems and challenges.</p>
        </>
    );

    return (
        <div>
            <Navbar backgroundStyle="bg-slate-300"/>
            <main className="min-h-screen relative w-11/12 2xl:container mx-auto flex flex-col md:justify-center md:-translate-y-16 -z-10 border-black">
                <div className="p-5 md:p-0 flex-col flex md:flex-row align-top md:mt-20 lg:mt-0">
                    <h2 className="md:hidden text-black text-6xl font-extrabold pb-5">About Me</h2>
                    <div id="side-col" className="basis-1/4 border-t border-t-slate-300 border-b border-b-slate-300 py-5
                     md:py-0 md:border-none flex items-center space-x-4 md:mr-20 md:space-x-0 md:flex-col md:space-y-4 ">
                        <div className="xs:basis-1/4">
                            <img src={profilePic} alt='profile picture' className="rounded-full drop-shadow-md"/>
                        </div>
                        <div className="">
                            <h2 className="text-base font-bold">Rumaisa Azeem</h2>
                            <div className="">
                                <p className="text-bold">London/Manchester</p>
                                <p>BSc Computer Science with Management</p>
                                <a href="mailto:rumaisa.azeem0@gmail.com"><p>rumaisa.azeem0@gmail.com</p></a>
                                <a href="https://linkedin.com/in/rumaisa-azeem"><p>linkedin.com/in/rumaisa-azeem</p></a>
                            </div>
                        </div>
                    </div>

                    <div id="main-col" className="basis-3/4 ">
                        <h1 className="hidden md:block text-black text-6xl font-extrabold">About Me</h1>
                        <div className="text-black">{aboutBody}</div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
};
