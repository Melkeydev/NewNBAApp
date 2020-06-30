import React from "react";
import { Row, Col } from "antd";
import PlayerCards from "../../assets/Images/player_cards.svg";

export const GetTechnicalPage = () => {
  return (
    <div style={{ marginTop: "15vh" }}>
      <Row justify="center">
        <Col>
          <div
            style={{
              paddingTop: "5%",
              fontSize:
                "calc(36px + (80 - 36) * ((100vw - 300px) / (1900 - 700)))",
            }}
          >
            GET TECHNICAL
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <img
            src={PlayerCards}
            style={{
              maxWidth: "100%",
              margin: "auto",
              display: "block",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
