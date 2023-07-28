"use client";
import Link from "next/link";
import logo from ''
import React, { useEffect, useState } from "react";
import Logo from "../utils/Icons/Logo";

const Header = () => {
  const [handleShow, setHandleShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = () => {
        if (window.scrollY > 80) {
          setHandleShow(true);
        } else setHandleShow(false);
      };
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }
  }, []);
  return (
    <nav
      className={`px-8 md:px-24 fixed md:py-4 py-6 bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full max-w-[100vw] top-0 z-20 ${
        handleShow ? "shadow-2xl" : ""
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          activeClass="active"
          duration={500}
          href="intro"
          offset={-100}
          smooth={true}
          spy={true}
          title="Tarun"
          to="intro"
        >
            <Logo className="cursor-pointer"/>
        </Link>
       
      </div>
    </nav>
  );
};

export default Header;
