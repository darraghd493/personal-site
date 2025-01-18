import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const DarkModeButton = (props: React.HTMLProps<HTMLDivElement>) => {
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="bg-yellow-" {...props}>
            <button onClick={()=> darkModeHandler()}>
                {
                    dark && <IoSunny /> || <IoMoon />
                }
            </button>
        </div>
    );
}

export default DarkModeButton;