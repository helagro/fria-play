import React, { FunctionComponent } from 'react';
import "./style/ExpandableMobileAppBar.css"
import MobileAppBar from './MobileAppBar';
import PlaylistCover from './PlaylistCover';
import survival from "./img/survival.jpg";


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