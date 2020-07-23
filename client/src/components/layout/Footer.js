import React from "react";
import { Row, Col } from "antd";

import {
  GithubFilled,
  MailFilled,
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
  TwitterOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  return (
    <Row
      style={{
        backgroundColor: "#e0d5ce",
        padding: "30px 0",
        marginTop: "15vh",
      }}
    >
      <Col sm={22} xs={{ span: 20, offset: 2 }} md={4}>
        <div style={{ fontWeight: "bold", fontSize: "0.80rem" }}>SITEMAP</div>
        <div style={{ fontSize: "0.80rem" }}>Home</div>
        <div style={{ fontSize: "0.80rem" }}>Contact</div>
      </Col>
      <Col sm={22} xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 1 }}>
        <div style={{ fontWeight: "bold", fontSize: "0.80rem" }}>
          WANT TO CONTRIBUTE?
        </div>
        <p style={{ wordBreak: "break-word", fontSize: "0.80rem" }}>
          This project is fully open source, if you wish to contribute, visit
          our site on GitHub
        </p>
      </Col>
      <Col sm={22} xs={{ span: 20, offset: 2 }} md={{ span: 4, offset: 4 }}>
        <div style={{ fontWeight: "bold", fontSize: "0.80rem" }}>FOLLOW ME</div>
        <div style={{ margin: "5px" }}>
          <a href="https://github.com/Amokstakov" style={{ color: "inherit" }}>
            <GithubFilled />
          </a>
          <a href="https://twitter.com/MelkeyDev" style={{ color: "inherit" }}>
            <TwitterOutlined />
          </a>
          <LinkedinFilled />
        </div>
        <div>
          <MailFilled />
          melkeydev@gmail.com
        </div>
      </Col>
    </Row>
  );
};
