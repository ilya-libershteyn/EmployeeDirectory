import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";

const API = {
  getUsers: function(numUsers) {
    console.log(BASEURL + numUsers);
    return axios.get(BASEURL + numUsers);
  }
};

export default API;