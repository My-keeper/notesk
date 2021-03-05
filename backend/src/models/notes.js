// /*
//     this area so we create the models for each route that will be 
//     called in the server so the info will get access in the server route
// */
 
const mongoose = require('mongoose')
   
const Note = mongoose.model('Note', {
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    }
})

module.exports = Note