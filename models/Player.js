import { Schema, model } from "mongoose";

const PlayerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  first_name: {
    type: String,
    required: true,
  },
  height_feet: {
    type: Number,
  },
  height_inches: {
    type: Number,
  },
  id: {
    type: Number,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  team: [
    {
      abbreviation: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      conference: {
        type: String,
        required: true,
      },
      division: {
        type: String,
        required: true,
      },
      full_name: {
        type: String,
      },
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
    },
  ],
  weight_pounds: {
    type: Number,
  },
});

const Player = model("player", PlayerSchema);
export default Player;
