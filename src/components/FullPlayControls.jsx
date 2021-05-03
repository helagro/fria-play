import React from 'react'
import style from "./style/FullPlayControls.module.css"
import PlayAndSwitchSong from "./PlayAndSwitchSong"
import SongInfo from "./SongInfo"
import bestOfMeImage from "./img/best-of-me.jpg"

function FullPlayControls() {
    return (
        <div className={style.container}>
            <SongInfo image={bestOfMeImage} title="Frog" artist="bucket" className={style.SongInfo}/>
            <PlayAndSwitchSong className={style.PlayAndSwitchSong}/>
        </div>
    )
}

export default FullPlayControls
