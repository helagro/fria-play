import React from 'react'
import style from "./style/PlayAndSwitchSong.module.css"
import playBtnIcon from "./img/logo23.svg"
import nextSongIcon from "./img/next-song.svg"
import prevSongIcon from "./img/prev-song.svg"

function PlayAndSwitchSong() {
    return (
        <div className={style.container}>
            <div className={style.btnContainer}><img src={prevSongIcon} alt="Prev song" className={style.prevSong}/></div>
            <div className={style.btnContainer}><img src={playBtnIcon} alt="Play button" className={style.playBtn}/></div>
            <div className={style.btnContainer}><img src={nextSongIcon} alt="Next song" className={style.nextSong}/></div>
        </div>
    )
}

export default PlayAndSwitchSong
