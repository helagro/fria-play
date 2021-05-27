import React, { FunctionComponent, useEffect, useState } from 'react';
import style from "./style/ExpandableMobileAppBar.module.css"
import MobileAppBar from './MobileAppBar';
import PlaylistCover from './PlaylistCover';
import survival from "./img/survival.jpg";

const playlistCoverSideDefault = 176

function ExpandableMobileAppBar(props){
    const songImages = [survival, survival, survival, survival]
    const [playlistCoverSide, setplaylistCoverSide] = useState(playlistCoverSideDefault)
    const showShadow = playlistCoverSide !== playlistCoverSideDefault && playlistCoverSide !== 0

    useEffect(() => {
        const onScroll = e => {
            const newHeight = playlistCoverSideDefault - window.scrollY
            setplaylistCoverSide(newHeight)
          };
        window.addEventListener("scroll", onScroll);
      
        return () => window.removeEventListener("scroll", onScroll);
    })

    return (
        <div className={style.expandableMobileAppBar}>
            <MobileAppBar iconOne={props.iconOne} iconTwo={props.iconTwo} style={{"boxShadow":"3 3 5 1"}}/>
            <div className={style.expandingArea}>
                <div className={style.fakeShadow} style={{"width": `${playlistCoverSide}px`}}></div>
                <PlaylistCover images={songImages} style={{"height":`${playlistCoverSide}px`, "width":`${playlistCoverSide}px`}}/>
            </div>
        </div>
    )
}


export default ExpandableMobileAppBar