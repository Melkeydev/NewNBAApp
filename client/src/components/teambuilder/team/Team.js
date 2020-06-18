import React from "react";
import { useSelector } from "react-redux";

import { RenderCount } from "./RenderCount";

export const Team = () => {
  const teamPlayers = useSelector((state) => state.Team.teamPlayers);

  return (
    <div style={{ float: "right" }}>
      {teamPlayers.length > 0 && <RenderCount />}
    </div>
  );
};
