import { useState } from "react";

export default function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return (
        <button onClick={handleClick}>This is a button. It has been clicked {count} times.</button>
    );
}