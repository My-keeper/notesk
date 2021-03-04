const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const sendWelcomeEmail = require('../emails/acount')

//SignUp
router.post("/Users", async (req, res) => {
  const user = new User(req.body); //take the info from the website and then save it in user
  //saving the info to the database and see if will match the info in the model or not
  try{
    await user.save();
    sendWelcomeEmail(user.email, user.firstName, user.lastName)
    /*
    *  Creating a function that we can reuse whenever we want to generate an authentication 
    *  token for a given user where it will be called in user model
    */
    const token = await user.generateAuthToken()
    res.status(201).send({ user , token });
  }catch(e){
    res.status(400).send(e)
  } 
});
//SignIn
router.post("/Users/login", async (req, res) => {
  
  try{
    //requesting email and password from User . findByCredentials and then return them back 
    const user = await User.findByCredentials(req.body.email, req.body.password)
    /*
    *  Creating a function that we can reuse whenever we want to generate an authentication 
    *  token for a given user where it will be called in user model
    */
    const token = await user.generateAuthToken()
    res.send({ user , token}); //using curly braces to send two or more properties
  }catch(e) {
    res.status(400).send()
  }

})
//Logout
router.post("/Users/logout", auth , async (req,res) => {
  
  try{
    //this to logout from one machine 
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send("now you are logged out ")
  } catch (e) {
    res.status(500).send()
  }

})
//Logout from all
router.post("/Users/logoutAll", auth , async (req,res) => {
  
  try{
    //this to logout from all machine 
    req.user.tokens = [] //return empty array for that user 
    await req.user.save()
    res.status(200).send("now you are logged out from all machines ")
  } catch (e) {
    res.status(500).send()
  }

})
//For user profile profile 
router.get("/Users/me", auth , async (req, res) => {
  //return the information about the user when they are authenticated 
  res.send(req.user) 
});

module.exports = router