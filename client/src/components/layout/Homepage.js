import React from "react";
import LandingBackground from "../../assets/Images/LandingBackground.jpg";
import { Row, Col, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const Homepage = () => (
  <div>
    <Layout>
      <Content>
        <img
          style={{ height: "auto", width: "100%" }}
          src={LandingBackground}
        />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    <h2>Test</h2>
  </div>
);
