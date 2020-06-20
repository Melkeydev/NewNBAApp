import React from "react";
import { FetchPlayerSeason } from "../../actions/SingleSearchActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

export const PlayerSeasons = () => {
  const { id } = useSelector((state) => state.Player.player);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        type="primary"
        onClick={() => dispatch(FetchPlayerSeason(id, "2019"))}
      >
        2019
      </Button>
      <Button
        type="primary"
        onClick={() => dispatch(FetchPlayerSeason(id, "2018"))}
      >
        2018
      </Button>
      <Button
        type="primary"
        onClick={() => dispatch(FetchPlayerSeason(id, "2017"))}
      >
        2017
      </Button>
    </div>
  );
};
