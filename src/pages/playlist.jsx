/*index.jsx*/
import React from "react";
import ExpandableMobileAppBar from "../components/ExpandableMobileAppBar";
import RoundedTextAndImageButton from "../components/RoundedTextAndImageButton";
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