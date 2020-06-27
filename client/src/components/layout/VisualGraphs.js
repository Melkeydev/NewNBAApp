import React from "react";
import { Row, Col } from "antd";
import GraphsPic from "../../assets/Images/Graphs.png";

export const VisualGraphs = () => {
  return (
    <div>
      <Row justify="center">
        <Col>
          <div
            style={{
              paddingTop: "5%",
              fontSize: "5rem",
            }}
          >
            VISUAL COMPARISON GRAPHS
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <img
            src={GraphsPic}
            style={{
              height: "50vh",
              maxWidth: "100%",
              display: "block",
              margin: "auto",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
