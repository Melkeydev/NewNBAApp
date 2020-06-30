import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeState } from "../../actions/TeamBuilderAction";
import { addPlayer } from "../../actions/TeamAction";
import { RenderSpecificStatDisplay } from "./RenderSpecificStatDisplay";
import { FetchLastTenGames } from "../../actions/SingleSearchActions";
import { Button } from "antd";

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
    <div
      style={{
        minWidth: "200px",
        width: "100%",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, .3), 0 1px 3px rgba(0, 0, 0, .3)",
      }}
    >
      <span
        style={{
          display: "inline",
          float: "right",
          fontSize: "4.5rem",
          marginBottom: "0",
          opacity: "0.1",
        }}
      >
        {position}
      </span>
      <div>
        <h2>
          {first_name} {last_name}
        </h2>

        <h4>{full_name}</h4>
        <h4>{conference}</h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            borderRadius: "5px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            width: "100%",
            border: "solid black 1px",
            padding: "5px",
            marginRight: "10px",
          }}
        >
          <h5 style={{ marginBottom: "0" }}>Season: {season}</h5>
        </div>
        <div
          style={{
            borderRadius: "5px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            width: "100%",
            border: "solid black 1px",
            padding: "5px",
            textAlign: "center",
          }}
        >
          <h5 style={{ marginBottom: "0" }}>Playing Minutes: {min}</h5>
        </div>
      </div>

      <RenderSpecificStatDisplay
        positionState={positionState}
        Stats={Stats}
        position={position}
      />
      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => dispatch(removeState(renderStats(position)[0][1], id))}
          style={{ textAlign: "right", borderRadius: "5px" }}
        >
          Remove
        </Button>
        <Button
          style={{
            textAlign: "right",
            marginLeft: "10px",
            backgroundColor: "#303e69",
            color: "#ffff",
            borderRadius: "5px",
          }}
          onClick={() => {
            dispatch(addPlayer(renderStats(position), id, position));
            dispatch(FetchLastTenGames(id, true));
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};
