import React from "react";
import "./style.css";
function Card (props) {
    console.log(props);
    return (
        <div className='card'>
            <img src={
                props.image
            } />
        </div>

    )
}
export default Card