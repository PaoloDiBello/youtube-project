import YoutubeFetch from './youtubeFetch';

/**
 * it contains all the functions for async calls needed by sagas for videos
 * @typedef {class} VideosHelper
 */
class VideosHelper {

    getVideos = async (payload) => {
        
        return await YoutubeFetch.get('/search', {
            params: {
                q: payload
            }
        })
            .then(response => {
                //console.log('response', response)
                if (response.error) {
                    //notification({ type: 'error', message: `${response.error}`, description: '' });
                }

                if(response.data.items){
                    return response.data.items;
                }

                return response;
            })
    }

    getSingleVideo = async (name) => {

        return await YoutubeFetch.get(`kanji/${name}`)
            .then(response => {
                //console.log('response', response)
                if (response.error) {
                    //notification({ type: 'error', message: `${response.error}`, description: '' });
                }
                return response;
            })
    }



}

export default new VideosHelper();
