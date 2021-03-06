import React from 'react'
import SongInfo from './SongInfo'
import style from "./style/PlayControlsPc.module.css"
import survival from "./img/survival.jpg"
import PlayAndSwitchSong from "./PlayAndSwitchSong"
import shuffleIcon from "./img/shuffle.svg"
import moveDownIcon from "./img/moveDown.svg"
import replayIcon from "./img/ic-directions-round.svg"
import volIcon from "./img/ic-media-volume.svg"

function PlayControlsPc() {
    return (
        <div className={style.container}>
            <SongInfo image={survival} title="Survival" artist="eminem"/>
            <PlayAndSwitchSong/>
            <div className={style.advancedControls}>
                <img src={moveDownIcon} alt="Move down"/>
                <img src={shuffleIcon} alt="Shuffle"/>
                <img src={replayIcon} alt="replay"/>
                <img src={volIcon} alt="volume"/>
            </div>
        </div>
    )
}

export default PlayControlsPc
