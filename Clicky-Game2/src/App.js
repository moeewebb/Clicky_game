import React, { Component } from 'react';
import images from './images';
// eslint-disable-next-line
import './App.css';
import Card from './components/Card/index.js';

class App extends Component {
    state = {
     images
    };
handleClick = id => {
    console.log('clicked on',id)

 };

 ///handleIncrement = () => {

 //};

 //handleReset = () => {

 //};

 //handleShuffle = () => {

 //};
    render() {
        return (
            <div className="jum">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Click Here to Play a Fun Game today.</p>
                <hr className="my-4"/>
                <p>See options below.</p>
            {
                this.state.images.map((cars, i) => (
                <Card 
                image={cars.url}
                key={i}
                onClick={()=>this.handleClick(cars.id)}
                cars={cars}
                />


              ))}
            </div>

        )

    }
}

export default App;

 