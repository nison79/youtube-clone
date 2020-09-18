import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";





function Header() {

    const [inputSearch,setInputSearch] = useState('');

    return (
        <div className = "header">


            <div className = "header__left">
                <MenuIcon/>
                <Link to ="/">
                    <img className = "header__logo" 
                    src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" 
                    alt ="">
                    </img>
                </Link>
            </div>


            <div className = "header__input">
                <input 
                onChange={e => setInputSearch(e.target.value)} 
                value = {inputSearch} placeholder = "Search"  
                type = "text"        
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className = "header__inputButton"/>
                </Link>
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
