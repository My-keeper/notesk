// /*
//     this area so we create the models for each route that will be 
//     called in the server so the info will get access in the server route
// */
 
const mongoose = require('mongoose')
   
const Calendar = mongoose.model('CalendarEvents', {
    id: {
        type: String, 
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    url: {
        type: String 
    },
    start: {
        type: String, 
        required: true
    },
    end: {
        type: String, 
        required: true
    },
    daysOfWeek: {
        type: String, 
        required: true
    },
    display: {
        type: String, 
        required: true
    },
    textColor: {
        type: String, 
        required: true
    }
})

module.exports = Calendar