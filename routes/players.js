import { Router } from "express";
import auth from "../middleware/authentication";
import { check, validationResult } from "express-validator";
import Stats from "../models/PlayerStats";
import User from "../models/User";

//Import Player Schema
import Player from "../models/Player";

/**
 * @Route POST routes/players
 * @desc save player
 * @access Public
 */

const router = Router();

router.post(
  "/",
  [
    auth,
    [
      check("first_name", "first name not present").not().isEmpty(),
      check("id", "id not found").not().isEmpty(),
      check("last_name", "last name not present").not().isEmpty(),
      check("position", "position not present").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    //Validate Errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = await User.findById(req.user.id).select("-password");

    //Deconstruct variables from request body
    const {
      first_name,
      height_feet,
      height_inches,
      id,
      last_name,
      position,
      team: { abbreviation, city, conference, division, full_name, name },
      weight_pounds,
    } = req.body;

    //Build Player Profile
    const player = { user };
    if (first_name) player.first_name = first_name;
    if (height_feet) player.height_feet = height_feet;
    if (height_inches) player.height_inches = height_inches;
    if (id) player.id = id;
    if (last_name) player.last_name = last_name;
    if (position) player.position = position;
    if (weight_pounds) player.position = weight_pounds;

    //Build Team Profile within Player Object
    player.team = {};
    if (abbreviation) player.team.abbreviation = abbreviation;
    if (city) player.team.city = city;
    if (conference) player.team.conference = conference;
    if (division) player.team.division = division;
    if (full_name) player.team.full_name = full_name;
    if (name) player.team.name = name;

    //Check profile if id exists within DB already for user profile
    try {
      let profile = await Player.findOne({ user: req.user.id });
      if (profile) {
        if (profile.id === player.id) {
          return res
            .status(400)
            .json({ errors: [{ msg: "User already exists" }] });
        }
      }

      //Create new player profile
      profile = new Player(player);

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

/**
 * @Route GET routes/players
 * @desc GET player by user ID
 * @access Private
 */

//Find all players bya users Id
router.get("/", auth, async (req, res) => {
  try {
    const players = await Player.find({ user: req.user.id });
    const stats = await Stats.find({
      player_id: players.map((player) => player.id),
    });

    let playersWithStats = players.reduce((acc, player) => {
      return [
        ...acc,
        {
          ...player.toObject(),
          stats: stats.filter((stat) => stat.player_id == player.id),
        },
      ];
    }, []);

    res.json(playersWithStats);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
