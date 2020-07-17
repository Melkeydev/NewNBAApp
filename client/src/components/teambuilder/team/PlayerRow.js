import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HoverShowStats } from "./HoverShowStats";

import { Button } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { removePlayer } from "../../../actions/TeamAction";

export const PlayerRow = ({ player, teamPlayers }) => {
  console.log(teamPlayers);
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();

  const {
    first_name,
    last_name,
    position,
    id,
    team: { abbreviation },
  } = player;

  return (
    <tr
      id={first_name}
      key={id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <td>
        <Button
          size="small"
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
      </td>
      <td>
        {hover && (
          <HoverShowStats
            isOpen={hover}
            player={first_name}
            teamPlayer={teamPlayers}
          />
        )}
        {first_name} {last_name}
      </td>
      <td>{position}</td>
      <td>{abbreviation}</td>
    </tr>
  );
};
