import React, { FunctionComponent } from 'react';
import "./style/expandable-mobile-app-bar.css"
import MobileAppBar from './mobile-app-bar';
import PlaylistCover from './playlist-cover';

function ExpandableMobileAppBar(){
    return (
        <div className="ddwa">
            <MobileAppBar/>
            <div className="expandingArea">
                <PlaylistCover/>
            </div>
        </div>
    )
}

export default ExpandableMobileAppBar