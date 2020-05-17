import React from "react";

export const RenderCount = ({ position, teamPlayers }) => {
  let count = 0;
  const renderCount = (teamPlayers) => {
    return teamPlayers.map((player) => {
      console.log(player[1]);
      if (player[1].position === position) {
        console.log("Test");
        console.log(position);
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
