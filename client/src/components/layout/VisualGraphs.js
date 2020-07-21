import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import GraphsPic from "../../assets/Images/Graphs.png";
import GraphSplit1 from "../../assets/Images/GraphSplit1.png";
import GraphSplit2 from "../../assets/Images/GraphSplit2.png";

export const VisualGraphs = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return (
    <div style={{ marginTop: "15vh" }}>
      <Row justify="center">
        <Col xs={{}}>
          <div
            style={{
              paddingTop: "5%",
              fontSize:
                "calc(36px + (80 - 36) * ((100vw - 300px) / (1900 - 700)))",
            }}
          >
            VISUAL COMPARISON GRAPHS
          </div>
        </Col>
      </Row>
      <Row justify="center">
        {width > 900 ? (
          <Col>
            <img
              alt={"GraphsPic"}
              src={GraphsPic}
              style={{
                height: "auto",
                maxWidth: "100%",
                display: "block",
                margin: "auto",
              }}
            />
          </Col>
        ) : (
          <Col>
            <img
              alt={"GraphSplit1"}
              src={GraphSplit1}
              style={{
                height: "auto",
                maxWidth: "100%",
                display: "block",
                margin: "auto",
              }}
            />
            <img
              alt={"GraphSplit2"}
              src={GraphSplit2}
              style={{
                height: "auto",
                maxWidth: "100%",
                display: "block",
                margin: "auto",
              }}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};
