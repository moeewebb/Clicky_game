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
   let clickedCar=this.state.images.find(car=>car.id===id)
   console.log('new variable', clickedCar)

   this.handleShuffle()

   if (clickedCar.clickedOn===false){
       clickedCar.clickedOn=true
       this.setState({
           images:this.state.images
       })
       console.log("set to true")
       console.log(this.state.images)

   }
    else{
       alert("YOU LOST!")
       this.handleReset()
    }
 };
 
 //=======================SHUFFLE====================//
 handleShuffle = () => {
     this.setState ({
         images: this.state.images.sort(function(a,b){
             return 0.5 - Math.random()
         })
     })

 };

 handleReset = () => {


 };

 
    render() {
        return (
            <div className="jum">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Click to Play.</p>
                <hr className="my-4"/>
                
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

 