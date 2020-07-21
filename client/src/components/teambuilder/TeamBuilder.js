import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
import { StatsDisplay } from "./StatsDisplay";
import { Row, Col, Button } from "antd";
import { Team } from "./team/Team";

const TeamBuilder = () => {
  const [flag, setFlag] = useState(false);

  const Forward = useSelector((state) => state.TeamReducer.forward);
  const Center = useSelector((state) => state.TeamReducer.center);
  const Guard = useSelector((state) => state.TeamReducer.guard);
  const loadPlayers = useSelector((state) => state.Team.loadedPlayers);

  console.log(loadPlayers);

  const RenderDisplay = (Zip) => {
    return Zip.map((zip, i) => {
      return (
        <Col key={i} xs={24} sm={12} md={12} lg={12} xl={6}>
          <StatsDisplay Stats={zip[0]} Player={zip[1]} flag={flag} />
        </Col>
      );
    });
  };

  return (
    <div>
      <Row justify="center">
        <Col span={12}>
          <Searchbar />
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={22} sm={12} md={6} lg={6} xl={10}>
          <Button onClick={() => setFlag(!flag)}>Check all Stats</Button>
        </Col>
      </Row>

      <Row justify="center">
        <Col md={14} sm={14} xs={14}>
          <Row gutter={[16, 16]} justify="center">
            {Guard.length > 0 && RenderDisplay(Guard)}
          </Row>
          <Row gutter={[16, 16]} justify="center">
            {Center.length > 0 && RenderDisplay(Center)}
          </Row>

          <Row gutter={[16, 16]} justify="center">
            {Forward.length > 0 && RenderDisplay(Forward)}
          </Row>
        </Col>
        {loadPlayers[0].length > 0 && (
          <Col lg={{ offset: 2, span: 3 }} xs={20} sm={20} md={20}>
            <Team />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default TeamBuilder;
