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
            onSuccess(res)
        })
        .catch((e) => { 
            onFail(e) 
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
    static login(email, password, onSuccess, onFail) {
        console.log(localStorage)
        return axios.post('http://localhost:9000/Users/login', {
            email,
            password
            }).then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user)); 
                console.log(res)
                onSuccess(res)
            }).catch((e) => {
                console.log("there is a prob")
                onFail(e)
            })
    }

    //For one machine logout 
    static Logout(onSuccess, onFail) { 
        return axios.post('http://localhost:9000/Users/logout',{
            headers: {Authorization: localStorage.getItem("token") },
        }).then((res) => {
            console.log("you are logged Out")
            onSuccess(res);
        }).catch((e) => {
            console.log("there is a prob")
            onFail(e)
        })
    }

    //For all machine logout 
    // static LogoutAll() {

    // }

    /***************************    Notes  ************************************************/
    //Create Note 
    static CreateNote(title, content,onSuccess) {
        return axios
            .post('http://localhost:9000/Notes', {
                title,
                content
            }, {
                headers: {Authorization: localStorage.getItem("token") },
            }).then((res) => {
                // localStorage.setItem("id_note", res.data._id)
                onSuccess(res.data)
                console.log(res)
            }).catch((e) => {
                console.log(e)
            })
    }
    //Get Note 
    static GetNote() {
        return axios
            .get('http://localhost:9000/Notes',{
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
    //Change Note 
    static UpdateNote(id) {  
        return axios
            .patch('http://localhost:9000/Notes',{
                id,
            },{
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
    //Delete Note 
    static UpdateNote(id) {
        return axios
            .delete('http://localhost:9000/Notes',{
                id,
            },{
                headers: {Authorization: localStorage.getItem("token") },
            }).catch((e) => {
                console.log(e)
            })
    }
}
export default API