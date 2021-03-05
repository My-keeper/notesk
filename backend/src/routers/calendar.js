const express = require("express");
const CalendarEvents = require("../models/calendar");
const auth = require('../middleware/auth'); 
const router = new express.Router();

//Creating Calendar Event
router.post("/Calendar",auth, async (req, res) => {
    /*
        take the info from the website and then save it in user
        This way the notes that will be created will be owned by a user
    */
    const calendarEvents = new CalendarEvents({
        ... req.body,
        owner : req.user._id // passing down the user id to the Created now as we created that section in the model
    }) 
    try{
        await calendarEvents.save();
        res.status(201).send(calendarEvents);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.get("/Calendar",auth , async (req, res) => {
    try{
        // await req.user.populate('calendarEvent').execPopulate()
        const calendarEvents = await CalendarEvents.find({owner: req.user._id}); //we can add the name of the note we are looking for inside the {}
        res.send(calendarEvents) 
    }catch(e){
        res.status(500).send(e);
    } 
});

router.patch ("/Calendar/:id",auth , async (req, res) => {
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
      const calendar = await CalendarEvents.findOne({ _id: req.params.id, owner: req.user._id}); 
      
      //no calendar
      if (!calendar) {
        return res.status(404).send()
      }
      updates.forEach((update) => calendar[update] = req.body[update])
      await calendar.save()
      res.send(calendar)
    }catch(e){
        res.status(400).send(e)
    }
  });

  router.delete("/Calendar/:id", auth , async (req, res) => {
    try{
      console.log(req.params.id)
      console.log(req.user._id)
      // const calendar = await CalendarEvents.findByIdAndDelete({ _id: req.params.id, owner: req.user._id}); 
      const calendar = await CalendarEvents.findByIdAndDelete({ _id: req.params.id, owner: req.user._id}); 
      console.log(calendar)
  
      if (!calendar) {
        return res.status(404).send()
      }
  
      res.send(calendar)
    } catch (e) {
      res.status(500).send()
    }
  })

module.exports = router;
