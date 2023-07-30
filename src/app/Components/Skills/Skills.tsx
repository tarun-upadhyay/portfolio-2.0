import SectionTitle from "@/app/utils/Common/SectionTitle";
import React from "react";
import { logo } from "@/app/utils/projects_data";
import ListSkill from "./ListSkill";
const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0"
      id="skills"
    >
      <SectionTitle direction="right" title="My Technical Skills" />
      <div className="grid grid-cols-2 md:grid-cols-6 m-auto mt-10 justify-center">
        {logo.map((post, i:number) => (
          <ListSkill key={post.key} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
