import React, { FunctionComponent } from 'react';
import CoverPhoto from './cover-photo';

const coverPhotoGroupStyle = {
    display: "grid"
}

function PlaylistCover(){
    return (
        <div className="playlist group">
            <CoverPhoto/>
            <CoverPhoto/>
            <CoverPhoto/>
            <CoverPhoto/>
        </div>
    )
}

export default PlaylistCover