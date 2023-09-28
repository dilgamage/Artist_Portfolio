const router = require("express").Router();
const Artist = require("../models/Artist");
const express = require('express');


http://Localhost:8070/portfolio/view/77ghdh7387g7ye63

router.get('/', async (req, res) => {
  try {
    const artist = await Artist.find();
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

http://Localhost:8070/portfolio/add/77ghdh7387g7ye63

router.post('/', async (req, res) => {
  const Artists = new Artists(req.body);

  try {
    const SavedArtist = await Artists.save();
    res.status(201).json(SavedArtist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
