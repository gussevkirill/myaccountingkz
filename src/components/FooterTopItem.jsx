import React from 'react'

function FooterTopItem({ title = 'Телефон', text = '+7 (707) 324-97-23' }) {
    return (
        <li className="footer__top-item">
            <div className="footer__top-item-icon"></div>
            <h3 className="footer__top-item-title">{ title }</h3>
            <span className='footer__top-item-text'>{ text }</span>
        </li>
    )
}

export default FooterTopItem