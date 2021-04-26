/*index.jsx*/
import React from "react";
import ExpandableMobileAppBar from "../components/ExpandableMobileAppBar";
import RoundedTextAndImageButton from "../components/RoundedTextAndImageButton";
import SongInfo from "../components/SongInfo";
import SongList from "../components/SongList"
import logo23 from "../components/img/logo23.svg"
import shuffle from "../components/img/shuffle.svg"
import style from "./style/Playlist.module.css"
import backArrow from "../components/img/ic-arrows-left.svg"
import moreIcon from "../components/img/ic-actions-more-2.svg"
import MyNavBar from "../components/MyNavBar"

//Functional Component 


const PlayList = () => {
  return (
    <div>
      <ExpandableMobileAppBar iconOne={backArrow} iconTwo={moreIcon}/>
      <h1>Top 4</h1>
      <div className={style.btnContainer}>
        <RoundedTextAndImageButton title="PLAY" image={logo23}/>
        <RoundedTextAndImageButton title="SHUFFLE" image={shuffle}/>
      </div>
      <SongList/>
      <MyNavBar/>
    </div>
  );
};

export default PlayList;