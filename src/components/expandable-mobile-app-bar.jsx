import React, { FunctionComponent } from 'react';
import "./style/expandable-mobile-app-bar.css"
import MobileAppBar from './mobile-app-bar';
import PlaylistCover from './playlist-cover';
import survival from "./img/survival.jpg";
import CoverPhoto from './cover-photo';


function ExpandableMobileAppBar(){
    return (
        <div className="expandableMobileAppBar">
            <MobileAppBar/>
            <div className="expandingArea">
                <PlaylistCover>
                    <CoverPhoto image={survival}/>
                    <CoverPhoto src={survival}/>
                    <CoverPhoto/>
                    <CoverPhoto/>
                    <h1>fe</h1>
                </PlaylistCover>
            </div>
        </div>
    )
}

export default ExpandableMobileAppBar