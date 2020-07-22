import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/AuthAction";
import { Redirect } from "react-router-dom";

//AntD
import { Form, Input, Checkbox, Button, Row, Col, PageHeader } from "antd";

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
    <Row
      type="flex"
      justify="center"
      style={{ minHeight: "100vh", paddingTop: "5%" }}
    >
      <Col span={12}>
        <PageHeader title="Register" subTitle="Create your account" />
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
              placeholder="First Name"
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
            <Input
              prefix={<UserOutlined />}
              placeholder="Last Name"
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
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              value={email}
              id="email"
            />
          </Form.Item>
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

          <Checkbox>
            I have read the{" "}
            <a href="https://github.com/Amokstakov/NewNBAApp">agreement</a>
          </Checkbox>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "50%", display: "block" }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
