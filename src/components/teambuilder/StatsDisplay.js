import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./StatsDisplay.css";
import { Button } from "reactstrap";
import { removeState } from "../../actions/TeamBuilderAction";

//Put Render functions

export const StatsDisplay = ({ Stats, Player, flag }) => {
  const [positionState, setPositionState] = useState({
    guard: [],
    center: [],
    forward: [],
  });

  const dispatch = useDispatch();

  const Players = useSelector((state) => state.Team.players);
  const Guard = useSelector((state) => state.Team.guard);
  const Forward = useSelector((state) => state.Team.forward);
  const Center = useSelector((state) => state.Team.center);

  const renderStatsComparison = (stats) => {
    return stats
      .map((stat) => stat[0])
      .reduce((acc, cur) => {
        for (var [k, v] of Object.entries(cur)) {
          if (!acc[k] || acc[k] < v) {
            acc[k] = v;
          }
        }
        return acc;
      }, {});
  };

  const {
    first_name,
    last_name,
    position,
    team: { full_name, conference, id },
  } = Player;

  const {
    ast,
    blk,
    fg3_pct,
    fg_pct,
    ft_pct,
    min,
    pts,
    reb,
    season,
    stl,
  } = Stats;

  const renderStats = (position) => {
    switch (position) {
      case "F":
        return Forward;
      case "F-C":
      case "C":
        return Center;
      case "G":
      case "F-G":
        return Guard;
      default:
        return null;
    }
  };

  const translatePosition = (position) => {
    switch (position) {
      case "F":
        return "forward";
      case "F-C":
      case "C":
        return "center";
      case "G":
      case "F-G":
        return "guard";
      default:
        return null;
    }
  };

  const renderBarColor = (acc, cur, key) => {
    if (acc[key] > cur) {
      return "red";
    } else if (acc[key] === cur) {
      return "green";
    } else {
      return "white";
    }
  };

  const removePosition = (state, teamId) => {
    dispatch(removeState(state[0][1], teamId));
  };

  useEffect(() => {
    const positionStats = {
      center: renderStatsComparison(flag === true ? Players : Center),
      guard: renderStatsComparison(flag === true ? Players : Guard),
      forward: renderStatsComparison(flag === true ? Players : Forward),
    };
    setPositionState(positionStats);
  }, [Center, Guard, Forward, Players, flag]);

  return (
    /* View Layer*/

    <div>
      <Button onClick={() => removePosition(renderStats(position), id)}>
        Remove
      </Button>
      <div>
        <h2>
          {first_name} {last_name}
          <br />
        </h2>
        <h5>{position}</h5>

        <h4>{full_name}</h4>
        <br />
        <h4>{conference}</h4>
      </div>
      <h5>Season: {season}</h5>
      <h5>Playing Minutes: {min}</h5> <br />
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          pts,
          "pts"
        )}Bar`}
      >
        Points: {pts}
      </div>
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          ast,
          "ast"
        )}Bar`}
      >
        Assists: {ast}
      </div>
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          reb,
          "reb"
        )}Bar`}
      >
        Rebounds: {reb}
      </div>
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          stl,
          "stl"
        )}Bar`}
      >
        Steals: {stl}
      </div>
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          blk,
          "blk"
        )}Bar`}
      >
        Blocks: {blk}
      </div>
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          fg_pct,
          "fg_pct"
        )}Bar`}
      >
        Field Goal %: {fg_pct}
      </div>
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          fg3_pct,
          "fg3_pct"
        )}Bar`}
      >
        Three point %: {fg3_pct}
      </div>
      <div
        className={`${renderBarColor(
          positionState[translatePosition(position)],
          ft_pct,
          "ft_pct"
        )}Bar`}
      >
        Free Throw %: {ft_pct}
      </div>
    </div>
  );
};
