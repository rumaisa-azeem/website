import {OpenInNew} from "@mui/icons-material";
import React from "react";

export default function NewTabLink({href, text}) {
    return (
        <a href={href} className="text-blue-600" target="_blank">
            <span className={"relative after:bg-blue-600 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"}>
                {text}
            </span>
            <OpenInNew fontSize="inherit" className={"-translate-y-0.5 translate-x-0.5"}/>
        </a>
    );
}