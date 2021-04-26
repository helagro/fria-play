import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';
import style from "./style/PlaylistCover.module.css"

function PlaylistCover(props){
    const images = props.images
    return (
        <div className={style.container} style={props.style}>
            <CoverPhoto image={images[0]}/>
            <CoverPhoto image={images[1]}/>
            <CoverPhoto image={images[2]}/>
            <CoverPhoto image={images[3]}/>
        </div>
    )
}

export default PlaylistCover