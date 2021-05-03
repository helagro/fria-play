import React from 'react'
import style from "./style/FullPlayControls.module.css"
import PlayAndSwitchSong from "./PlayAndSwitchSong"
import SongInfoLarge from "./SongInfoLarge"
import bestOfMeImage from "./img/best-of-me.jpg"

function FullPlayControls() {
    return (
        <div className={style.container}>
            <SongInfoLarge image={bestOfMeImage} title="Frog" artist="bucket" className={style.SongInfoLarge}/>
            <PlayAndSwitchSong className={style.PlayAndSwitchSong}/>
        </div>
    )
}

export default FullPlayControls
