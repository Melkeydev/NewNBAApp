import React from "react";
import { FetchPlayerSeason } from "../../actions/SingleSearchActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";

export const PlayerSeasons = () => {
  const { id } = useSelector((state) => state.Player.player);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        className="btn btn-primary"
        id="2019"
        onClick={(e) => dispatch(FetchPlayerSeason(id, e.target.id))}
      >
        2019
      </Button>
      <Button
        className="btn btn-primary"
        id="2018"
        onClick={(e) => dispatch(FetchPlayerSeason(id, e.target.id))}
      >
        2018
      </Button>
      <Button
        className="btn btn-primary"
        id="2017"
        onClick={(e) => dispatch(FetchPlayerSeason(id, e.target.id))}
      >
        2017
      </Button>
    </div>
  );
};
