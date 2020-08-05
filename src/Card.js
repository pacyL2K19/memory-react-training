import React from 'react'

import './Card.css'

// eslint-disable-next-line no-unused-vars
const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback}) => (
    <div className={`card ${feedback}`}>
        <span className='symbol'>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card