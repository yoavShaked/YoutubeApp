import React from 'react';
import VideoListItem from './videoListItem';
import './css/style.css';

const VideoList = (props) => {

    const videoListItems = props
        .videos
        .map((video) => {
            return (<VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>);
        });

    return (
        <ul className="col-md-4 list-group">
            {videoListItems}
        </ul>
    );
};

export default VideoList;