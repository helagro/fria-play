/*index.jsx*/
import React from "react";
import ExpandableMobileAppBar from "../components/ExpandableMobileAppBar";
import RoundedTextAndImageButton from "../components/RoundedTextAndImageButton";
import SongInfo from "../components/SongInfo";
import Survival from "../components/img/survival.jpg"

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
      <SongInfo image={Survival}/>
    </div>
  );
};

export default PlayList;