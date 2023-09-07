// import './styles/App.css';
import Header from './sections/header';
import Body from "./sections/body";
import Footer from "./sections/footer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Button from "./components/button";
import React from "react";

function App() {
    return (
        <div>
            <Navbar/>
            <main className="relative -z-50 -translate-y-20">
                <Hero />
                <div id="intro" className="">
                    <p>Window width: {window.innerWidth}</p>
                </div>
                <Button/>
                <div className="h-screen" />
            </main>
            <Footer />
        </div>
    );
}

export default App;
