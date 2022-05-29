import React from 'react'

function Result({ number = 6, text = 'лет на рынке' }) {
    return (
        <li className="main__content-item">
            <span className='main__content-item-number'>{ number }</span>
            <span className='main__content-item-text'>{ text }</span>
        </li>
    )
}

export default Result
