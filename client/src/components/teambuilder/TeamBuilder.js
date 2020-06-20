import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
import { StatsDisplay } from "./StatsDisplay";
import { Container, Button } from "semantic-ui-react";
import { Row, Col } from "antd";
import { Team } from "./team/Team";

const TeamBuilder = () => {
  const [flag, setFlag] = useState(false);

  const Forward = useSelector((state) => state.TeamReducer.forward);
  const Center = useSelector((state) => state.TeamReducer.center);
  const Guard = useSelector((state) => state.TeamReducer.guard);

  const RenderDisplay = (Zip) => {
    return Zip.map((zip, i) => {
      return (
        <Col xs={24} sm={12} md={6} lg={6} xl={10} key={i}>
          <StatsDisplay Stats={zip[0]} Player={zip[1]} flag={flag} />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={6} xl={10}>
          <Searchbar />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6} lg={6} xl={10}>
          <Button onClick={() => setFlag(!flag)}>Check all Stats</Button>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>{Guard.length > 0 && RenderDisplay(Guard)}</Row>
      <Row gutter={[16, 16]}>{Center.length > 0 && RenderDisplay(Center)}</Row>
      <Row gutter={[16, 16]}>
        {Forward.length > 0 && RenderDisplay(Forward)}
      </Row>
      <Team />
    </Container>
  );
};

export default TeamBuilder;
