import React from 'react'
import SongInfo from './SongInfo'
import style from "./style/PlayControlsPc.module.css"
import survival from "./img/survival.jpg"
import PlayAndSwitchSong from "./PlayAndSwitchSong"

function PlayControlsPc() {
    return (
        <div className={style.container}>
            <SongInfo image={survival} title="Survival" artist="eminem"/>
            <div className="mainPlayerControls">
                <PlayAndSwitchSong/>
            </div>
            <div className="advancedControls">

            </div>
        </div>
    )
}

export default PlayControlsPc
