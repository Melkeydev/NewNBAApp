import React, { Fragment, useEffect, useState } from "react";
import { Loader, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { PlayerSeasons } from "./PlayerSeasons";
import { StatDropdown } from "./StatDropdown";
import { FetchLastTenGames } from "../../actions/SingleSearchActions";
import { PlayerStatsTable } from "./PlayerStatsTable";
import { set } from "mongoose";

const PlayerStats = () => {
  const [count, setCount] = useState(10);

  const { loading, player, team, stats } = useSelector((state) => state.Player);
  const { first_name, id, last_name } = player;
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
  } = stats;

  const { city, conference, name } = team;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchLastTenGames(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loader animation="grow" />
      ) : (
        <Fragment>
          <div>
            <h2>
              {first_name} {last_name}
              <br />
              Team : {city} {name}
            </h2>
            <h3>
              Conference : {conference}
              <br />
              Season : {season}
            </h3>
          </div>
          <div>
            <h5>Playing Minutes: {min}</h5> <br />
            Points: {pts} <br />
            Assists: {ast} <br />
            Rebounds: {reb} <br />
            Steals: {stl} <br />
            Blocks: {blk} <br />
            Field Goal %: {fg_pct} <br />
            Three Point %: {fg3_pct} <br />
            Free Throw %: {ft_pct} <br />
          </div>
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
              onClick={() => {
                setCount(10);
              }}
            >
              10
            </Button>
            <Button
              onClick={() => {
                setCount(15);
              }}
            >
              15
            </Button>
            <Button
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
