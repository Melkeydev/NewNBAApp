import React from "react";
import LandingBackground from "../../assets/Images/LandingBackground.jpg";
import { Layout } from "antd";

const { Footer, Content } = Layout;

export const Homepage = () => (
  <div>
    <Layout>
      <Content>
        <img
          style={{ height: "auto", width: "100%" }}
          src={LandingBackground}
          alt="Landing background"
        />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    <h2>Test</h2>
  </div>
);
