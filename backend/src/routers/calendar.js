const express = require("express");
const CalendarEvents = require("../models/calendar");
const router = new express.Router();


router.post("/Calendar", async (req, res) => {
    const calendarEvents = new CalendarEvents(req.body); //take the info from the website and then save it in user
    //saving the info to the database and see if will match the info in the model or not
    try{
        await note.save();
        res.status(201).send(calendarEvents);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.get("/Calendar", async (req, res) => {
    try{
        const calendarEvents = CalendarEvents.find({}); //we can add the name of the note we are looking for inside the {}
        res.send(calendarEvents) 
    }catch(e){
        res.status(500).send(e);
    } 
});

module.exports = router;
