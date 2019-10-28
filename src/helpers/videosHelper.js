import YoutubeFetch from './youtubeFetch';

/**
 * it contains all the functions for async calls needed by sagas for videos
 * @typedef {class} VideosHelper
 */
class VideosHelper {

    getVideos = async (payload) => {
        

        return await YoutubeFetch.get('/search', {
            params: {
                q: encodeURI(payload).replace('/%20/g', "+")
            }
        })
            .then(response => {
                //console.log('response', response)
                if (response.error) {
                    //notification({ type: 'error', message: `${response.error}`, description: '' });
                    return false;
                }
                
                if(response.data.items){
                    return response.data.items;

                }

                return response;
            })
            .catch(e=> {
                console.log('e', e)
            })
    }

    getSingleVideo = async (name) => {

        return await YoutubeFetch.get(`video/${name}`)
            .then(response => {
                //console.log('response', response)
                if (response.error) {
                    //notification({ type: 'error', message: `${response.error}`, description: '' });
                }
                return response;
            })
    }

    getVideoComments = async (payload) => {

        return await YoutubeFetch.get(`comments/`, {
            params: {
                q: payload
            }
        })
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
