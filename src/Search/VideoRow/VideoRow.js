import React from "react";
import VideoCard from "./VideoCard/VideoCard";
import "./VideoRow.css";

const VideoRow = ({ videos }) => {
  return (
    <div className="videoRow">
      {videos.items?.map((video) => {
        return (
          <VideoCard
            key={video.id.videoId}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            time={video.snippet.publishedAt}
            image={video.snippet.thumbnails.medium.url}
            description={video.snippet.description}
            videoId={video.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default VideoRow;
