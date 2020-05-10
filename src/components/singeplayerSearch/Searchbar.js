import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { FetchPlayer } from "../../actions/SearchActions";
import LoadPlayerStats from "./LoadPlayerStats";

const Searchbar = () => {
  const [formData, setFormData] = useState({
    Player: "",
  });

  const dispatch = useDispatch();

  const { player } = useSelector((state) => state.Player);
  //const { stats } = useSelector((state) => state.Player);

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const { Player } = formData;
          dispatch(FetchPlayer(Player));
        }}
      >
        <FormGroup>
          <Label for="Player">Type Player Name</Label>
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
        </FormGroup>
      </Form>
      <div>{player ? <LoadPlayerStats player={player} /> : null}</div>
    </Container>
  );
};

export default Searchbar;
