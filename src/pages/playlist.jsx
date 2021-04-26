/*index.jsx*/
import React from "react";
import ExpandableMobileAppBar from "../components/ExpandableMobileAppBar";
import RoundedTextAndImageButton from "../components/RoundedTextAndImageButton";
import SongInfo from "../components/SongInfo";
import SongList from "../components/SongList"

//Functional Component 

const playlistPlayButtonGroupStyle = {
  display:"grid",
  gridTemplateColumns:"auto auto"
}

const PlayList = () => {
  return (
    <div>
      <ExpandableMobileAppBar/>
      <h2>Top 4</h2>
      <div class="playlistPlayButtonGroup" style={playlistPlayButtonGroupStyle}>
        <RoundedTextAndImageButton title="PLAY"/>
        <RoundedTextAndImageButton title="SHUFFLE"/>
      </div>
      <SongList/>
    </div>
  );
};

export default PlayList;