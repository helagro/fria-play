import React, { FunctionComponent } from 'react';
import "./style/MobileAppBar.css"
import backArrow from "./img/ic-arrows-left.svg"
import menu from "./img/ic-actions-menu.svg"

function MobileAppBar(){
    return (
        <div className="appBarBar">
            <img src={backArrow} className="appBarIcon"/>
            <h2>
                This is an app bar 
            </h2>
            <img src={menu} className="appBarIcon"/>
        </div>
    )
}

export default MobileAppBar