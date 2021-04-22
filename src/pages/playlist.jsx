/*index.jsx*/
import React from "react";
import ExpandableMobileAppBar from "../components/expandable-mobile-app-bar";
import RoundedTextAndImageButton from "../components/rounded-text-and-image-btn";
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
    </div>
  );
};

export default PlayList;