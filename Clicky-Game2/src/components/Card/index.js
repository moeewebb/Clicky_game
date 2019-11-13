import React from "react";
import "./style.css";
function Card (props) {
    console.log(props);
    return (
        <div className='card'>
        <div className='img-container'onClick={()=>props.onClick(props.cars.id)}>
            <img src={
                props.image
            } />
        </div>
        </div>

    )
}
export default Card