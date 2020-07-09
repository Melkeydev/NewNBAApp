import React, { Fragment, useEffect, useState } from "react";
import { Button, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { PlayerSeasons } from "./PlayerSeasons";
import { StatDropdown } from "./StatDropdown";
import { FetchLastTenGames } from "../../actions/SingleSearchActions";
import { PlayerStatsTable } from "./PlayerStatsTable";

//
import { Row, Col } from "antd";

const PlayerStats = () => {
  const [count, setCount] = useState(10);

  const { loading, player, team, stats } = useSelector((state) => state.Player);
  console.log(stats);

  const { first_name, id, last_name } = player;
  const { ast, blk, fg3_pct, fg_pct, ft_pct, min, pts, reb, season, stl } =
    stats || {};

  const { city, conference, name } = team || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchLastTenGames(id));
  }, [dispatch, id]);

  return (
    <div style={{ width: "100%" }}>
      {loading ? (
        <Spin />
      ) : (
        <Fragment>
          <div>
            <h2>
              {first_name} {last_name}
            </h2>
            <h2>
              Team : {city} {name}
            </h2>
            <h3>
              Conference : {conference}
              Season : {season}
            </h3>
          </div>
          <ul
            style={{
              listStyleType: "none",
              fontSize: "0.8rem",
              paddingLeft: "0",
            }}
          >
            <li>Playing Minutes: {min}</li>
            <li>Free Throw %: {ft_pct}</li>
            <li>Three Point %: {fg3_pct}</li>
            <li>Field Goal %: {fg_pct}</li>
            <li>Blocks: {blk}</li>
            <li>Steals: {stl}</li>
            <li>Rebounds: {reb}</li>
            <li>Assists: {ast}</li>
            <li>Points: {pts}</li>
          </ul>
          <PlayerSeasons />
          <StatDropdown count={count} />
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              type="dashed"
              onClick={() => {
                setCount(10);
              }}
            >
              10
            </Button>
            <Button
              type="dashed"
              onClick={() => {
                setCount(15);
              }}
            >
              15
            </Button>
            <Button
              type="dashed"
              onClick={() => {
                setCount(20);
              }}
            >
              20
            </Button>
          </div>

          <PlayerStatsTable count={count} />
        </Fragment>
      )}
    </div>
  );
};

export default PlayerStats;
