import Image from "next/image";
import React from "react";

const Streak = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 space-x-8 sm:w-[90%] md:w-[68%] m-auto justify-center">
      <Image
        className="h-48"
        src="https://github-readme-streak-stats.herokuapp.com?user=tarun-upadhyay&theme=radical&border_radius=4.6"
        alt="Github Streaks"
      />
      <Image
        className="md:h-48 sm:p-3 md:p-0"
        alt="most used programming languages"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=tarun-upadhyay&layout=compact&langs_count=8&theme=react"
      />
    </div>
  );
};

export default Streak;
