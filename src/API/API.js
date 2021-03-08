import axios from "axios"

class API {
    static WeatherApp(location) {
        return axios
        .get(`http://localhost:9000/weather?address=${location}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  /***************************    SignUp  ************************************************/
    //for signup
    static singUp(firstName, lastName, email, password, onSuccess, onFail) {
        return axios
        .post(`http://localhost:9000/Users`, {
            firstName: firstName,
            lastName,
            email,
            password,
        })
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            onSuccess(res);
        })
        .catch((e) => {
            onFail(e);
        });
    }

  /***************************  LogIn  ************************************************/
    //for checking if you are logged in
    static isLoggedIn() {
        return axios
        .get("http://localhost:9000/Users/me", {
            headers: { Authorization: localStorage.getItem("token") },
        })
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
    }

    //for login
    static login(email, password, onSuccess, onFail) {
        return axios
        .post("http://localhost:9000/Users/login", {
            email,
            password,
        })
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            console.log(res);
            onSuccess(res);
        })
        .catch((e) => {
            console.log("there is a prob");
            onFail(e);
        });
    }

  /***************************  LogOut  ************************************************/
    //For one machine logout
    static Logout() {
        console.log(localStorage.getItem("token"));
        return axios
        .post("http://localhost:9000/Users/logout", {
            Headers: { Authorization: localStorage.getItem("token") },
        })
        .then(( ) => {
            console.log("you are logged Out");
        })
        .catch(( ) => {
            console.log("there is a prob");
        });
    }

    //For all machine logout
    // static LogoutAll() {

    // }

  /***************************    Notes  ************************************************/
    //Create Note
    static CreateNote(title, content) {
        return axios
        .post(
            "http://localhost:9000/Notes",
            {
            title,
            content,
            },
            {
            headers: { Authorization: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            localStorage.setItem("id", res.data._id);
        })
        .catch((e) => {
            console.log(e);
        });
    }
    //Get Note
    static GetNote() {
        return axios
        .get("http://localhost:9000/Notes", {
            headers: { Authorization: localStorage.getItem("token") },
        })
        .catch((e) => {
            console.log(e);
        });
    }
    //Change Note
    static UpdateNote(id) {
        return axios
        .patch(
            "http://localhost:9000/Notes",
            {
            id,
            },
            {
            headers: { Authorization: localStorage.getItem("token") },
            }
        )
        .catch((e) => {
            console.log(e);
        });
    }
    //Delete Note
    static DeleteNote(id) {
        return axios
        .delete(
            "http://localhost:9000/Notes",
            {
            id,
            },
            {
            headers: { Authorization: localStorage.getItem("token") },
            }
        )
        .catch((e) => {
            console.log(e);
        });
    }

  /***************************    Calendars  ************************************************/
    //Create Events
    static CreateEvent(id, title, deescription, url, start, end) {
        return axios
          .post(
            "http://localhost:9000/Calendar",
            {
              id,
              title,
              deescription,
              url,
              start,
              end,
            },
            {
              headers: { Authorization: localStorage.getItem("token") },
            }
          )
          .then((res) => {
            localStorage.setItem("id", res.data._id);
          })
          .catch((e) => {
            console.log(e);
          });
    }
    //Get Events
    static GetEvents(){
        return axios
          .get("http://localhost:9000/Calendar", {
            headers: { Authorization: localStorage.getItem("token") },
          })
          .catch((e) => {
            console.log(e);
          });
    }
    //Change Events
    static UpdateEvents(id){
        return axios
            .patch("http://localhost:9000/Calendar",{
                id
            }, 
            {
                headers: { Authorization: localStorage.getItem("token") },
            }
            )
            .catch((e) => {
            console.log(e);
            })
    }
    //delete Events
    static DeleteEvents(id){
        return axios
            .delete("http://localhost:9000/Calendar",{
                id
            },
            {
                headers: { Authorization: localStorage.getItem("token") },
            })
            .catch((e) => {
                console.log(e);
            });
    }
}
export default API