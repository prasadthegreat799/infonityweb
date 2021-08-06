import React from 'react';
import './SideBar.css';
import SidebarOptions from './SidebarOptions';
import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import AppsIcon from '@material-ui/icons/Apps';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Avatar } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function SideBar() {
    return (

        <div className="sidebar">

            <div className="sidebar__header">
                <h5>CSE-04 CLASSROOM</h5>
            </div>
            <div className="sidebar__menu">

                    <SidebarOptions Icon={MailIcon} title="Mail Box" />
                    <SidebarOptions Icon={MessageIcon} title="Messages" />
                    <SidebarOptions Icon={AlternateEmailIcon} title="Mentions" />
                    <SidebarOptions Icon={GroupWorkIcon} title="Classes" />
                    <SidebarOptions Icon={FileCopyIcon} title="Files" />
                    <SidebarOptions Icon={FilterHdrIcon} title="Placements" />
                    <SidebarOptions Icon={AppsIcon} title="Apps" />



                    <hr/>
                        <SidebarOptions Icon={AddBoxIcon} title="Join Class" />

                    <hr/>
                        <SidebarOptions Icon={AccountCircleIcon} title="Aravind Babu " />

                    <hr/>
                            <SidebarOptions Icon={ExitToAppIcon} title="Log Out" />                     

            </div>
            
        </div>
    )
}

export default SideBar
