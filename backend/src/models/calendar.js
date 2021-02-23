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
<<<<<<< HEAD
        type: String, 
        minlength: 1,
=======
        type: String 
>>>>>>> 5b9e18db3ed6504bd537c74a070e4d37d074ae38
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