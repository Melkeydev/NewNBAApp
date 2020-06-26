import React from "react";
import { Row, Col } from "antd";
import PlayerCards from "../../assets/Images/player_cards.svg";

export const GetTechnicalPage = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <div style={{ textAlign: "center", paddingTop: "5%" }}>
            <p style={{ fontSize: "5rem" }}>GET TECHNICAL</p>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <img src={PlayerCards} style={{ height: "75vh" }} alt="Player Cards Illustration"/>
        </Col>
      </Row>
    </div>
  );
};
