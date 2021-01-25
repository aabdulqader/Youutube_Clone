import React, { useEffect, useState } from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({ image, title, channel, videoId, time }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <a href={`https://www.youtube.com/watch?v=${videoId}`}>
      <div className="videoCard">
        <img className="videoCard__thumbnail" src={image} alt="image" />
        <div className="videoCard__info">
          <Avatar
            className="videoCard_avatar"
            alt={channel}
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <small>{time}</small>
          </div>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
