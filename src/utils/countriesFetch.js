import axios from "axios";

const url = 'https://restcountries.com/v3.1/all';

const countriesFetch = async () => {
  const data = await axios.get(url);
  console.log(data);
  return data;
}

export default countriesFetch;