"use client";
import React, { FC, useEffect } from "react";
import { LineSvg } from "../Icons/AllIcon";
import AOS from "aos";
import "aos/dist/aos.css";
interface SectionProps {
  title: string;
  direction: string
}

const SectionTitle: FC<SectionProps> = ({ title,direction }) => {
  useEffect(() => {
    if (typeof window === "object") {
      AOS.init();
      AOS.refresh();
    }
  }, []);
  return (
    <div
      className="flex items-center w-full mt-20"
      data-aos={`fade-${direction}`}
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <h2 className="text-3xl md:text-4xl text-text">
        {" "}
        <span className="text-neon font-fira text-3xl"> &lt;/&gt;</span> {title}
      </h2>
      <LineSvg className="relative md:w-96 hidden md:inline-flex !ml-10" />
    </div>
  );
};

export default SectionTitle;
