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
            <main className="h-screen w-11/12 2xl:container mx-auto flex justify-center items-center space-x-20">
                <div id="side-col" className="basis-1/5 flex flex-col space-y-4">
                    <img src={profilePic} alt='profile picture' className="rounded-full drop-shadow-lg w-96"/>
                    <h2 className="text-4xl text-center font-bold">Rumaisa Azeem</h2>
                    <div className="px-5">
                        <p className="text-bold">London/Manchester</p>
                        <a href="mailto:rumaisa.azeem0@gmail.com"><p>rumaisa.azeem0@gmail.com</p></a>
                        <a href="https://linkedin.com/in/rumaisa-azeem"><p>linkedin.com/in/rumaisa-azeem</p></a>
                        <br/>
                        <p>BSc Computer Science with Management</p>
                    </div>

                </div>
                <div id="main-col" className="basis-2/3">
                    <h1 className="text-black text-6xl font-extrabold">About Me</h1>
                    <div className="text-black">{aboutBody}</div>
                </div>
            </main>
            <Footer />
        </div>
    )
};
