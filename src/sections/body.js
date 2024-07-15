import Button from "../components/button.js";
import React from "react";
import Hero from "./hero";

export default function Body() {
    return (
            <div className="">
                <Hero />
                <div id="intro" className="">
                    <p>Window width: {window.innerWidth}</p>
                </div>
                <Button/>
                <div className="h-screen" />
            </div>

    )
}