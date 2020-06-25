import React from "react";
import LandingBackground from "../../assets/Images/LandingBackground.jpg";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import { GetTechnicalPage } from "./GetTechnicalPage";

export const Homepage = () => (
  <div>
    <Row>
      <Col span={24}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${LandingBackground})`,
            backgroundSize: "cover",
            height: "75vh",
            width: "100vw",
          }}
        >
          <Col span={12}>
            <Card
              style={{
                maxWidth: "600px",
                backgroundColor: "",
                textAlign: "center",
                margin: "auto",
                borderRadius: "5px",
                borderBottom: "solid #303e69 15px",
              }}
            >
              <h2>YOUR FANTASY BASKETBALL CHEATSHEET</h2>
              <p>Stop gambling, start planning</p>
              <Link to="/register">
                <Button
                  style={{
                    backgroundColor: "#ec9326",
                    color: "#ffff",
                    borderRadius: "20px",
                  }}
                >
                  Create Account
                </Button>
              </Link>
            </Card>
          </Col>
        </div>
      </Col>
    </Row>
    <GetTechnicalPage />
  </div>
);
