import React from 'react'
import ExpandableMobileAppBar from "./ExpandableMobileAppBar";
import RoundedTextAndImageButton from "./RoundedTextAndImageButton";
import SongInfo from "./SongInfo";
import SongList from "./SongList"
import backArrow from "./img/ic-arrows-left.svg"
import moreIcon from "./img/ic-actions-more-2.svg"
import MyNavBar from "./MyNavBar"
import logo23 from "./img/logo23.svg"
import shuffle from "./img/shuffle.svg"
import style from "./style/PlaylistMobileView.module.css"

function PlaylistMobileView() {
    return (
        <div>
        <ExpandableMobileAppBar iconOne={backArrow} iconTwo={moreIcon}/>
        <h1>Top 4</h1>
        <div className={style.btnContainer}>
          <RoundedTextAndImageButton title="PLAY" image={logo23}/>
          <RoundedTextAndImageButton title="SHUFFLE" image={shuffle}/>
        </div>
        <SongList className={style.songList} style={{"max-height":"unset"}}/>
        <MyNavBar/>
      </div>
    )
}

export default PlaylistMobileView
