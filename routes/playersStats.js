import { Router } from "express";
import auth from "../middleware/authentication";
require("dotenv").config();
import Stats from "../models/PlayerStats";

const router = Router();

/**
 * @Route POST api/Stats
 * @desc POST Players stats into DB
 * @access private
 * */

router.post("/", async (req, res) => {
  const {
    FG_Miss,
    FT_Miss,
    ast,
    blk,
    dreb,
    fg3_pct,
    fg3a,
    fg3m,
    fg_pct,
    fga,
    fgm,
    ft_pct,
    fta,
    ftm,
    games_played,
    min,
    oreb,
    pf,
    player_id,
    pts,
    reb,
    season,
    stl,
    turnover,
  } = req.body;

  try {
    let playerStats = await Stats.findOne({ player_id });
    if (playerStats) {
      return res
        .status(400)
        .json({ errors: [{ msg: "This player is already in the database" }] });
    }
    playerStats = new Stats({
      FG_Miss,
      FT_Miss,
      ast,
      blk,
      dreb,
      fg3_pct,
      fg3a,
      fg3m,
      fg_pct,
      fga,
      fgm,
      ft_pct,
      fta,
      ftm,
      games_played,
      min,
      oreb,
      pf,
      player_id,
      pts,
      reb,
      season,
      stl,
      turnover,
    });
    await playerStats.save();
    return res.status(418).json(playerStats);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

export default router;
