import React from "react";
import { useSelector } from "react-redux";
import { RenderCount } from "./RenderCount";

export const Team = () => {
  const loadedPlayers = useSelector((state) => state.Team.loadedPlayers);

  return <div>{loadedPlayers.length > 0 && <RenderCount />}</div>;
};
