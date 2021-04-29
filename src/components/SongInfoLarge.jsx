import React from 'react'
import style from "./style/SongInfoLarge.module.css"
import CoverPhoto from "./CoverPhoto"

function SongInfoLarge(props) {
    return (
        <div className={style.container}>
            <CoverPhoto image={props.image} className={style.photo}/>
                <p className={style.title}>{props.title}</p>   
                <p className={style.info}>{props.artist}</p>
        </div>
    )
}

export default SongInfoLarge
