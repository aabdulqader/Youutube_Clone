import React, { useState } from "react";
import "./Header.css";
import Logo from "../Images/logo.png";
import Img from "../Images/avatar.jpg";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { Link, useHistory } from "react-router-dom";
import { API_KEY } from "../apiKey";

const Header = ({ searchTerm, setSearchTerm, setVideos }) => {
  const history = useHistory();
  const onHandleSubmit = (e) => {
    e.preventDefault();

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&maxResults=50&key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        history.push(`/search/${searchTerm}`);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <header className="header">
      <div className="header__logo">
        <MenuIcon className="icolor" />

        <Link to="/">
          <img className="logo" src={Logo} />
        </Link>
      </div>
      <div className="header__search">
        <form onSubmit={onHandleSubmit}>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />

          <button disabled={!searchTerm} type="submit">
            {" "}
            <SearchIcon className="icon icolor" />
          </button>
        </form>
      </div>
      <div className="header__menu">
        <VideoCallSharpIcon className="menu-icon icolor" />
        <NotificationsIcon className="menu-icon icolor" />
        <AppsIcon className="menu-icon icolor" />
        <Avatar className="avatar" src={Img} alt="Avater" />
      </div>
    </header>
  );
};

export default Header;
