"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import React from "react";

const Intro = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      className="space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0"
      id="intro"
      initial={{ y: 40 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl text-neon font-fira">Hi, my name is</p>
      <h1 className="text-5xl font-extrabold text-text md:text-8xl">
        Tarun Upadhyay
      </h1>
      <h2 className="text-4xl text-textDark md:text-5xl">
        I build amazing websites & web-apps!
      </h2>
      <p className="w-4/5 md:w-3/5 text-textDark">
        I am a <span className="text-neon">FullStack web developer</span>,
        Having experience in frontend libraries like{" "}
        <span className="text-neon">React</span>,{" "}
        <span className="text-neon">HTML</span>,{" "}
        <span className="text-neon">CSS</span>,{" "}
        <span className="text-neon">JavaScript</span> and in Backend{" "}
        <span className="text-neon">Nodejs</span>,
        <span className="text-neon"> Expressjs </span>. Capable of writing
        Production Ready Code for website and Single Page web application.
        Focused on building products that people love to use. Aim to start a
        career as a web developer and make a significant contribution to an
        organization
      </p>
      <div className="sm:flex-col space-x-3">
        <Link
          activeClass="active"
          duration={1000}
          href="contact"
          offset={-100}
          smooth={true}
          spy={true}
          to="contact"
        >
          <button className="py-2 px-5 !mt-10 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded-lg">
            Reach out to me / Hire Me!
          </button>
        </Link>
        <Link
          activeClass="active"
          duration={500}
         
          offset={-100}
          smooth={true}
          spy={true}
          to="projects"
        >
          <button className="py-2 px-5 !mt-10 text-darkerBlue bg-neon border-neon hover:bg-transparent duration-100 hover:text-neon border-2 rounded-lg">
            Check out my work!
          </button>
        </Link>
        <a href="#skil">
          <button className="py-2 px-5 !mt-10 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded-lg">
            Resume
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Intro;
