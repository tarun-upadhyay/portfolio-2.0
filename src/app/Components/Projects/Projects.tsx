import SectionTitle from "@/app/utils/Common/SectionTitle";
import React from "react";
import { projectsData } from "@/app/utils/projects_data";
import ListProjects from "./ListProjects";
const Projects = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-5 md:p-0" id="work">
      <SectionTitle title="My creative Portfolio Section" direction="right" />
      <div className="flex flex-col">
        {projectsData.map((project, i) => {
          return <ListProjects key={i} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
