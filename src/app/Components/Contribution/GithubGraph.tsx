"use client";
import React, { FC } from "react";
import GitHubCalendar from "react-github-calendar";

import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
interface GraphProp {
  delayShow: number;
  fontSize: number;
  calenderCss: string;
  username: string;
  children?: JSX.Element | JSX.Element[];
}
const GithubGraph: FC<GraphProp> = ({
  delayShow,
  fontSize,
  calenderCss,
  username,
}) => {
  return (
    <div className="md:w-[70%] m-auto rounded border border-double border-neon p-8 mt-10 flex flex-wrap justify-between">
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