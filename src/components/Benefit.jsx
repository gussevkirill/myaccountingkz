import React from 'react'

function Benefit({ title = 'Доступность' }) {
    return (
        <li className="main__content-benefit">
            <div className="main__content-benefit-wrapper">
                <div className="main__content-benefit-icon"></div>
                <h3 className='main__content-benefit-title'>{ title }</h3>
            </div>
        </li>
    )
}

export default Benefit