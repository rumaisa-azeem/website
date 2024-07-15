import React from "react";

export default function IconButton({href, imgSrc}) {
    return (
        <a href={href}><img src={imgSrc} className="h-10 hover:translate-y-1 transition ease-in-out"/></a>
    )
}