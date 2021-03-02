const express = require("express");
const CalendarEvents = require("../models/calendar");
const Auth = require('../middleware/auth'); 
const router = new express.Router();

//Creating Calendar Event
router.post("/Calendar", async (req, res) => {
    /*
        take the info from the website and then save it in user
        This way the notes that will be created will be owned by a user
    */
    // const calendarEvents = new Note({
    //     ... req.body,
    //     owner : req.user._id // passing down the user id to the Created now as we created that section in the model
    // })
    const calendarEvents = new CalendarEvents(req.body)
    //saving the info to the database and see if will match the info in the model or not
    try{
        await calendarEvents.save();
        res.status(201).send(calendarEvents);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.get("/Calendar", async (req, res) => {
    try{
        // await req.user.populate('').execPopulate()
        const calendarEvents = await CalendarEvents.find({}); //we can add the name of the note we are looking for inside the {}
        res.send(calendarEvents) 
    }catch(e){
        res.status(500).send(e);
    } 
});

router.patch ("/Calendar/:id", async (req, res) => {
    /*
      converting my object to an array with propirities 
      take the object and key will return an array of strings 
    */
    const updates = Object.keys(req.body)
    //allawing what can be updated
    const allowedUpdates = ["title" , "description", "url", "start", "end", "daysOfWeek", "display", "textColor"]
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
        console.log(req.params.id)
      const calendar = await CalendarEvents.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  
      //no calendar
      if (!calendar) {
        return res.status(404).send()
      }
  
      res.send(calendar)
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
