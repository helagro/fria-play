import React from "react";
import MobileAppBar from "./MobileAppBar"
import backArrow from "./img/ic-arrows-left.svg"
import moreIcon from "./img/ic-actions-more-2.svg"
import SongList from "./SongList";
import MyNavBar from "./MyNavBar";
import style from "./style/PlayerMobile.module.css"
import FullPlayControls from "./FullPlayControls";


const player = () => {
  return (
    <div>
      <MobileAppBar iconOne={backArrow} iconTwo={moreIcon}/>
      <SongList className={style.songList}/>
      <FullPlayControls/>
      <MyNavBar/>
    </div>
  );
};

export default player;