import React, { Component } from 'react';
//import logo from './images';
// eslint-disable-next-line
import './App.css';
import Card from './components/card.js';

class App extends Component {
    state = {
      //  images 
    };
    render() {
        return (
            <div className="jum">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Click Here to Play a Fun Game today.</p>
                <hr className="my-4"/>
                <p>See options below.</p>
            {
                this.state.images.map((cartoon, i) => (
                <Card image={cartoon.largeImageURL}/>
              ))}
            </div>

        )

    }
}

export default App;

 //handleClick = id => {

 //};

 ///handleIncrement = () => {

 //};

 //handleReset = () => {

 //};

 //handleShuffle = () => {

 //};