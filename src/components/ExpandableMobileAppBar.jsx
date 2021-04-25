import React, { FunctionComponent } from 'react';
import style from "./style/ExpandableMobileAppBar.module.css"
import MobileAppBar from './MobileAppBar';
import PlaylistCover from './PlaylistCover';
import survival from "./img/survival.jpg";


function ExpandableMobileAppBar(){
    let songImages = [survival, survival, survival, survival]
    return (
        <div className={style.expandableMobileAppBar}>
            <MobileAppBar/>
            <div className={style.expandingArea}>
                <PlaylistCover images={songImages}/>
            </div>
        </div>
    )
}

export default ExpandableMobileAppBar