import Image from "next/image";
import React, { FC } from "react";

interface ProjectTypeProp {
  img: string;
  name: string;
  tech: string;
  github: string;
  deployed: string;
  detail: string;
}
const ListProjects: FC<ProjectTypeProp> = (props) => {
    const {img} = props
  return (
    <article>
      <Image alt="project" src={img} />
    </article>
  );
};

export default ListProjects;
