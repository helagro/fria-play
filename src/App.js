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

import Player from "./pages/player"
import Playlist from "./pages/playlist"

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