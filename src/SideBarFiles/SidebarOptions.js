import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({Icon,title}) {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOptions__icon" />}
            {Icon ? (
                        <h3>{title}</h3> )
                    :(
                        <h3 className="sidebarOptions__class"> 
                            <span className="sidebarOptions__hash">#</span> 
                            {title}
                        </h3>
                    )
            }
        </div>
    )
}

export default SidebarOptions
