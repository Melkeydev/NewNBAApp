import { Schema, model } from "mongoose";

const PlayerStats = new Schema({
  FG_Miss: {
    type: Number,
    required: true,
  },
  FT_Miss: {
    type: Number,
    required: true,
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
});

const PlayerStats = model("stat", PlayerStats);
export default PlayerStats;
