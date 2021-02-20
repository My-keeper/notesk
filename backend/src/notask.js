const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Note = require('./models/notes')

const app = express()
//to either have the application run either on hurokuapp or our localhost port 
const port = process.env.PPORT || 9000

//this part to customize our server and then change the incoming info to be read using the following command 
//it pasrse our json to an object so we can access in our request handler 
app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body) //take the info from the website and then save it in user

    //saving the info to the database and see if will match the info in the model or not 
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/Notes', (req, res) => {
    const note = new Note(req.body) //take the info from the website and then save it in user
    //saving the info to the database and see if will match the info in the model or not 
    note.save().then(() => {
        res.send(note)
    }).catch((e) => {
        res.status(400).send(e)
    })
})


app.listen(port , () => {
    console.log("Server is up and Running on port " + port)
})