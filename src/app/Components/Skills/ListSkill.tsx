"use client"
import Image from "next/image";
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
import React, { FC } from "react";
interface SkillProps {
  image: any;
  alt: string;
  rounded: boolean;
  id: number;
}
const ListSkill: FC<SkillProps> = ({ image, alt, rounded }) => {
  return (
    <div
      className="mx-auto duration-200  hover:scale-110 m-1 p-3"
      

    >
      <Tooltip id="my-tooltip" />
      <Image
        className={`${
          rounded ? "rounded-[50%]" : "rounded"
        }  w-full object-fit  md:h-36 sm:28`}
        src={image}
        alt={alt}
        width={200}
        height={200}
        data-tooltip-id="my-tooltip"
      data-tooltip-content={alt} 
      />
    </div>
  );
};

export default ListSkill;
