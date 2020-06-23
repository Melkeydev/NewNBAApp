import React from "react";
import { useSelector } from "react-redux";
import { RenderCount } from "./RenderCount";

export const Team = () => {
  const teamPlayers = useSelector((state) => state.Team.teamPlayers);

  return <div>{teamPlayers.length > 0 && <RenderCount />}</div>;
};
