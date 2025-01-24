import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const TopButton = (props: React.HTMLProps<HTMLDivElement>) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div {...props}>
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: !isAtTop ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        onClick={()=> {
          window.scrollTo(0, 0);
        }}
      >
        <FaChevronUp />
      </motion.button>
    </div>
  );
}

export default TopButton;