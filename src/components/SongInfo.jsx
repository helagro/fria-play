import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';
import "./style/SongInfo.css"

function SongInfo(props){
    return (
        <div className="songInfoContainer" style={coverPhotoGroupStyle}>
            <CoverPhoto image={props.image}/>
        </div>
    )
}

export default SongInfo