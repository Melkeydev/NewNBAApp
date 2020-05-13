import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
      <Link to="/single-player">
        <Button>Detailed Search</Button>
      </Link>
      <Link to="/teambuilder">
        <Button>Build a Team</Button>
      </Link>
    </div>
  );
};
