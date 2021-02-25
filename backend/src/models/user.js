/*
    this area so we create the models for each route that will be 
    called in the server so the info will get access in the server route

    The second argument of the mongoose model is turned to be the schema that 
    medware uses to for the backend 
*/
 
const mongoose = require('mongoose')
const validator = require('validator') 
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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
        unique: true, //to make sure there is no repeated email
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

//Created a findByCredentials so we can check if the user loggedin with the same credential that we have
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    console.log("we are here ")

    if (user) {
        console.log("it is the email")
        throw new Error('Unable to login')
    }
    
    //The first argument is the text password and the second is the hashed one to compare them 
    const isMatch = await bcrypt.compare( password, user.password)
    
    if (!isMatch) {
        console.log("it is the password")
        throw new Error('Unable to login')
    }

    return user
}

/*
    we are using function here becasue arrow function dont bind 
    We call next after we are done in the function and what it needs to do 
*/
userSchema.pre('save', async function (next) {
    //this give us acces to the user that is about to be saved 
    const user = this
    
    //Here we will be hashing the password
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('Users', userSchema)

module.exports = User