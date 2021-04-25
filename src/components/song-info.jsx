import React, { FunctionComponent } from 'react';
import CoverPhoto from './cover-photo';
import "./style/song-info.css"

function SongInfo(props){
    return (
        <div className="songInfoContainer" style={coverPhotoGroupStyle}>
            <CoverPhoto image={props.image}/>
        </div>
    )
}

export default SongInfo