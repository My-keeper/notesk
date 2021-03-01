const express = require("express");
const CalendarEvents = require("../models/calendar");
const Auth = require('../middleware/auth'); 
const router = new express.Router();

//Creating Calendar Event
router.post("/Calendar", Auth, async (req, res) => {
    /*
        take the info from the website and then save it in user
        This way the notes that will be created will be owned by a user
    */
    const calendarEvents = new Note({
        ... req.body,
        owner : req.user._id // passing down the user id to the Created now as we created that section in the model
    })
    //saving the info to the database and see if will match the info in the model or not
    try{
        await calendarEvents.save();
        res.status(201).send(calendarEvents);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.get("/Calendar", Auth, async (req, res) => {
    console.log(CalendarEvents.find({}));
    try{
        await req.user.populate('').execPopulate()
        const calendarEvents = await CalendarEvents.find({}); //we can add the name of the note we are looking for inside the {}
        res.send(calendarEvents) 
    }catch(e){
        res.status(500).send(e);
    } 
});

module.exports = router;
