import SectionTitle from "@/app/utils/Common/SectionTitle";
import Image from "next/image";
import React from "react";
import ProfileImg from "../../utils/Images/profile.png";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0" id='about'>
      <SectionTitle title="About me" direction="left" />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="mt-10 text-xl text-textDark md:w-1/2">
          I am a Full Stack web developer learning MERN Stack at Masai School. I
          have done done various group as well as individual projects in my
          coding journey.
        </p>
        <Image
          src={ProfileImg}
          alt="about me image"
          className="object-contain relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default About;
