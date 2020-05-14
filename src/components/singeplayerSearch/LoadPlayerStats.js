import React, { Fragment, useEffect } from "react";
import { Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { LoadPlayerSeasons } from "./LoadPlayerSeasons";
import { LoadStatDropdown } from "./LoadStatDropdown";
import { FetchLastTenGames } from "../../actions/SingleSearchActions";
import { LoadLastTenTable } from "./LoadLastTenTable";

const LoadPlayerStats = () => {
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
        <Spinner animation="grow" />
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
          <LoadPlayerSeasons />
          <LoadStatDropdown />
          <LoadLastTenTable />
        </Fragment>
      )}
    </div>
  );
};

export default LoadPlayerStats;
