import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { FetchPlayer } from "../../actions/TeamBuilderAction";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [formData, setFormData] = useState({
    Player: "",
    Flag: false,
  });

  const dispatch = useDispatch();

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setFormData({ ...formData, Flag: true });
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
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default Searchbar;
