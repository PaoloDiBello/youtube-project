import YoutubeFetch from "./youtubeFetch";

/**
 * it contains all the functions for async calls needed by sagas for videos
 * @typedef {class} VideosHelper
 */
class VideosHelper {
  getVideos = async payload => {
    return await YoutubeFetch.get("/search", {
      params: {
        q: encodeURI(payload).replace("/%20/g", "+")
      }
    })
      .then(response => {
        if (response.error) {
          return false;
        }

        if (response.data.items) {
          return response.data.items;
        }

        return response;
      })
      .catch(e => {
        console.log("e", e);
      });
  };

  getSingleVideo = async name => {
    console.log('name', name)
    return await YoutubeFetch.get(`videos/`, {
      params: {
        part: "snippet,contentDetails,statistics",
        id: name
      }
    }).then(response => {

      console.log('response', response)
      if (response.error) {
        //notification({ type: 'error', message: `${response.error}`, description: '' });
      }
      return response.data.items[0];
    }).catch(e => {
      return e.response.data
    });
  };

  getCommentsVideo = async payload => {
    return await YoutubeFetch.get(`commentThreads/`, {
      params: {
        videoId: payload
      }
    }).then(response => {
      console.log("response", response);
      if (response.error) {
        //notification({ type: 'error', message: `${response.error}`, description: '' });
      }
      return response;
    });
  };
}

export default new VideosHelper();
