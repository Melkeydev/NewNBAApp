import React from "react";
import LandingBackground from "../../assets/Images/LandingBackground.jpg";
import { Row, Col, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const Homepage = () => (
  <Row>
    <Col span={24}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${LandingBackground})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Col span={12}>
          <div style={{ textAlign: "center", margin: "auto" }}>
            <h1>CREATIVENOBU</h1>
          </div>
        </Col>
      </div>
    </Col>
    {/* <Footer>Footer</Footer> */}
  </Row>
);
