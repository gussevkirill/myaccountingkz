import Common from 'layouts/Common'
import React from 'react'

function ServiceFive({ title }) {
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
                                Вы решили взять паузу и приостановить предпринимательскую деятельность?<br />
                                Приняли решение о закрытии бизнеса?
                            </p>
                            <p className="service__page-text">
                                <span>Оформим для Вас:</span>
                                <ul className='service__page-list'>
                                    <li>Приостановление сдачи налоговой отчетности</li>
                                    <li>Ликвидацию ТОО или ИП</li>
                                </ul>
                            </p>
                            <p className="service__page-text">
                                <span>Что входит в услугу?</span>
                                <ul className='service__page-list'>
                                    <li>Подготовка всех необходимых налоговых форм</li>
                                    <li>Оформление всех необходимых юридических документов</li>
                                </ul>
                            </p>
                            <h3 className="service__page-title">Прайс</h3>
                            <p className="service__page-sub-title">Стоимость приостановления</p>
                            <ul className="service__page-prices">
                                <li className="service__page-price">
                                    <h3 className="service__page-price-title">Для ИП</h3>
                                    <button className="service__page-price-btn">От 10 000 тг (на патенте)</button>
                                </li>
                                <li className="service__page-price">
                                    <h3 className="service__page-price-title">Для ТОО</h3>
                                    <button className="service__page-price-btn">От 20 000 тг</button>
                                </li>
                            </ul>
                            <p className="service__page-sub-title">Стоимость ликвидации</p>
                            <ul className="service__page-prices">
                                <li className="service__page-price">
                                    <h3 className="service__page-price-title">Для ИП</h3>
                                    <button className="service__page-price-btn">От 10 000 тг</button>
                                </li>
                                <li className="service__page-price">
                                    <h3 className="service__page-price-title">Для ТОО</h3>
                                    <button className="service__page-price-btn">От 100 000 тг</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Common>
    )
}

export default ServiceFive