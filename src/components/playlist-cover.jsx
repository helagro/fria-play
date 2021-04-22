import React, { FunctionComponent } from 'react';
import CoverPhoto from './cover-photo';

const coverPhotoGroupStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    justifyContent:"center"
}

function PlaylistCover(){
    return (
        <div className="playlist group" style={coverPhotoGroupStyle}>
        </div>
    )
}

export default PlaylistCover