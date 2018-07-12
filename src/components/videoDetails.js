import React from 'react';
import './css/style.css';

const VideoDetails = ({video}) => {

    if(!video){
        return <div>Loading...</div>;
    }

    const videoID = video.id.videoID;
    const videoURL = 'https://www.youtube.com/embed/' + videoID;
    
    return (
        <div>
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoURL}></iframe>
                </div>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetails;