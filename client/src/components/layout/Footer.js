import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import {
  GithubFilled,
  MailFilled,
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";

export const Footer = () => {
  return (
    <Row
      style={{
        backgroundColor: "#e0d5ce",
        padding: "30px 0",
        marginTop: "150px",
      }}
    >
      <Col offset={4} span={2} sm={24} xs={24}>
        <div style={{ fontWeight: "bold" }}>SITEMAP</div>
        <div>Home</div>
        <div>Contact</div>
      </Col>
      <Col span={8} sm={24} xs={{ span: 24, offset: 4 }}>
        <div style={{ fontWeight: "bold" }}>WANT TO CONTRIBUTE?</div>
        <p style={{ wordWrap: "break-word" }}>
          This project is fully open source, if you wish to contribute, visit
          our site on GitHub
        </p>
      </Col>
      <Col offset={4} span={4} sm={24} xs={24}>
        <div style={{ fontWeight: "bold" }}>FOLLOW ME</div>
        <div style={{ margin: "5px" }}>
          <GithubFilled />
          <InstagramFilled />
          <LinkedinFilled />
          <YoutubeFilled />
          <FacebookFilled />
        </div>
        <div>
          <MailFilled />
          melkeydev@gmail.com
        </div>
      </Col>
    </Row>
  );
};
