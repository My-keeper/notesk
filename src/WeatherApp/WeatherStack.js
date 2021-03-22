const axios = require('axios');

const params = {
    access_key: 'b5f9ccf619a080676d42d49c392a30c1',
    units: 'm'
}

const foreCast = (latitude, longitude, callback) => {
  axios.get('http://api.weatherstack.com/current?query=' + encodeURIComponent(latitude)+','+encodeURIComponent(longitude), {params})
  .then(response => {
    if(response.data.error) {
      callback('Unable to find Location !',undefined)
    }else{
      const ApiResponse = response.data;
      console.log(ApiResponse)
        callback(undefined,`Current temperature in ${ApiResponse.location.name} is ${ApiResponse.current.temperature} ℃`,ApiResponse.location.name);
      }
    })
    .catch(error => {
      if(error) {
        callback('Unable to connect to weather service!',undefined) 
        }
    } 
    );
}

module.exports = foreCast