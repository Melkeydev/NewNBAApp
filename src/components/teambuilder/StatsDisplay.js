import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./StatsDisplay.css";
import { Button } from "reactstrap";
import { removeState } from "../../actions/TeamBuilderAction";

export const StatsDisplay = ({ Stats, Player }) => {
  const dispatch = useDispatch();

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
    id,
    position,
    team: { full_name, conference },
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
    return position === "F"
      ? Forward
      : position === "F-C"
      ? Center
      : position === "C"
      ? Center
      : position === "G"
      ? Guard
      : position === "F-G"
      ? Guard
      : null;
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

  console.log(Center[0][1]);

  const shit = (Center) => {
    console.log("123");
    dispatch(removeState(Center[0][1]));
  };

  return (
    <div>
      <Button onClick={() => shit(Center)}>Remove</Button>
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
          renderStatsComparison(renderStats(position)),
          pts,
          "pts"
        )}Bar`}
      >
        Points: {pts}
      </div>
      <div
        className={`${renderBarColor(
          renderStatsComparison(renderStats(position)),
          ast,
          "ast"
        )}Bar`}
      >
        Assists: {ast}
      </div>
      <div
        className={`${renderBarColor(
          renderStatsComparison(renderStats(position)),
          reb,
          "reb"
        )}Bar`}
      >
        Rebounds: {reb}
      </div>
      <div
        className={`${renderBarColor(
          renderStatsComparison(renderStats(position)),
          stl,
          "stl"
        )}Bar`}
      >
        Steals: {stl}
      </div>
      <div
        className={`${renderBarColor(
          renderStatsComparison(renderStats(position)),
          blk,
          "blk"
        )}Bar`}
      >
        Blocks: {blk}
      </div>
      <div
        className={`${renderBarColor(
          renderStatsComparison(renderStats(position)),
          fg_pct,
          "fg_pct"
        )}Bar`}
      >
        Field Goal %: {fg_pct}
      </div>
      <div
        className={`${renderBarColor(
          renderStatsComparison(renderStats(position)),
          fg3_pct,
          "fg3_pct"
        )}Bar`}
      >
        Three point %: {fg3_pct}
      </div>
      <div
        className={`${renderBarColor(
          renderStatsComparison(renderStats(position)),
          ft_pct,
          "ft_pct"
        )}Bar`}
      >
        Free Throw %: {ft_pct}
      </div>
    </div>
  );
};
