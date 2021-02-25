const express = require('express')
const User = require('../models/user')
const router = new express.Router()

//SignUp
router.post("/Users", async (req, res) => {
  const user = new User(req.body); //take the info from the website and then save it in user
  //saving the info to the database and see if will match the info in the model or not
  try{
      await user.save();
      res.status(201).send(user);
  }catch(e){
      res.status(400).send(e)
  } 
});
//SignIn
router.post("/Users/login", async (Req, res) => {
  try{
    const user = await User.findByCredentials(req.body.email, req.body.password)
    res.send(user)
  } catch (e) {
    res.status(400).send()
  }

})


router.get("/Users", async (req, res) => {
  //we can add the name of the User we are looking for inside the {}
  try{
      const users = await User.find({})
      res.send(users)
  }catch(e){
      res.status(500).send(e)
  } 
});
// we are missing finding user using the email and updaing user if needed and deleteing user 
//there is  a prob with meddlewear for fixing watch video 104 at 9 mins 

//for updating 
// router.patch("/Users/:email", async (Req, res) => {
//   const updates = Object.keys
  
  
// })

module.exports = router