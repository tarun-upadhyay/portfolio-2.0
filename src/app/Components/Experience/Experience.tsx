import SectionTitle from "@/app/utils/Common/SectionTitle";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-5 md:p-0" id="experience">
      <SectionTitle title="Professional Experience" direction="right" />
      <div className="flex flex-col">
        <article className="flex flex-col items-center mt-10 md:flex-row">
          <Image
            className="relative md:w-[325px] w-full ml-4 md:h-[325px] xsm:h-64 xsm:w-64 rounded-lg object-contain"
            alt="company img"
            src="https://pbs.twimg.com/profile_images/1620774694189162497/3Av0forV_400x400.jpg"
            width={325}
            height={325}
            loading="lazy"
          ></Image>
          <div className="ml-2 mt-5 md:mt-0 md:ml-20">
            <h3 className="text-4xl font-semibold text-neon">Salesken.ai</h3>
            <h4 className="text-2xl font-fira font-bold">
              Tech Intern, Frontend Developer
            </h4>
            <p className="text-textDark mt-3 md:max-w-[700px]">
              Instrument every sales conversation into a win and coach every
              sales rep into a champion with Salesken’s conversational AI
              platform.
            </p>
            <h4 className="text-2xl my-2 font-fira font-bold text-neon">
              Area of responsibility:
            </h4>
            <ul className="list-disc md:max-w-[78%] text-textDark">
              <li>
                Developed an internally-used admin panel for stream lining
                organizational operations, leveraging front-end and back-end
                technologies,and ensuring data security.
              </li>
              <li>
                Collaborated in a cross-functional team ( incl.software
                engineers,UI designers and QAteam.)
              </li>
              <li>
                Debugged and resolved frontend and backend issues, leveraging
                strong problem-solving skills in React, Java, JSP, and Servlets.
              </li>
              <li>
                Identified customer requirements,collaborating closely with
                stakeholders to understand their needs and translate them into
                technical solutions.
              </li>
              <li>
                Contributed to UI development using technologies like
                React,Jquery,Bootstrap,etc.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Experience;
