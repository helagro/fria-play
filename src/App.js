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