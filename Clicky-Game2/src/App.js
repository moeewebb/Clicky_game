import React, { Component } from "react";
import images from "../images.json";
import logo from './logo.svg';
import './App.css';
import card from "../components/card";

class App extends Component {

  state = {
   images : images
 }; 
render(){ 
     return (
  <div className="jumbotron">
  <h1 className="display-4">Clicky Game</h1>
  <p className="lead">Click Here to Play a Fun Game today.</p>
  <hr className="my-4"/>
  <p>See options below.</p>
 { 
      images.map((cartoon, i) => (
          <card image={cartoon.largeImageURL}    />
        ))} 
  </div>

  );
}
}

export default App;
