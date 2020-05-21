import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";

import { RenderCount } from "./RenderCount";

export const Team = () => {
  const teamPlayers = useSelector((state) => state.Team.teamPlayers);
  const guardPlayers = useSelector((state) => state.Team.guards);
  const centerPlayers = useSelector((state) => state.Team.centers);
  const forwardPlayers = useSelector((state) => state.Team.forwards);

  const renderPlayers = (pos) => {
    switch (pos) {
      case "F-G":
      case "G":
        return guardPlayers;
      case "F":
        return centerPlayers;
      case "C":
      case "F-C":
        return forwardPlayers;
    }
  };

  return (
    <div style={{ float: "right" }}>
      {teamPlayers.length > 0 && <RenderCount />}
    </div>
  );
};
