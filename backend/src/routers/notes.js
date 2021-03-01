const express = require("express");
const Note = require("../models/notes");
const Auth = require('../middleware/auth'); 
const router = new express.Router();

router.post("/Notes", Auth, async (req, res) => {
  /*
    take the info from the website and then save it in user
    This way the notes that will be created will be owned by a user
  */
  const note = new Note({
    ... req.body,
    owner : req.user._id // passing down the user id to the Created now as we created that section in the model
  })
  //saving the info to the database and see if will match the info in the model or not
  try{
    await note.save();
    res.status(201).send(note)
  }catch(e){
    res.status(400).send(e)
  }
});

router.get("/Notes", Auth, async (req, res) => {
    try{
      //this is to make sure that the notes is returned is from the same user 
        // const notes = await Note.find({owner : req.user._id})
        await req.user.populate('notes').execPopulate()
        console.log(req.user)
        res.send(req.user.notes)
    }catch(e){
        res.status(500).send(e)
    }
});
//updating the info and deleteing the info should be added to both the note and calendar route 

module.exports = router;