import React, { FC } from "react";
import { Link } from "react-scroll";


interface INavOption {
  item: {
    name: string;
    href: string;
  };
}

const NavOption: FC<INavOption> = ({ item }) => {

  if (item.name === "Resume") {
    return (
      <p className="border-b-2 text-lg border-transparent cursor-pointer text-text hover:border-neon">
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </p>
    );
  }
  return (
    <p className="border-b-2 text-lg border-transparent cursor-pointer text-text hover:border-neon">
      <Link
        activeClass="active"
        duration={500}
        href={item.href}
        offset={-100}
        smooth={true}
        spy={true}
        to={item.href}
      >
        {item.name}
      </Link>
    </p>
  );
};

export default NavOption;
// ${item.active ? "activeNavOption" : ""}`
