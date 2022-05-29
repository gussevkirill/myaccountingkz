import React from 'react'

function PriceItem({ title = 'Количество сотрудников в штате : 1 человек; Количество операций — до 30 в месяц.', priceFrom = '40 000', priceTo = '70 000' }) {
    return (
        <li className="service__page-price">
            <h3 className="service__page-price-title">
                { title }
            </h3>
            <button className="service__page-price-btn">От { priceFrom } тг - до { priceTo } тг</button>
        </li>
    )
}

export default PriceItem