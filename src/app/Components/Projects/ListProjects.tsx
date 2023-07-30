import Image from "next/image";
import { GitHubIcon, VisitIcon } from "../../utils/Icons/AllIcon";
import React, { FC } from "react";
interface ProjectTypeProp {
  img: any;
  name: string;
  tech: string[];
  github: string;
  deployed: string;
  detail: string;
  alt: string;
  id: number;
  type: string;
}
const ListProjects: FC<ProjectTypeProp> = ({
  img,
  name,
  tech,
  detail,
  github,
  alt,
  deployed,
  type,
}) => {
  return (
    <article className="flex flex-col items-center mt-10 md:flex-row">
      <Image
        alt={alt}
        className="relative md:w-[450px] w-full ml-4 h-[250px] rounded-lg object-contain"
        height={250}
        loading="lazy"
        width={250}
        src={img}
      />
      <div className="ml-2 mt-5 md:mt-0 md:ml-20">
        <h3 className="text-3xl font-semibold text-neon">{name}</h3>
        <p className="text-textDark mt-3 md:max-w-[700px]">{detail}</p>
        {tech.map((el, i) => (
          <span
            className="inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2"
            key={i}
          >
            {el}
          </span>
        ))}
        <p className="text-textDark mt-2">
          <span className="text-neon">Role:</span> {type}
        </p>
        <div className="flex mt-4 space-x-4">
          <a
            className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon"
            href={github}
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />

            <span className="ml-2">GitHub</span>
          </a>
          <a
            className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon"
            href={deployed}
            rel="noreferrer"
            target="_blank"
          >
            <VisitIcon />
            <span className="ml-2">Visit</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ListProjects;
