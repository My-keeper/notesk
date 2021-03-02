const express = require("express");
const Note = require("../models/notes");
const Auth = require('../middleware/auth'); 
const router = new express.Router();

router.post("/Notes", async (req, res) => {
  /*
    take the info from the website and then save it in user
    This way the notes that will be created will be owned by a user
  */
  // const note = new Note({
  //   ... req.body,
  //   owner : req.user._id // passing down the user id to the Created now as we created that section in the model
  // })
  //saving the info to the database and see if will match the info in the model or not
  const note = new Note(req.body)
  try{
    await note.save();
    res.status(201).send(note)
  }catch(e){
    res.status(400).send(e)
  }
});

router.get("/Notes", async (req, res) => {
    try{
      //this is to make sure that the notes is returned is from the same user 
        // const notes = await Note.find({owner : req.user._id})
        // await req.user.populate('notes').execPopulate()
        const note = await Note.find({}); //we can add the name of the note we are looking for inside the {}
        res.send(note)
    }catch(e){
        res.status(500).send(e)
    }
});

router.patch ("/Notes/:id", async (req, res) => {
  /*
    converting my object to an array with propirities 
    take the object and key will return an array of strings 
  */
  const updates = Object.keys(req.body)
  //allawing what can be updated
  const allowedUpdates = ["title" , "content"]
  /*
    to track if the item that is updated is inside the allowed ipdate 
    using array method {"every()"} to check each item in updates if one of the updated
    item is returning false then every will return false 
  */
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
  //checking if it is a valid operation 
  if (!isValidOperation) {
    return res.status(400).send({ ERROR: "invalid updates !"})
  }

  try{
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    //no note
    if (!note) {
      return res.status(404).send()
    }

    res.send(note)
  }catch(e){
      res.status(400).send(e)
  }
});

router.delete("/Notes/:id", async (req, res) => {
  try{
    const note = await Note.findByIdAndDelete(req.params.id)

    if (!note) {
      return res.status(404).send()
    }

    res.send(note)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router;