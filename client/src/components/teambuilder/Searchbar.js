import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FetchPlayer } from "../../actions/TeamBuilderAction";
import { setError } from "../../actions/ErrorActions";
import { Link } from "react-router-dom";

//antD
import { Form, Button, Input } from "antd";

const Searchbar = () => {
  const [formData, setFormData] = useState({
    Player: "",
    Flag: false,
  });

  const dispatch = useDispatch();

  return (
    <div>
      <Form
        style={{ maxWidth: "600px" }}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={() => {
          setFormData({ ...formData, Flag: true });
          const { Player } = formData;

          if (Player.length > 1) {
            dispatch(FetchPlayer(Player));
          } else {
            dispatch(setError("Please type a player name to get stats")); //Have its own section
          }
        }}
      >
        <Form.Item
          name="Player"
          rules={[
            {
              required: true,
              message: "Please input a players name!",
            },
          ]}
        >
          <Input
            placeholder="Type a Players Name"
            id="Player"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.id]: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" style={{ width: "50%" }}>
            Submit
          </Button>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Searchbar;
