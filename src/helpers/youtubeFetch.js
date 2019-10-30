import axios from "axios";

const KEY = "AIzaSyCwu6uVBEXGhz7qDchfCxvBlR_gEXbpqU4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
