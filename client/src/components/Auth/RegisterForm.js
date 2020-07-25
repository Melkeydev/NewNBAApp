import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/AuthAction";
import { Redirect } from "react-router-dom";

//css
import "./css/RegisterForm.css";

//AntD
import {
  Form,
  Input,
  Checkbox,
  Button,
  Row,
  Col,
  PageHeader,
  Card,
} from "antd";

import { UserOutlined } from "@ant-design/icons";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const [registering, setRegistering] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const onSubmit = useCallback(async () => {
    if (registering) return;

    setRegistering(true);

    if (password === password2) {
      dispatch(register(formData));

      setRegistering(false);
    }
  }, [dispatch, formData, password, password2, registering]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Row type="flex" justify="center" className="RegisterForm">
      <Col span={6}>
        <Card className="CardRegisterForm">
          <PageHeader title="Register" subTitle="Create your account" />
          <Form
            //style={{ maxWidth: "600px" }}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onSubmit}
          >
            <label htmlFor="first_name">First Name</label>
            <Form.Item
              name="first_name"
              initialValue={first_name}
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
              onChange={(e) => onChange(e)}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="John"
                value={first_name}
                id="first_name"
              />
            </Form.Item>
            <Form.Item
              name="last_name"
              initialValue={last_name}
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
              onChange={(e) => onChange(e)}
            >
              <label htmlFor="last_name">Last Name</label>
              <Input
                prefix={<UserOutlined />}
                placeholder="Doe"
                value={last_name}
                id="last_name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              initialValue={email}
              rules={[
                {
                  required: true,
                  message: "Please input your email address!",
                },
              ]}
              onChange={(e) => onChange(e)}
            >
              <label htmlFor="email">Email</label>
              <Input
                prefix={<UserOutlined />}
                placeholder="John.Doe@mail.com"
                value={email}
                id="email"
              />
            </Form.Item>
            <label htmlFor="password">Password</label>
            <Form.Item
              name="password"
              initialValue={password}
              rules={[
                {
                  required: true,
                  message: "Type in a password!",
                },
              ]}
              onChange={(e) => onChange(e)}
            >
              <Input.Password
                placeholder="Password"
                value={password}
                id="password"
              />
            </Form.Item>

            <label htmlFor="password2">Repeat Password</label>
            <Form.Item
              name="password2"
              initialValue={password2}
              rules={[
                {
                  required: true,
                  message: "Confirm password",
                },
              ]}
              onChange={(e) => onChange(e)}
            >
              <Input.Password
                prefix={<UserOutlined />}
                placeholder="Confirm password"
                value={password2}
                id="password2"
              />
            </Form.Item>

            <Checkbox style={{ color: "#ec9326" }}>
              I have read the{" "}
              <a
                href="https://github.com/Amokstakov/NewNBAApp"
                style={{ color: "#ec9326" }}
              >
                agreement
              </a>
            </Checkbox>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "50%",
                  display: "block",
                  backgroundColor: "#ec9326",
                  borderColor: "#ec9326",
                }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
