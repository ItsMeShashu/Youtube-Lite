/* eslint-disable no-unused-vars */
import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en", 
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "24bd7a887emsh934f7e2125fd604p19fa7ejsn7a693c9d579a",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
