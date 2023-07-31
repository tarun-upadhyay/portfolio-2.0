
import SectionTitle from "@/app/utils/Common/SectionTitle";
import React from "react";
import GithubGraph from "./GithubGraph";
import Streak from "./Streak";

const Contribution = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0"
     
    >
       <SectionTitle direction="right" title="My Contribution" />
     <GithubGraph delayShow={20} username="tarun-upadhyay"  fontSize={20} />
        
     
      <Streak/>
    </div>
  );
};

export default Contribution;
