import React from "react";

export const StatsDisplay = ({ Stats, Player }) => {
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

  return (
    <div>
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
      Points: {pts} <br />
      Assists: {ast} <br />
      Rebounds: {reb} <br />
      Steals: {stl} <br />
      Blocks: {blk} <br />
      Field Goal %: {fg_pct} <br />
      Three Point %: {fg3_pct} <br />
      Free Throw %: {ft_pct} <br />
    </div>
  );
};
