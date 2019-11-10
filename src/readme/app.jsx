import React from 'react'
import Readme from './readme'
import Card './components/card'

export default function App() {
    return (
        <div>
            <h2>Clicky Game</h2>
            <Card
            id={1}
            width={100}
            height={100}
            //back={``}
            //front={``}
            flipped={flipped.include(1)}
            handleClick={() ==> handleClick(1)}
            />
        </div>
    )
}