import React, { useState } from "react";
import { Form, Input, Container, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  FetchPlayer,
  setError,
  removeStatesSingle,
} from "../../actions/SingleSearchActions";
import PlayerStats from "./PlayerStats";

const Searchbar = () => {
  const [formData, setFormData] = useState({
    Player: "",
    Flag: false,
  });

  const { Flag } = formData;

  const dispatch = useDispatch();

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setFormData({ ...formData, Flag: true });
          const { Player } = formData;

          if (Player.length > 1) {
            dispatch(FetchPlayer(Player));
          } else {
            dispatch(setError());
            dispatch(removeStatesSingle());
          }
        }}
      >
        <Form.Field>
          <label for="Player">Type Player Name</label>
          <Input
            type="text"
            name="Player"
            id="Player"
            placeholder="Player Name"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
          <Button className="btn btn-primary">Submit</Button>
          <Link to="/">
            <Button onClick={() => dispatch(removeStatesSingle())}>Home</Button>
          </Link>
        </Form.Field>
      </Form>

      <div>{Flag ? <PlayerStats /> : null}</div>
    </Container>
  );
};

export default Searchbar;
