import React from "react";

export const RenderCount = ({ position, teamPlayers }) => {
  let count = 0;

  const renderCount = (teamPlayers) => {

    return teamPlayers.map((player) => {

      if (player[1].position === position) {

        count += 1;

        
      }
      return count;
    });
  };

  return (
    <div>
      {position}
      <br />
      {renderCount(teamPlayers)}
    </div>
  );
};
