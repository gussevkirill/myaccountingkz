import Common from 'layouts/Common'
import React from 'react'

function ServiceFour({ title }) {
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
                                Не знаете какую форму выбрать - ТОО или ИП?
                                Не разбираетесь в налогообложении и имеющихся системах?<br />
                                Я помогу вам  в открытии ТОО или ИП, оперативно составлю все необходимые документы и помогу определиться с выгодной системой налогообложения.
                            </p>
                            <p className="service__page-text">
                                <span>Что входит в услугу?</span>
                                <ul className='service__page-list'>
                                    <li>Первичная консультация: проверим название, подберем коды ОКЭД</li>
                                    <li>Составление пакета документов</li>
                                    <li>Проверка документов после завершения регистрации</li>
                                    <li>Выбор системы налогообложения</li>
                                    <li>Помощь в открытии расчетного счета</li>
                                    <li>Помощь в изготовлении печати</li>
                                </ul>
                            </p>
                            <p className="service__page-text">
                                <span>Что необходимо для регистрации?</span>
                                <ul className='service__page-list'>
                                    <li>для ИП - данные удостоверения личности</li>
                                    <li>для ТОО - название компании, юридический адрес, данные об учредителях</li>
                                </ul>
                            </p>
                            <h3 className="service__page-title">Прайс</h3>
                            <p className="service__page-sub-title">ПРИ РЕГИСТРАЦИИ БИЗНЕСА - СКИДКА 50% НА 1 МЕСЯЦ БУХГАЛТЕРСКОГО ОБСЛУЖИВАНИЯ!</p>
                            <ul className="service__page-prices">
                                <li className="service__page-price">
                                    <h3 className="service__page-price-title">Для ИП</h3>
                                    <button className="service__page-price-btn">От 10 000 тг</button>
                                </li>
                                <li className="service__page-price">
                                    <h3 className="service__page-price-title">Для ТОО</h3>
                                    <button className="service__page-price-btn">От 50 000 тг</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Common>
    )
}

export default ServiceFour