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

    //for signup 
    static singUp (firstName, lastName, email, password, onSuccess, onFail) {

        return axios.post(`http://localhost:9000/Users`, {
            firstName : firstName,
            lastName ,
            email ,
            password,
        })
        .then((res)=>{
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            console.log(res)
            // onSuccess(res); 
        })
        .catch((e) => {
            // console.log(e.response.data)
            console.log(e)
            // onFail(e.response.data);
        })
    }

    //for checking if you are logged in 
    static isLoggedIn() {
        console.log(localStorage.getItem("token"))
        return axios.get('http://localhost:9000/Users/me', {
            headers: {Authorization: localStorage.getItem("token") },
        }).then(()=> {
            return true;
        }).catch(()=> {
            return false;
        })

    }

    //for login
    static login(email, password) {
        return axios.post('http://localhost:9000/login', {
            email,
            password
            }).then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                console.log(localStorage.setItem("user", JSON.stringify(res.data.user)))
                console.log(res)
            }).catch((e) => {
                console.log(e)
            })
    }

}
export default API