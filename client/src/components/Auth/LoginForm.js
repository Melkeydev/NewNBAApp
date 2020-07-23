import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/AuthAction";
import { Redirect } from "react-router-dom";

//AntD
import { Row, Col, Form, Input, Button, Checkbox, Card } from "antd";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const LoginForm = () => {
  const { isLoggedIn } = useSelector((state) => state.Auth);
  const [email, setEmail] = useState("minsin45@twitch.com");
  const [password, setPassword] = useState("peninie");

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    //if (loggingIn) return;

    //setLoggingIn(true);

    const formData = {
      email,
      password,
    };

    dispatch(login(formData));

    //setLoggingIn(false);
  };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Row
      type="flex"
      justify="center"
      style={{ minHeight: "100vh", paddingTop: "5%" }}
    >
      <Col span={12}>
        <Card
          style={{
            boxShadow: "0px 10px 5px 0px rgba(50, 50, 50, 0.25)",
            //backgroundColor: "#d182ac",
          }}
        >
          <Form
            style={{ maxWidth: "600px" }}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onSubmit}
          >
            <Form.Item
              name="email"
              initialValue={email}
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue={password}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link style={{ float: "right" }} to="/">
                Forgot Password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "50%",
                  display: "block",
                  //backgroundColor: "#ec9326",
                }}
              >
                Log in
              </Button>
              Or <Link to="/register">Register</Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
