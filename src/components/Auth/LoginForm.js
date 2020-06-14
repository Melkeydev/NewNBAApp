import React, { useState, useCallback } from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/AuthAction";
import { Redirect } from "react-router-dom";

export const LoginForm = () => {
  const { isLoggedIn } = useSelector(state =>  state.Auth);

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loggingIn, setLoggingIn ] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = useCallback(async e => {
    if (loggingIn) return;

    setLoggingIn(true);

    e.preventDefault();

    const formData = {
      email,
      password
    };

    await dispatch(login(formData));

    setLoggingIn(false);
  }, [dispatch, email, loggingIn, password]);

  if (isLoggedIn) return <Redirect to="/"/>;

  return (
    <Container>
      <Header as="h2">
        Login Form
        <Header.Subheader>
          Sign into your account
        </Header.Subheader>
      </Header>
      <Form loading={loggingIn} onSubmit={onSubmit}>
        <Form.Field>
          <label>Email</label>
          <input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};
