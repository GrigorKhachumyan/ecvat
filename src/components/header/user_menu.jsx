import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function UserMenu(props){
    const menuStyle={
        height:document.body.offsetHeight - 100+"px"
    }
    return(
        <div className="user-menu-main" style={menuStyle}>
            <ul className={"user-menu-container"}>
                <li className="user-menu-item">
                    <Link>Find vacansy</Link>
                </li>
                <li className="user-menu-item">
                    <Link>My CV's</Link>
                </li>
                <li className="user-menu-item">
                    <Link>My applications</Link>
                </li>
                <li className="user-menu-item">
                    <Link to="/user/manage_profile">Manage profile</Link>
                </li>
            </ul>
            </div>
    )
}