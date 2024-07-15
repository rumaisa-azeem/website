// import './styles/App.css';
import Header from './sections/header';
import Body from "./sections/body";
import Footer from "./sections/footer";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Button from "./components/button";
import React from "react";

function App() {
    return (
        <div>
            <Navbar extraStyles=""/>
            <main className=" -z-50 ">
                <Hero />
            </main>
            <Footer />
        </div>
    );
}

export default App;
