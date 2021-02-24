const express = require("express");
const Note = require("../models/notes");
const router = new express.Router();

router.post("/Notes", async (req, res) => {
  const note = new Note(req.body); //take the info from the website and then save it in user
  //saving the info to the database and see if will match the info in the model or not
  try{
    await note.save();
    res.status(201).send(note)
  }catch(e){
    res.status(400).send(e)
  }
});

router.get("/Notes", async (req, res) => {
    try{
        const notes = await Note.find({})
        res.send(notes)
    }catch(e){
        res.status(500).send(e)
    }
});


module.exports = router;