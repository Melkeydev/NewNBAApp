import React, { useState } from "react";
import { NormalizedStatsChart } from "./NormalizedStatsChart";
import { TeamChartDisplay } from "./TeamChartDisplay";
import { PlayerEfficiencyChart } from "./PlayerEfficiencyChart";
import { TrueShooting } from "./TrueShooting";
import { FieldGoalPer } from "./FieldGoalPer";
import { Button, Row, Col } from "antd";

export const DisplayBar = ({ stat_ }) => {
  const [chartState, setChartState] = useState("Normalized");

  const switchComponent = (chartState) => {
    switch (chartState) {
      case "Normalized":
        return <NormalizedStatsChart stat={stat_}></NormalizedStatsChart>;
      case "Team":
        return <TeamChartDisplay stat={stat_}></TeamChartDisplay>;
      case "PER":
        return <PlayerEfficiencyChart />;
      case "True Shooting":
        return <TrueShooting />;
      case "Field Goal Percentage":
        return <FieldGoalPer Made={"fgm"} Attempted={"fga"} />;
      case "Field Throw Percentage":
        return <FieldGoalPer Made={"ftm"} Attempted={"fta"} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <div>{switchComponent(chartState)}</div>
        </Col>
        <Col>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              onClick={() => setChartState("Normalized")}
              style={{ marginTop: "5%" }}
            >
              Normalized Stats
            </Button>
            <Button
              onClick={() => setChartState("PER")}
              style={{ marginTop: "5%" }}
            >
              Player Efficiency
            </Button>
            <Button
              onClick={() => setChartState("Team")}
              style={{ marginTop: "5%" }}
            >
              Line Chart
            </Button>
            <Button
              onClick={() => setChartState("True Shooting")}
              style={{ marginTop: "5%" }}
            >
              True Shooting
            </Button>
            <Button
              onClick={() => setChartState("Field Goal Percentage")}
              style={{ marginTop: "5%" }}
            >
              Field Goal Percentage
            </Button>
            <Button
              onClick={() => setChartState("Field Throw Percentage")}
              style={{ marginTop: "5%" }}
            >
              Free Throw Percentage
            </Button>
          </div>
        </Col>
      </Row>
    </div>
    // <div
    //   style={{
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "row",
    //   }}
    // >
    //   <div>{switchComponent(chartState)}</div>
    // </div>
  );
};
