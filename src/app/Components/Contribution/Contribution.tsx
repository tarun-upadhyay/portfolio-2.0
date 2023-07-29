
import SectionTitle from "@/app/utils/Common/SectionTitle";
import React from "react";
import GithubGraph from "./GithubGraph";
import Streak from "./Streak";

const Contribution = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0"
      id="blog"
    >
      <SectionTitle direction="left" title="My Contribution" />
      <GithubGraph delayShow={20} username="tarun-upadhyay" calenderCss="m-auto" fontSize={20} >
        
      </GithubGraph>
      <Streak/>
    </div>
  );
};

export default Contribution;
