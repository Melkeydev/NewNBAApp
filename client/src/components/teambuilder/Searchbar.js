import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { FetchPlayer, removeStates } from "../../actions/TeamBuilderAction";
import { setError } from "../../actions/ErrorActions";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [formData, setFormData] = useState({
    Player: "",
    Flag: false,
  });

  const dispatch = useDispatch();

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setFormData({ ...formData, Flag: true });

          const { Player } = formData;
          if (Player.length > 1) {
            dispatch(FetchPlayer(Player));
          } else {
            dispatch(setError("Please type a player name to get stats"));
          }
        }}
      >
        <Form.Field>
          <label>Type Player Name</label>
          <Input
            type="text"
            name="Player"
            id="Player"
            placeholder="Player Name"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
          />
          <Button type="submit" style={{ marginTop: "10px" }}>
            Submit
          </Button>
          <Link to="/">
            <Button
              style={{ marginTop: "10px" }}
              onClick={() => dispatch(removeStates())}
            >
              Home
            </Button>
          </Link>
        </Form.Field>
      </Form>
    </div>
  );
};

export default Searchbar;
