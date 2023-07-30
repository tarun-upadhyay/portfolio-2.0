import Image from "next/image";
import React, { FC } from "react";
interface SkillProps {
  image: any;
  alt: string;
  rounded: boolean;
  id: number;
  key: number;
}
const ListSkill: FC<SkillProps> = ({ image, alt, rounded }) => {
  return (
    <div className="mx-auto duration-200  hover:scale-110 m-1 p-3">
      <Image
        className={`${
          rounded ? "rounded-[50%]" : "rounded"
        }  w-full object-fit h-40 `}
        src={image}
        alt={alt}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ListSkill;
