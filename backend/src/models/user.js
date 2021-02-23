// /*
//     this area so we create the models for each route that will be 
//     called in the server so the info will get access in the server route
// */
 
const mongoose = require('mongoose')
const validator = require('validator') 


const User = mongoose.model('Users', {
    firstName: {
    type: String, 
    required: true,
    trim: true
    },
    lastName: {
        type: String, 
        trim: true,
        required: true,
    },
    // userName: {
    //     type: String, 
    //     trim: true,
    //     required: true,
    // },
    email: {
        type: String, 
        required: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
            throw new Error('Email is invalid')
            }
        },
        trim: true
    },
    password: {
        type: String, 
        required: true,
        min: 8,
        // validate(value) {
        //   if(!validator.isStrongPassword(value)){
        //     throw new Error('Password is not strong')
        //   }  
        // },
        trim: true,
    },
    // country: {
        // type: String, 
        // trim: true,
        // required: true,
    // },
    // province: {
    //     type: String, 
    //     trim: true,
    //     required: true,
    // },
    // city: {
    //     type: String, 
    //     trim: true,
    //     required: true,
    // },
    // ZipCode: {
    //     type: String, 
    //     required: true,
    //     trim: true,
    //     min: 5,
    // },
    age: {
        type: Number,
        default: 1,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})

module.exports = User