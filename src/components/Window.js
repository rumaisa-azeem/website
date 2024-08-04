import React from "react";

export default function Window({children, className}) {
    return (
        <div className={"rounded-lg bg-pink-200 border-2 border-gray-500 p-2 drop-shadow-lg flex flex-col gap-3 " + className }>
            <div className={"flex gap-2 pt-1"}>
                <div className={"bg-red-500 border-2 border-red-600 rounded-full h-4 w-4"}></div>
                <div className={"bg-amber-400 border-2 border-amber-500 rounded-full h-4 w-4"}></div>
                <div className={"bg-green-400 border-2 border-green-500 rounded-full h-4 w-4"}></div>
            </div>
            <div className={"h-full w-full bg-white rounded-lg p-4 border-2 border-gray-400"}>
                {children}
            </div>
        </div>
    );
}