/*index.jsx*/
import React from "react";
import style from "./style/Playlist.module.css"
import Helpers from "../Helpers"
import PlaylistMobileView from "./PlaylistMobileView"
import { useState, useEffect } from 'react';
import PlayListComputerView from "./PlayListComputerView";

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const PlayList = () => {
  const { height, width } = useWindowDimensions();

  if(width < 1000){
    return PlaylistMobileView()
  } else{
    return PlayListComputerView()
  }
};

export default PlayList;