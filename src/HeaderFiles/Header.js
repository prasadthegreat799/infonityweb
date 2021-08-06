import React from 'react';
import './Header.css';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div  className="header">

                <div className="header__left">
                    <Avatar className="header__avater" />
                    <h5>Powered By InfoSNity</h5>
                </div>

                <div className="header__center">
                    <h3>Rajive Gandhi University Of Knowledge And Technology</h3> 
                </div>

                <div className="header__search">

                    <SearchIcon />
                    <input placeholder="Search Goes here..." />
                    
                </div>
                <div className="header__helpIcon">
                    <HelpOutlineIcon />
                </div>
            
        </div>
    )
}

export default Header
