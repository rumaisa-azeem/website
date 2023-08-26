import React from "react";
export default function Hero() {
    let heroHeight = window.screen.height / 2;
    return(
        <div id="hero" className="container-2xl h-screen border border-black flex">
        <h1 className="text-7xl font-extrabold border self-center">This is the hero section.</h1>
        </div>
    )
}