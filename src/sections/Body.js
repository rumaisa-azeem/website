import Button from "../components/Button.js";
import React from "react";
import Hero from "../components/hero";

export default function Body() {
    return (
        <div className="">
            <Hero />
            <p>Window width: {window.innerWidth}</p>
            <Button/>
        </div>
    )
}