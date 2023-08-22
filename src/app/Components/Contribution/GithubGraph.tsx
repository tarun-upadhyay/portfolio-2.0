"use client";
import React, { FC } from "react";
import GitHubCalendar from "react-github-calendar";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
interface GraphProp {
  delayShow: number;
  fontSize: number;
 
  username: string;
  children?: JSX.Element | JSX.Element[];
}
const GithubGraph: FC<GraphProp> = ({
  delayShow,
  fontSize,
 
  username,
}) => {
  return (
    <div className="rounded md:border md:border-dotted md:border-neon p-4 mt-10 md:w-[80%] flex justify-center py-6">
      <GitHubCalendar
   
        username={username}
        fontSize={fontSize}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
          })
        }
      ></GitHubCalendar>
      <ReactTooltip id="react-tooltip" />
    </div>
  );
};

export default GithubGraph;
