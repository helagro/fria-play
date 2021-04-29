import React from 'react'
import style from "./style/PlayAndSwitchSong.module.css"
import playBtnIcon from "./img/logo23.svg"
import nextSongIcon from "./img/next-song.svg"

function PlayAndSwitchSong() {
    return (
        <div className={style.container}>
            <img src={nextSongIcon} alt="Prev song" className={style.prevSong}/>
            <img src={playBtnIcon} alt="Play button" className={style.playBtn}/>
            <img src={nextSongIcon} alt="Next song" className={style.nextSong}/>
        </div>
    )
}

export default PlayAndSwitchSong
