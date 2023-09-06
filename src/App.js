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
            <main className="">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}

export default App;
