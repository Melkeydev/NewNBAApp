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
        <Col xs={20} md={20}>
          <div>{switchComponent(chartState)}</div>
        </Col>
        <Col xs={2}>
          <div>
            <Button
              onClick={() => setChartState("Normalized")}
              style={{
                marginTop: "10px",
                wordWrap: "break-word",
                width: "9rem",
              }}
            >
              Normalized Stats
            </Button>
            <Button
              onClick={() => setChartState("PER")}
              style={{ marginTop: "10px", width: "9rem" }}
            >
              Player Efficiency
            </Button>
            <Button
              onClick={() => setChartState("Team")}
              style={{ marginTop: "10px", width: "9rem" }}
            >
              Line Chart
            </Button>
            <Button
              onClick={() => setChartState("True Shooting")}
              style={{ marginTop: "10px", width: "9rem" }}
            >
              True Shooting
            </Button>
            <Button
              onClick={() => setChartState("Field Goal Percentage")}
              style={{ marginTop: "10px", width: "9rem" }}
            >
              Field Goal Percentage
            </Button>
            <Button
              onClick={() => setChartState("Field Throw Percentage")}
              style={{ marginTop: "10px", width: "9rem" }}
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
