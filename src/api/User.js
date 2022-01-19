import axios from "axios";

// Js class to call User API
class User {
  /**
   *
   * @param {string} baseURL
   * @param {string} token Authentification
   */
  constructor({ baseURL = "http://localhost:3001/api/v1", token = "" }) {
    this.baseURL = baseURL;
    this.token = token;
  }

  /**
   *
   * User login
   * @param {string} email
   * @param {string} password
   * @returns {Object}
   */
  async logIn({ email, password }) {
    return await axios({
      method: "post",
      url: this.baseURL + "/user/login",
      data: { email, password },
    });
  }

  /**
   *
   * Get user profile
   * @returns {Object}
   */
  async getProfile() {
    return await axios({
      method: "post",
      url: this.baseURL + "/user/profile",
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  /**
   *
   * Update user profile
   * @param {string} firstName
   * @param {string} lastName
   * @returns {Object}
   */
  async updateProfile({ firstName, lastName }) {
    return await axios({
      method: "put",
      url: this.baseURL + "/user/profile",
      data: {
        firstName,
        lastName,
      },
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  /**
   *
   * Get all user accounts
   * @returns {Object}
   */
  async getAccounts() {
    return await axios({
      method: "post",
      url: this.baseURL + "/user/accounts",
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }
}

export default User;
