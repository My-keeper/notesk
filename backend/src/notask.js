const express = require('express')
require('./db/mongoose')
<<<<<<< HEAD
const UserRouter = require('./routers/user');
const NoteRouter = require('./routers/notes')
const CalendarEventsRouter = require("./routers/calendar");
=======
const User = require("./models/user");
const Note = require('./models/notes')
const CalendarEvents = require('./models/calendar')
<<<<<<< HEAD
=======
>>>>>>> master

>>>>>>> 5b9e18db3ed6504bd537c74a070e4d37d074ae38

const app = express()
//to either have the application run either on hurokuapp or our localhost port 
const port = process.env.PPORT || 9000

//this part to customize our server and then change the incoming info to be read using the following command 
//it pasrse our json to an object so we can access in our request handler 
app.use(express.json())
<<<<<<< HEAD
app.use(UserRouter);
app.use(NoteRouter);
app.use(CalendarEventsRouter);
=======

app.post('/Users', (req, res) => {
    const user = new User(req.body) //take the info from the website and then save it in user
    //saving the info to the database and see if will match the info in the model or not 
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get("/Users", (req, res) => {
    //we can add the name of the User we are looking for inside the {}
  User.find({}).then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.post('/Notes', (req, res) => {
    const note = new Note(req.body) //take the info from the website and then save it in user
    //saving the info to the database and see if will match the info in the model or not 
    note.save().then(() => {
        res.send(note)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

<<<<<<< HEAD
app.post('/CalendarEvents', (req, res) => {
    const calendarEvents = new CalendarEvents(req.body) //take the info from the website and then save it in user
    //saving the info to the database and see if will match the info in the model or not 
    calendarEvents.save().then(() => {
=======
app.get('/Notes', (req, res) => {
    Note.find({}) //we can add the name of the note we are looking for inside the {}
      .then((Notes) => {
        res.send(Notes);
      })
      .catch((e) => {
        res.status(500).send(e);
      });
})

app.post('/Calendar', (req, res) => {
    const calendarEvents = new CalendarEvents(req.body); //take the info from the website and then save it in user
    //saving the info to the database and see if will match the info in the model or not 
    note.save().then(() => {
>>>>>>> 5b9e18db3ed6504bd537c74a070e4d37d074ae38
        res.send(calendarEvents)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

<<<<<<< HEAD
=======
app.get("/Calendar", (req, res) => {
  CalendarEvents.find({}) //we can add the name of the note we are looking for inside the {}
    .then((CalendarList) => {
      res.send(CalendarList);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
>>>>>>> master

>>>>>>> 5b9e18db3ed6504bd537c74a070e4d37d074ae38

app.listen(port , () => {
    console.log("Server is up and Running on port " + port)
})