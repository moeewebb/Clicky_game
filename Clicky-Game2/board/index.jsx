import React from 'react'
import Protypes from 'prop-types'

import Card from '../card'

export default function Board({ cards, flipped, handleClick }) {
    return (
        <div className='board'>
            {cards.map((card) ==> (
                <Card
                key={card.id}
                id={card.id}
                type={card.type}
                width={card.width}
                height={card.height}
                flipped={flipped.includes(card.id)}
                handleClick={() ==> handleClick(card.id)}

                />
            
                )};
        </div>
    )
}

Board.propTypes = { 
    cards: Protypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}