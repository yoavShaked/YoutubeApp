import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/serchBar';
import VideoList from './components/videoList';
import YTSearch from 'youtube-api-search';
import VideoDetails from './components/videoDetails';
const youtubeAPIKey = 'AIzaSyDH8kT_be670fSUliOl2_UQr56MQsm2rms';

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({
            key: youtubeAPIKey,
            term: term
        }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
        });
    };

    render() {
        
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

        return (
            <div>
                <SearchBar onSeatchTermChange={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'));