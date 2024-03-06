import SectionTitle from "@/app/utils/Common/SectionTitle";
import Image from "next/image";
import React from "react";
import ProfileImg from "../../utils/Images/profile.png";
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0"
      id="about"
    >
      <SectionTitle title="About me" direction="right" />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="mt-10 text-xl text-textDark md:w-1/2">
          Result-driven MERN Stack Developer having worked at Salesken.ai as a
          SDE Intern developing frontend using React, HTML, CSS, Javascript,
          Bootstrap, and jQuery. Interested in learning new skills and solving
          problems. Aim to build a career as a web developer and significantly
          contribute to an organization.{" "}
        </p>
        <br />
        <Image
          src={ProfileImg}
          alt="about me image"
          className="object-contain relative mx-auto mt-20 border-2 rounded-full md:mt-0 sm:ml-5 md:ml-20 md:w-80 md:h-80 xsm:h-64 xsm:w-64 border-neon text-center"
          height={300}
          loading="lazy"
          width={300}
        />
      </div>
    </div>
  );
};

export default About;
