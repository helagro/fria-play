import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';
import style from "./style/SongInfo.module.css"


function SongInfo(props){
    return (
        <div className={style.container}>
            <CoverPhoto image={props.image} className={style.photo}/>
            <p className={style.title}>Song title</p>
            <p className={style.info}>Artist</p>
        </div>
    )
}

export default SongInfo