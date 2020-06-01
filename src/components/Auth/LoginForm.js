import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/AuthAction";
import { Redirect } from "react-router-dom";

export const LoginForm = () => {
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const [formData, setFormData] = useState({
    email: "minsin45@twitch.com",
    password: "peninie",
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password } = formData;

  //Redirect if Logged in
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
