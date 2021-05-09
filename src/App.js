/*App.js*/
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Player from "./components/PlayerMobile"
import Playlist from "./components/Playlist"

import googleDrive from "./logic/googleDriveApi"
const loadGApi = () => { 
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/api.js';    script.id = 'gApi';
  document.body.appendChild(script);    script.onload = () => {googleDrive.handleClientLoad()}
};
loadGApi()

class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={Playlist} />
       <Route exact path="/player" component={Player} />
      </Router>
    );
  }
}

export default App;