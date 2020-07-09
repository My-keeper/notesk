const axios = require('axios');
const params = {
    access_key: 'b5f9ccf619a080676d42d49c392a30c1',
    units: 'm'
}
const foreCast = (address, callback) => {
  axios.get('http://api.weatherstack.com/current?query=' + encodeURIComponent(address), {params})
  .then(response => {
    console.log(response.data)
      if(response.data.error) {
        callback('Unable to find Location !',undefined)
      }else{
        const ApiResponse = response.data;
        callback(undefined,`Current temperature in ${ApiResponse.location.name} is ${ApiResponse.current.temperature} ℃`,ApiResponse.location.name);
      }
    })
    .catch(error => {
      if(error) {
        callback('Unable to connect oto weather service!',undefined) 
        }
    } 
    );
}
module.exports = foreCast