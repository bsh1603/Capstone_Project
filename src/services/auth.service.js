import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class AuthService {
  login(email, pwd) {
    return axios
      .post(API_URL + "login", {
        email,
        pwd
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, pwd, phone,authentication_code ) {
    return axios.post(API_URL + "signup/manager", {
      name,
      email,
      pwd,
      phone, authentication_code
    });
  }

  workerregister(name, email, pwd, phone,authentication_code ) {
    return axios.post(API_URL + "signup/worker", {
      
      email,
      pwd,
      name,
      phone, authentication_code
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
