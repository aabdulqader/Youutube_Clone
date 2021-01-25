import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow/ChannelRow";
import VideoRow from "./VideoRow/VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
const SearchPage = ({ videos }) => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon className="icolor" />
        <h2>Filter</h2>
      </div>

      <VideoRow videos={videos} />
    </div>
  );
};

export default SearchPage;
