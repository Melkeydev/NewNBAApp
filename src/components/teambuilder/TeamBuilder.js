import React from "react";
import Searchbar from "./Searchbar";
import { useSelector, useDispatch } from "react-redux";
import { StatsDisplay } from "./StatsDisplay";
import { Container } from "reactstrap";

const TeamBuilder = () => {
  const Forward = useSelector((state) => state.Team.forward);
  const Center = useSelector((state) => state.Team.center);
  const Guard = useSelector((state) => state.Team.guard);

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
          style={{
            gridArea: renderGridPlacement(zip[1].position),
          }}
        >
          <StatsDisplay Stats={zip[0]} Player={zip[1]} />
        </div>
      );
    });
  };

  return (
    <div>
      <Searchbar />

      <Container style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "flex-start",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            overflow: "hidden",
            margin: "20px 0",
            //gridTemplateRows: "auto auto auto",
          }}
        >
          {Guard.length > 0 && RenderDisplay(Guard)}
          {Center.length > 0 && RenderDisplay(Center)}
          {Forward.length > 0 && RenderDisplay(Forward)}
        </div>
      </Container>
    </div>
  );
};

export default TeamBuilder;
