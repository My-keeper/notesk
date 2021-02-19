const mongoose = require("mongoose");
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/notask-Test', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const UserSignup = mongoose.model('UserSignup', {
    firstName: {
        type: String, 
        required: true,
        trim: true
    },
    // lastName: {
    //     type: String, 
        // trim: true,
    //     required: true,
    // },
    // userName: {
    //     type: String, 
        // trim: true,
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
    passWord: {
        type: String, 
        required: true,
        min: 8,
        validate(value) {
          if(!validator.isStrongPassword(value)){
            throw new Error('Password is not strong')
          }  
        },
        trim: true
    },
    // country: {
    //     type: String, 
        // trim: true,
    //     required: true,
    // },
    // province: {
    //     type: String, 
        // trim: true,
    //     required: true,
    // },
    // city: {
    //     type: String, 
        // trim: true,
    //     required: true,
    // },
    // ZipCode: {
    //     type: String, 
    //     required: true,
        // trim: true,
    //     min: 5,
    // },
    age: {
        type: Number
    }
})

const me = new UserSignup({
    firstName: 'MEPIADSKMFO   ',
    email: "mASNKDKSero@mun.com  ",
    passWord: "password  ",
    age: '23'
})


me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error!", error);
  }); 