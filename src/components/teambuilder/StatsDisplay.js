import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { removeState } from "../../actions/TeamBuilderAction";
import { addPlayer } from "../../actions/TeamAction";
import { RenderSpecificStatDisplay } from "./RenderSpecificStatDisplay";
import { FetchLastTenGames } from "../../actions/SingleSearchActions";

//Put Render functions

export const StatsDisplay = ({ Stats, Player, flag }) => {
  const dispatch = useDispatch();

  const { Players, Guard, Forward, Center } = useSelector((state) => {
    return {
      Players: state.TeamReducer.players,
      Guard: state.TeamReducer.guard,
      Forward: state.TeamReducer.forward,
      Center: state.TeamReducer.center,
    };
  });

  const [positionState, setPositionState] = useState({
    guard: [],
    center: [],
    forward: [],
  });

  useEffect(() => {
    const positionStats = {
      center: renderStatsComparison(flag === true ? Players : Center),
      guard: renderStatsComparison(flag === true ? Players : Guard),
      forward: renderStatsComparison(flag === true ? Players : Forward),
    };
    setPositionState(positionStats);
  }, [Center, Guard, Forward, Players, flag]);

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
    id,
    team: { full_name, conference },
  } = Player;

  const { min, season } = Stats;

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

  return (
    /* View Layer*/
    <div>
      <Button
        className="btn btn-danger"
        onClick={() => dispatch(removeState(renderStats(position)[0][1], id))}
      >
        Remove
      </Button>
      <Button
        onClick={() => {
          dispatch(addPlayer(renderStats(position), id, position));
          dispatch(FetchLastTenGames(id, true));
        }}
        className="btn btn-success"
      >
        Add
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
      <RenderSpecificStatDisplay
        positionState={positionState}
        Stats={Stats}
        position={position}
      />
    </div>
  );
};
