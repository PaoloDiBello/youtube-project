import axios from "axios";

const KEY = "AIzaSyCQMSFMplLKuWxEcus3AkDJA8mfhQF1Cck";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet, id",
    maxResults: 5,
    key: KEY
  }
});
