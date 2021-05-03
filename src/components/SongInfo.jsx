import React, { FunctionComponent } from 'react';
import CoverPhoto from './CoverPhoto';
import style from "./style/SongInfo.module.css"
import moreIcon from "./img/ic-actions-more-2-dark.svg"


function SongInfo(props){
    return (
        <div className={style.container}>
            <CoverPhoto image={props.image} className={style.photo}/>
            <div className={style.songText}>
                <div className={style.textContainer}>
                    <p className={style.title}>{props.title}</p>   
                </div>
                <div className={style.textContainer}>
                    <p className={style.info}>{props.artist}</p>
                </div>
            </div>
            <img src={moreIcon} alt="more" className={style.more}/>
        </div>
    )
}

export default SongInfo