import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const DarkModeButton = (props: React.HTMLProps<HTMLDivElement>) => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <div {...props}>
      <button onClick={()=> darkModeHandler()}>
        {
          dark && <IoSunny /> || <IoMoon />
        }  
      </button>
    </div>
  );
}

export default DarkModeButton;