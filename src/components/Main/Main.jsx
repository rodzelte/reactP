import React from "react";
import { motion } from "framer-motion";

const GlitchLetter = ({ letter }) => {
  const shakeAnimation = {
    shake: {
      x: [0, -5, 5, 0],
      y: [0, 5, -5, 0],
      opacity: [1, 0.8, 0.8, 1],
      transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" },
    },
    shakeMore: {
      x: [0, -10, 10, 0],
      y: [0, 10, -10, 0],
      opacity: [1, 0.6, 0.6, 1],
      transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block", position: "relative" }}
      variants={shakeAnimation}
      animate="shake"
      whileHover="shakeMore"
    >
      {letter}
    </motion.span>
  );
};

const Main = ({ theme }) => {
  const themeClass =
    theme === "light"
      ? "bg-bglight text-primarydark"
      : "bg-bgdark text-primarylight";
  return (
    <>
      <section
        id="section1"
        className={`hidden justify-center lg:flex xl:flex items-center ${themeClass}`}
      >
          <div class="mx-auto col-sm-7 col-md-7 col-9 xl:mx-96 sm:min-w-24 sm:min-h-24 md:min-w-24 md:min-h-24 lg:min-w-24 lg:min-h-24 xl:min-w-24 xl:min-h-24 sm:text-xs md:text-xs lg:text-xs xl:text-base">
            <div className="timeline">
              <div className="bullet min-h-64"></div>
              <a
                href="#work"
                aria-label="Go to next section"
                className="scroll-bottom scale-hover"
              >
                <br />
                <span className="hidden sm:block">SCROLL</span>
              </a>
            </div>
            <div>
              <small id="first-element" className="hidden sm:block section-title mb-3 pb-3">
                Start /&gt;
              </small>
            </div>
            <br />
            <div>
              <h1 className=" hidden sm:block">
                Hi, my name is{" "}
                <strong
                  className={`${
                    theme === "light"
                      ? "text-quaternarydark"
                      : "text-quaternarylight"
                  }`}
                >
                  Rodzel John Te
                </strong>
                <br />
              </h1>
            </div>
            <br />
            <div>
              <h1 className={`hidden sm:block subtitle mt-0 whitespace-nowrap ${themeClass}`}>
                i <em className="serif font-normal">design</em> and{" "}
                <span className="mono font-bold">
                  {["d", "e", "v", "e", "l", "o", "p"].map((letter, index) => (
                    <GlitchLetter key={index} letter={letter} />
                  ))}
                </span>
              </h1>
            </div>
            <br />
            <div>
              <p
                className={`hidden sm:block color-gray mt-2 pb-3 ${
                  theme === "light"
                    ? "text-secondarydark"
                    : "text-secondarylight"
                }`}
              >
                Let me show You...
              </p>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Main;
