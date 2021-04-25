import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';
import style from "./style/SongInfo.module.css"


function SongInfo(props){
    return (
        <div >
            <CoverPhoto image={props.image}/>
        </div>
    )
}

export default SongInfo