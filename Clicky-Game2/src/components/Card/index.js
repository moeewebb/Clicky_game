import React from "react";
import "./style.css";
function Card (props) {
    console.log(props);
    return (
        <div className='card'onClick={()=>props.onClick(props.cars.id)}>
            <img src={
                props.image
            } />
        </div>

    )
}
export default Card