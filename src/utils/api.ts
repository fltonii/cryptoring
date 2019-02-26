import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.nomics.com/v1";

export default {
  currencies: async () =>
    await axios
      .get(`${baseUrl}/currencies?key=${API_KEY}`)
      .then(response => response)
      .catch(err => err)
};
