const express = require("express");
const router = express.Router();
const { Anime } = require("../models");
const { Op } = require("sequelize");

//needs a json with one field called search that has some string to search for
router.get("/:search", async (req, res) => {
  const listOfAnime = await Anime.findAll({
    where: {
      title: {
        [Op.like]: `%${req.params.search}%`,
      },
    },
  });
  res.json(listOfAnime);
});

//needs a json with each corresponding field of the sql table
router.post("/", async (req, res) => {
  const animeBody = req.body;
  await Anime.create(animeBody);
  res.json(animeBody);
});

module.exports = router;
