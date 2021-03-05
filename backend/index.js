const express = require('express')
const path = require('path')
const foreCast = require('./src/WeatherApp/WeatherStack');
const cors = require('cors');


const app = express()
const PublicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(PublicDirectoryPath))
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* this is for what the server should do when the user want to get resourse from the URL like sending back html or jason 
    when visiting the route then the function will tell what send back to them, req: info about in coming request to the server 
    res: contain some methods allowing us to customize what will be sent back 
*/
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error: 'please enter an address'})
    }
    foreCast(req.query.address , (error, foreCastData,loc)=>{
        console.log(foreCastData)
        res.send({
            forcast: foreCastData,
            location: loc,
            address: req.query.address
        })
    })
})

app.listen(9000,()=>{
    console.log('the server is up and running')
})
