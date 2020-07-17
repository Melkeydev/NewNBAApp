import { Schema, model } from "mongoose";

const PlayerStats = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  FG_Miss: {
    type: Number,
  },
  FT_Miss: {
    type: Number,
  },
  ast: {
    type: Number,
    required: true,
  },
  blk: {
    type: Number,
    required: true,
  },
  dreb: {
    type: Number,
    required: true,
  },
  fg3_pct: {
    type: Number,
    required: true,
  },
  fg3a: {
    type: Number,
    required: true,
  },
  fg3m: {
    type: Number,
    required: true,
  },
  fg_pct: {
    type: Number,
    required: true,
  },
  fga: {
    type: Number,
    required: true,
  },
  fgm: {
    type: Number,
    required: true,
  },
  ft_pct: {
    type: Number,
    required: true,
  },
  fta: {
    type: Number,
    required: true,
  },
  ftm: {
    type: Number,
    required: true,
  },
  games_played: {
    type: Number,
    required: true,
  },
  min: {
    type: String,
    required: true,
  },
  oreb: {
    type: Number,
    required: true,
  },
  pf: {
    type: Number,
    required: true,
  },
  player_id: {
    type: Number,
    required: true,
  },
  pts: {
    type: Number,
    required: true,
  },
  reb: {
    type: Number,
    required: true,
  },
  season: {
    type: Number,
    required: true,
  },
  stl: {
    type: Number,
    required: true,
  },
  turnover: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Stats = model("stat", PlayerStats);
export default Stats;
