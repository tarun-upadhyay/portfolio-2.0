"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import NavOption from "./NavOptionComp";
import { IoIosClose } from "react-icons/io";
import { navOptions } from "./Options";
const SideBar = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  return (
    <>
      {!showSideBar && (
        <div className="bg-white cursor-pointer md:hidden fixed grid h-14 place-items-center right-10 rounded-full top-4 w-14 z-50" onClick={() => setShowSideBar(true)}>
          <FiMenu color="black" size="30" />
        </div>
      )}
      <div
        className={`bg-bgblue px-10 flex-col gap-4 flex md:hidden justify-center items-center fixed min-h-[120vh] top-0 right-0 z-50 transition-all duration-500 ease-in-out   ${
          showSideBar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div
          className="grid bg-white cursor-pointer h-12 absolute place-items-center rounded-full top-4 left-10 w-12"
          onClick={() => setShowSideBar(false)}
        >
          <IoIosClose color="black" size="40" />
        </div>
        <div className="flex flex-col gap-4">
          {navOptions.map((el, i) => {
            return <NavOption item={el} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
