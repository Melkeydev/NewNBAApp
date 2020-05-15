import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removePlayer } from "../../../actions/TeamAction";
import { RenderCount } from "./RenderCount";

export const Team = () => {
  const dispatch = useDispatch();
  const teamPlayers = useSelector((state) => state.Team.teamPlayers);

  const renderTeam = (teamPlayers) => {
    return teamPlayers.map((Player) => {
      const {
        first_name,
        last_name,
        id,
        position,
        team: { abbreviation },
      } = Player[1];
      return (
        <div key={id}>
          <RenderCount position={position} teamPlayers={teamPlayers} />
          <Button
            size="sm"
            style={{
              height: "1.25rem",
              width: "1.25rem",
              alignItems: "center",
              border: "none",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => {
              dispatch(removePlayer(teamPlayers));
            }}
          >
            <FontAwesomeIcon
              icon={faTimes}
              size="sm"
              style={{
                position: "absolute",
              }}
            />
          </Button>
          <h4>
            {first_name} {last_name}
          </h4>
          <h6>{abbreviation}</h6>
        </div>
      );
    });
  };

  return (
    <div style={{ float: "right" }}>
      {teamPlayers.length > 0 && (
        <Container> {renderTeam(teamPlayers)}</Container>
      )}
    </div>
  );
};
