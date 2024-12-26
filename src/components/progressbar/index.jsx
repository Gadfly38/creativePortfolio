import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed right-5 bottom-5 cursor-pointer w-10 h-10 bg-[#e3ff04] border-2 rounded-full flex items-center justify-center transition-all ease-in-out duration-400 ${
        isVisible ? "z-[1]" : "z-[-1]"
      }`}
    >
      <ArrowUpwardIcon />
    </div>
  );
};
export default ProgressBar;
