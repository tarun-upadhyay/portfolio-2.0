import Image from "next/image";
import React, { FC } from "react";
interface SkillProps {
  image: string;
  alt: string;
}
const ListSkill: FC<SkillProps> = ({ image, alt }) => {
  return (
    <div className="mx-auto duration-200  hover:scale-110 m-1 p-3">
      <Image
        className="rounded w-full object-fit h-40"
        src={image}
        alt={alt}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ListSkill;
