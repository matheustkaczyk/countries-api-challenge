import axios from "axios";

const countriesFetch = (url) => {
  return axios.get(url);
}

export default countriesFetch;