const express = require('express');
const router = express.Router();
const { Anime } = require("../models")

router.get('/', async (req, res) => {
    const listOfAnime = await Anime.findAll()
    res.json(listOfAnime)
});

router.post('/', async (req, res) => {
    const animeBody = req.body;
    await Anime.create(animeBody);
    res.json(animeBody)
})

module.exports = router;