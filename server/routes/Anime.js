const express = require("express");
const router = express.Router();
const { Anime } = require("../models");
const { Op } = require("sequelize");
const { CognitoJwtVerifier } = require("aws-jwt-verify");

// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: "us-west-1_ouFArkh6J",
  tokenUse: "access",
  clientId: "7haritsra4ojvce0ln0p12ar66",
});

async function verifyToken(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Missing authorization header" });
  }
  const token = authHeader.split(' ')[1];
  try {
    const token = authHeader.split(" ")[1];
    await verifier.verify(token);
    next();
  } catch (err) {
    return res.status(401).send({ message: "Invalid token", token: token, error: err });
  }
}

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
router.post("/", verifyToken, async (req, res) => {
  const animeBody = req.body;
  await Anime.create(animeBody);
  res.json(animeBody);
});

module.exports = router;
