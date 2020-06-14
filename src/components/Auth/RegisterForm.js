import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Header, Form, Button, Checkbox } from "semantic-ui-react";
import { register } from "../../actions/AuthAction";
import { Redirect } from "react-router-dom";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.Auth);

  const [ registering, setRegistering ] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const onSubmit = useCallback(async e => {
    e.preventDefault();

    if (registering) return;

    setRegistering(true);

    if (password === password2) {
      await dispatch(register(formData));

      setRegistering(false);
    }
  }, [dispatch, formData, password, password2, registering]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoggedIn) return <Redirect to="/"/>;

  return (
    <Container>
      <Header as="h2">
        Register Form
        <Header.Subheader>
          Create your account
        </Header.Subheader>
      </Header>
      <Form onSubmit={onSubmit} loading={registering}>
        <Form.Field>
          <label>First Name</label>
          <input
            name="first_name"
            value={first_name}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="last_name"
            value={last_name}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            value={email}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Repeat Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};
