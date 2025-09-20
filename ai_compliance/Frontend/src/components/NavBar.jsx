import React from "react";
import { useState, useEffect } from "react";

function NavBar(props) {
  const [button, setButton] = useState(false);
  function scrollHandler() {
    console.log(window.scrollY, "hello");
    if (window.scrollY > 10) {
      setButton(true);
    }
    if (window.scrollY < 10) {
      setButton(false);
    }
  }
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleClick = () => {
    console.log(window.scrollX, window.scrollY, "hello");
    console.log("hello");
    window.scrollTo(0, 0);
  };

  return (
    <nav className="h-14 w-auto  flex flex-col bg-white bg-opacity-5 backdrop-blur-lg rounded drop-shadow-lg justify-center  pt-4 font-semibold  rounded-3xl mt-2  border-b-2  ">
      <h1 className="font-thin text-2xl text-pretty mb-4  p-2 text-green-500 bg-clip-text">
        IsoCheckAI
      </h1>
      <div
        onClick={handleClick}
        className={`${
          button ? "fixed" : "hidden"
        } h-10 w-10 rounded-full bg-gradient-to-r from-[#5c33ff] to-[#03f9b3]   bottom-0 m-4  right-3 flex  items-center pl-2  `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
          />
        </svg>
      </div>
    </nav>
  );
}

export default NavBar;
