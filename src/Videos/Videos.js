import React, { useState, useEffect } from "react";
import "./Videos.css";
import Category from "./Category/Category";
import VideoCard from "./VideoCard/VideoCard";
import { API_KEY } from "../apiKey";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=javascript@reactjs&maxResults=100&key=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className="videoPage">
      <div>
        <Category />
      </div>
      <div className="videos">
        {videos.items?.map((video) => {
          return (
            <VideoCard
              key={video.id.videoId}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              time={video.snippet.publishedAt}
              image={video.snippet.thumbnails.medium.url}
              videoId={video.id.videoId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
