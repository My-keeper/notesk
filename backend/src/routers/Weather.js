const express = require('express');
const router = new express.Router();
const foreCast = require('../../../src/WeatherApp/WeatherStack');
const GeoCode = require('../../../src/WeatherApp/GeoCoding');


router.get('/weather', (req, res) => {
    
    try{
        console.log(req)
        // GeoCode( req.query.city ,req.query.province ,req.query.country ,Callback =>{
        //     console.log(req.query)
        //     if(!Callback.latitude || !Callback.longitude){
        //         return res.send({error: 'please enter an address'})
        //     }
        //     foreCast(Callback.latitude , Callback.longitude , (error, foreCastData,loc)=>{
        //         res.send({
        //             forcast: foreCastData,
        //             location: loc,
        //             address: req.query.address
        //         })
        //     })
        // })

    }catch(e) {
        if(e){
            res.send(e)
        }
    }
})

module.exports = router;