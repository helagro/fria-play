import React, { FunctionComponent } from 'react';
import "./style/expandable-mobile-app-bar.css"
import MobileAppBar from './mobile-app-bar';
import PlaylistCover from './playlist-cover';
import survival from "./img/survival.jpg";
import CoverPhoto from './cover-photo';


function ExpandableMobileAppBar(){
    let songImages = [survival, survival, survival, survival]
    return (
        <div className="expandableMobileAppBar">
            <MobileAppBar/>
            <div className="expandingArea">
                <PlaylistCover images={songImages}/>
            </div>
        </div>
    )
}

export default ExpandableMobileAppBar