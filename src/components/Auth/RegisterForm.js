import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { register } from "../../actions/AuthAction";
import { Redirect } from "react-router-dom";

export const RegisterForm = () => {
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
    } else {
      dispatch(register(formData));
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Redirect if Logged in
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            name="first_name"
            value={first_name}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            name="last_name"
            value={last_name}
            onChange={onChange}
          />
        </Form.Field>
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
        <Form.Field>
          <label>Repeat Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
