import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';
import style from "./style/PlaylistCover.module.css"

const coverPhotoGroupStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    justifyContent:"center",
}

function PlaylistCover(props){
    let images = props.images
    return (
        <div className={style.container}>
            <CoverPhoto image={images[0]}/>
            <CoverPhoto image={images[1]}/>
            <CoverPhoto image={images[2]}/>
            <CoverPhoto image={images[3]}/>
        </div>
    )
}

export default PlaylistCover