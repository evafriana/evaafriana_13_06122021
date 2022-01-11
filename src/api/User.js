import axios from "axios";

// Js class to call User API
class User {
  constructor({ baseURL = "http://localhost:3001/api/v1", token = "" }) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async logIn({ email, password }) {
    return await axios({
      method: "post",
      url: this.baseURL + "/user/login",
      data: { email, password },
    });
  }

  async getProfile() {
    return await axios({
      method: "post",
      url: this.baseURL + "/user/profile",
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

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

  async getAccounts() {
    return await axios({
      method: "post",
      url: this.baseURL + "/user/accounts",
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  async getAccountTransactions({ accountId }) {
    return await axios({
      method: "post",
      url: this.baseURL + "/account/" + accountId,
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  async getTransaction({ transactionId }) {
    return await axios({
      method: "post",
      url: this.baseURL + "/transaction/" + transactionId,
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  async updateTransaction({ transactionId, category, notes }) {
    return await axios({
      method: "put",
      url: this.baseURL + "/transaction/" + transactionId,
      data: {
        category,
        notes,
      },
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }

  async deleteTransaction({ transactionId }) {
    return await axios({
      method: "delete",
      url: this.baseURL + "/transaction/" + transactionId,
      headers: {
        Authorization: "Bearer " + this.token,
      },
    });
  }
}

export default User;
