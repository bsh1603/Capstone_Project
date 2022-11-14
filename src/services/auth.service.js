import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
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

  register(name, email, password, phone,authentication_code ) {
    return axios.post(API_URL + "signup", {
      name,
      email,
      password,
      phone, authentication_code
    });
  }

  workerregister(name, email, password, phone,authentication_code ) {
    return axios.post(API_URL + "signup/worker", {
      name,
      email,
      password,
      phone, authentication_code
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
