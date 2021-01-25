import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ChannelRow = ({ image, channel, verified, subs, noOfVideos, desc }) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__img" src={image} alt="Channel" />
      <div className="channelRow__text">
        <h3>
          {channel} {verified && <CheckCircleIcon />}
        </h3>
        <p>
          {subs} subscrivers . {noOfVideos} videos
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
