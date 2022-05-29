import PriceItem from 'components/PriceItem'
import Common from 'layouts/Common'
import React,{useState} from 'react'

function ServiceOne({ title }) {

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
                                Современная компания My.Ассоunting.KZ примет Вашу компанию на аутсорсинг и сделает так, что Вам не придется отвлекаться на бухгалтерию и налоговые хлопоты.
                                Благодаря отложенным бизнес-процессам, профессиональным навыкам, компания удаленно ведет бухгалтерский учет, составляет и предоставляет в гос.органы налоговую и статистическую отчетности.
                                С Вас — своевременное предоставление документов!
                            </p>

                            <ul className="service__page-items">
                                <li className="service__page-item">
                                    <div className="service__page-item-icon"></div>
                                    <h3 className="service__page-item-title">ГАРАНТИЯ И СТРАХОВАНИЕ</h3>
                                    <span className="service__page-item-text">от любых ошибок и штрафов. </span>
                                </li>
                                <li className="service__page-item">
                                    <div className="service__page-item-icon"></div>
                                    <h3 className="service__page-item-title">АВТОМАТИЗАЦИЯ ПРОЦЕССОВ</h3>
                                    <span className="service__page-item-text">и стандарты работы для Вашего минимального вовлечения </span>
                                </li>
                                <li className="service__page-item">
                                    <div className="service__page-item-icon"></div>
                                    <h3 className="service__page-item-title">ОПТИМИЗАЦИЯ ЗАТРАТ</h3>
                                    <span className="service__page-item-text">как за счёт аутсорсинга бухгалтерии, так и в процессе работы</span>
                                </li>
                            </ul>

                            <h3 className="service__page-title">Прайс</h3>
                            <p className="service__page-sub-title">Полное ведение бухгалтерского и налоговоого учета для ИП</p>
                            <ul className="service__page-prices">
                                <PriceItem />
                                <PriceItem
                                    title='Количество сотрудников в штате : 3 человек; Количество операций — до 60 в месяц'
                                    priceFrom='50 0000'
                                    priceTo='80 000'
                                />
                                <PriceItem
                                    title='Количество сотрудников в штате : 1 человек; Количество операций — до 30 в месяц.'
                                    priceFrom='40 0000'
                                    priceTo='70 000'
                                />
                                <PriceItem
                                    title=' Количество сотрудников в штате : 15 человек; Количество операций — до 120 в месяц.'
                                    priceFrom='100 0000'
                                    priceTo='120 000'
                                />
                                <PriceItem
                                    title='Количество сотрудников в штате : 30 человек; Количество операций — до 300 в месяц'
                                    priceFrom='140 0000'
                                    priceTo='200 000'
                                />
                            </ul>

                            <p className='service__page-sub-title'>Полное ведение бухгалтерского и налоговоого учета для ТОО</p>
                            <ul className="service__page-prices">
                                <PriceItem
                                    title='Количество сотрудников в штате : 1 человек; Количество операций — до 30 в месяц.'
                                    priceFrom='50 000'
                                    priceTo='80 000'
                                />
                                <PriceItem
                                    title='   Количество сотрудников в штате : 3 человек; Количество операций — до  60 в месяц'
                                    priceFrom='70 000'
                                    priceTo='100 000'
                                />
                                <PriceItem
                                    title='Количество сотрудников в штате : 15 человек; Количество операций — до 120 в месяц.'
                                    priceFrom='100 000'
                                    priceTo='140 000'
                                />
                                <PriceItem
                                    title='  Количество сотрудников в штате : 30 человек; Количество операций — до 300 в месяц.'
                                    priceFrom='150 000'
                                    priceTo='250 000'
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Common>
    )
}

export default ServiceOne