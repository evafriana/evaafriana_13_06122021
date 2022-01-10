import axios from "axios";

// Js class to call API
class API {
  constructor({ baseURL = "http://localhost:3001/", token = "" }) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async logIn({ email, password }) {
    return await axios({
      method: "post",
      url: this.baseURL + "api/v1/user/login",
      data: { email, password },
    });
  }

  async getUserProfile() {
    return await axios({
      method: "post",
      url: this.baseURL + "api/v1/user/profile",
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  async updateUserProfile({ firstName, lastName }) {
    return await axios({
      method: "put",
      url: this.baseURL + "api/v1/user/profile",
      data: {
        firstName,
        lastName,
      },
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }
}

export default API;
