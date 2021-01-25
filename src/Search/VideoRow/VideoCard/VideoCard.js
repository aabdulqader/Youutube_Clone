import React from "react";
import "./VideoCard.css";

const VideoCard = ({ image, title, channel, time, videoId, description }) => {
  return (
    <a href={`https://www.youtube.com/watch?v=${videoId}`}>
      <div className="video">
        <img className="video__thumbnail" src={image} alt="image" />

        <div className="video__info">
          <h4 className="video__title">{title}</h4>

          <p className="video__time">{time}</p>
          <p className="video__channelName">{channel}</p>
          <p className="video__desc">{description.slice(40)}</p>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
