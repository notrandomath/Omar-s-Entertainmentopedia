const express = require("express");
const router = express.Router();
const { Anime } = require("../models");
const { Op } = require("sequelize");
const { CognitoJwtVerifier } = require("aws-jwt-verify");

// Verifier that expects valid access tokens:
const jwtVerifier = CognitoJwtVerifier.create({
  userPoolId: "us-west-1_ouFArkh6J",
  tokenUse: "access",
  clientId: "7haritsra4ojvce0ln0p12ar66",
});

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
  try {
    // A valid JWT is expected in the HTTP header "authorization"
    await jwtVerifier.verify(req.header("authorization").split(' ')[1]);
  } catch (err) {
    return res.status(403).json({ statusCode: 403, message: err + '' });
  }
  await Anime.create(animeBody);
  res.json(animeBody);
});

module.exports = router;
