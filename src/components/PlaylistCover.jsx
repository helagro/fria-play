import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';

const coverPhotoGroupStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    justifyContent:"center",
}

function PlaylistCover(props){
    let images = props.images
    return (
        <div className="playlist group" style={coverPhotoGroupStyle}>
            <CoverPhoto image={images[0]}/>
            <CoverPhoto image={images[1]}/>
            <CoverPhoto image={images[2]}/>
            <CoverPhoto image={images[3]}/>
        </div>
    )
}

export default PlaylistCover