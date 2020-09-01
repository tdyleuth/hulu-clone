import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
    return (
        //BEM name class
        <div className="header">
            <div className="header-icons">
                <HomeIcon />
                <FlashOnIcon />
                <LiveTvIcon />
                <VideoLibraryIcon />
                <SearchIcon />
                <PersonOutlineIcon />
            </div>
            <img
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
                alt=""
            />
        </div>
    );
}

export default Header;
