import Image from "next/image";
import React, { FC } from "react";

interface ProjectTypeProp {
  img: string;
  name: string;
  tech: string;
  github: string;
  deployed: string;
  detail: string;
  alt: string;
}
const ListProjects: FC<ProjectTypeProp> = ({
  img,
  name,
  tech,
  detail,
  github,
  alt,
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
      </div>
    </article>
  );
};

export default ListProjects;
