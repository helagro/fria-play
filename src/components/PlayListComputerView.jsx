import React from 'react'
import MyNavBarPc from "./MyNavBarPc"
import SongGrid from "./SongGrid"
import style from "./style/PlayListComputerView.module.css"
import PlayControlsPc from "../components/PlayControlsPc"
import CoverPhoto from './CoverPhoto'
import PlaylistCover from './PlaylistCover'
import LegendImage from "./img/legend-theScore.jpg"
import MoreIcon from "./img/ic-actions-more-2-dark.svg"

function PlayListComputerView() {
    return (
        <div className={style.container}>
            <MyNavBarPc fullWidth={true}/>
            <div className={style.mainContent}>
                <div className={style.infoPart}>
                    <PlaylistCover images={[LegendImage, LegendImage, LegendImage, LegendImage]} className={style.playlistCover}/>
                    <div className={style.playlistInfo}>
                        <p className={style.playlistTitle}>Playlist Name</p>
                        <p className={style.theCreatorsName}>Creator</p>
                        <p className={style.songsLength}>4 SONGS</p>
                        <img src={MoreIcon} alt="more" className={style.more}/>
                    </div>
                </div>
                <div className={style.songsPart}>
                    <h1>songs</h1>
                </div>
            </div>
            <PlayControlsPc/>
        </div>
    )
}

export default PlayListComputerView
