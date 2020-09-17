import React from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";





function Header() {
    return (
        <div className = "header">


            <div className = "header__left">
                <MenuIcon/>
                    <img className = "header__logo" 
                    src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/110px-YouTube_Logo_2017.svg.png" 
                    alt ="">
                    </img>
            </div>


            <div className = "header__input">
                <input placeholder = "Search"  type = "text" />
                <SearchIcon className = "header__inputButton"/>
            </div>


            <div className = "header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar  
                    alt= "George Nikoglou"
                    src = "https://avatars3.githubusercontent.com/u/63461774?s=460&u=bf590525c5c5b4cbebfd242bcc20d9ad17606aa8&v=4"
                />
            </div>
            
        </div>
    )
}

export default Header;
