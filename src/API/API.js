import axios from "axios"

class API {
    static WeatherApp (location) {
        return axios.get(`http://localhost:9000/weather?address=${location}`)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

}
export default API