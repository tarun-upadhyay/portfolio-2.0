import Image from "next/image";
import React, { FC } from "react";
import title from './title.png'
interface LogoType {
  className?: string;
}
const Logo: FC<LogoType> = ({ className }) => {
  return (
 <Image src={title} alt="titlelogo" height={50} width={50}/>
  );
};

export default Logo;
