import React from "react";
import { useSelector, useDispatch } from "react-redux";

const LoadPlayerStats = ({ player }) => {
  const dispatch = useDispatch();
  const { first_name, id, last_name, pts, ast } = player;

  return (
    <div>
      {first_name} + {pts}
    </div>
  );
};

export default LoadPlayerStats;
