import React from "react";
import Searchbar from "./Searchbar";
import { useSelector, useDispatch } from "react-redux";
import { StatsDisplay } from "./StatsDisplay";
import { Container } from "reactstrap";

const TeamBuilder = () => {
  const { loading } = useSelector((state) => state.Team.loading);
  const Player = useSelector((state) => state.Team.player);
  const Stats = useSelector((state) => state.Team.stats);
  const Forward = useSelector((state) => state.Team.forward);
  const Center = useSelector((state) => state.Team.center);
  const Guard = useSelector((state) => state.Team.guard);

  console.log("Player", Player);
  console.log("Stats", Stats);
  console.log("guard", Guard);

  const renderGridPlacement = (position) => {
    return position === "F"
      ? "1"
      : position === "F-C"
      ? "2"
      : position === "C"
      ? "2"
      : position === "G"
      ? "3"
      : position === "F-G"
      ? "3"
      : null;
  };

  const RenderDisplay = (Zip) => {
    return Zip.map((zip) => {
      return (
        <div
          key={zip[1].id}
          style={{ gridArea: renderGridPlacement(zip[1].position) }}
        >
          <StatsDisplay Stats={zip[0]} Player={zip[1]} />
        </div>
      );
    });
  };

  return (
    <div>
      <Searchbar />

      <Container>
        <div
          style={{
            display: "grid",
            width: "auto",
            gridTemplateColumns: "250px 250px 250px 250px",
            overflow: "hidden",
            gridTemplateRows: "auto auto auto",
          }}
        >
          {Guard.length > 0 ? RenderDisplay(Guard) : null}
          {Center.length > 0 ? RenderDisplay(Center) : null}
          {Forward.length > 0 ? RenderDisplay(Forward) : null}
        </div>
      </Container>
    </div>
  );
};

export default TeamBuilder;
