// /*
//     this area so we create the models for each route that will be 
//     called in the server so the info will get access in the server route
// */
 
const mongoose = require('mongoose')
   
const Calendar = mongoose.model('CalendarEvents', {
    id: {
        type: Number, 
        required: true
    },
    title: {
        type: String, 
        required: true,
        minlength: 1,
    },
    description: {
        type: String, 
        required: true,
        minlength: 1,
    },
    url: {
        type: String, 
        minlength: 1,
    },
    start: {
        type: String, 
        required: true
    },
    end: {
        type: String, 
        required: true
    },
    // daysOfWeek: {
    //     type: String
        
    // },
    // display: {
    //     type: String
    // },
    // textColor: {
    //     type: String
    // }
})

module.exports = Calendar