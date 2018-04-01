import React from "react";

const VideoDetail = ({ video }) => {
  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>

      <div className="embed-details">
        <div>{videoTitle}</div>
        <div>{videoDescription}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
