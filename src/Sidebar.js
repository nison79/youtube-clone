import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"

function Sidebar() {
    return (
        <div className ="sidebar">
            <h2>Sidebar</h2>

            <SidebarRow title ="home"/>
        </div>
    )
}

export default Sidebar
