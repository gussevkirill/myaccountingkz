import PriceItem from 'components/PriceItem'
import Common from 'layouts/Common'
import React, { useState } from 'react'

function ServiceTwo({ title }) {

    const [arr, setArr] = useState([
        { id: 1, title: 'ФНО 100.00', from: '60 000' },
        { id: 2, title: 'ФНО 300.00', from: '40 000' },
        { id: 3, title: 'ФНО 200.00', from: '30 000' },
        { id: 4, title: 'ФНО 910.00 с цифрами', from: '10 000' },
        { id: 5, title: 'ФНО 910.00 нулевка', from: '2 000' },
        { id: 6, title: 'ФНО 220.00', from: '50 000' },
        { id: 7, title: 'ФНО 700.00, 701.00', from: '15 000' },
        { id: 8, title: 'ФНО 870.00', from: '15 000' },
        { id: 9, title: 'ФНО 270. 00', from: '3 000' },
    ])

    return (
        <Common>
            <div className="service__page">
                <div className="container">
                    <div className="service__paege-inner">
                        <div className="service__page-crumbs">
                            <span>Главная</span> / <span>Услуги</span> / <span>{ title }</span>
                        </div>
                        <h1 className="service__page-title">{ title }</h1>
                        <div className="service__page-content">
                            <p className="service__page-text">
                                My.Accounting.Kz подготовит и сдаст за Вас налоговую отчетность в соответствии с нормами законодательства и правилами заполнения ФНО.Мы отчитываемся за Вас перед государством. Собираем первичную бухгалтерскую документацию, обрабатываем, составляем и сдаем отчетную документацию в контролирующие органы.
                            </p>
                            <ul className="service__page-items">
                                <li className="service__page-item">
                                    <div className="service__page-item-icon service2"></div>
                                    <h3 className="service__page-item-title"> Профессионально</h3>
                                </li>
                                <li className="service__page-item">
                                    <div className="service__page-item-icon service2"></div>
                                    <h3 className="service__page-item-title">По доступной цене</h3>
                                </li>
                                <li className="service__page-item">
                                    <div className="service__page-item-icon service2"></div>
                                    <h3 className="service__page-item-title">Во время</h3>
                                </li>
                                <li className="service__page-item">
                                    <div className="service__page-item-icon service2"></div>
                                    <h3 className="service__page-item-title">С учетом всех нововведений</h3>
                                </li>
                            </ul>
                            <h3 className="service__page-title">Прайс</h3>
                            <p className="service__page-sub-title">Единовременная сдача налоговой отчетности</p>
                            <ul className="service__page-prices">
                                {
                                    arr.map(price =>
                                        <li key={price.id} className="service__page-price">
                                            <h3 className="service__page-price-title">{price.title}</h3>
                                            <button className="service__page-price-btn">От {price.from} тг</button>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Common>
    )
}

export default ServiceTwo