import React from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { connect } from 'react-redux'
import videosActions from '../redux/videos/actions'

const {getVideos} = videosActions;

class App extends React.Component {

    state = {
        selectedVideo: null
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    
    render() {
    
        const {videos} = this.props;

        return (
            <div className='ui container' style={{marginTop: '1em',backgroundColor:'red', height: '100vh'}}>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column" >
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
videos: state.Videos.videos
})

const mapDispatchToProps = {
    getVideos
}


export default connect(mapStateToProps, mapDispatchToProps)(App);