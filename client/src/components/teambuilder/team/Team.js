import React from "react";
import { useSelector } from "react-redux";
import { RenderCount } from "./RenderCount";

export const Team = () => {
  const teamPlayers = useSelector((state) => state.Team.teamPlayers);
  const loadedPlayers = useSelector((state) => state.Team.loadedPlayers);
  console.log(loadedPlayers);

  return <div>{loadedPlayers.length > 0 && <RenderCount />}</div>;
};
