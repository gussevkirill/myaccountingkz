import Common from 'layouts/Common'
import React from 'react'

function ServiceThree({ title }) {
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
                                Восстановление бухгалтерского учета - это сложный процесс, в ходе которого нужно привести в порядок
                                все документы, восстановить отсутствующие, подготовить и отправить отчеты.
                                Мы восстановим Ваши документы, приведем в порядок системы учета и поможем настроить дальнейшую работу
                            </p>
                            <p className="service__page-text">
                                Сроков для восстановления учета в законодательстве нет. Но откладывать восстановление не стоит:
                                если к вам нагрянет налоговая проверка, а у вас нет нужных документов — ждите штрафов и блокировки счета.
                                Восстановление налогового и бухгалтерского учета необходимо, как минимум, за период охвата налоговой проверкой (3 года для МСБ и 5 лет для крупного бизнеса). А также, не забываем про документацию, попадающую под трансфертное ценообразование (период охвата - 7 лет).
                            </p>
                            <p className="service__page-text">
                                <span>Что входит в услугу?</span>
                                <ul className='service__page-list'>
                                    <li>Восстановление бухгалтерской и налоговой отчетности</li>
                                    <li>Приведение в порядок всех документов</li>
                                    <li>Восстановление отсутствующих документов и отчетов</li>
                                    <li>Сдача всех необходимых налоговых отчетов (либо исправленных налоговых отчетов)</li>
                                    <li>Восстановление данных в учетной базе</li>
                                    <li>Настройка учетной базы для ведения учета</li>
                                    <li>Консультации по ведению дальнейшего учета</li>
                                </ul>
                            </p>
                            <p className="service__page-text">
                                <span>Когда нужно восстановление учета?</span>
                                <ul className='service__page-list'>
                                    <li>Вы не вели учет, а бизнес вырос и учет стал необходимостью</li>
                                    <li>Первичные документы утеряны (переезд, хищение, пожар)</li>
                                    <li>Бухгалтер не выходит на связь, а все документы у него</li>
                                    <li>Налоговая выставляет уведомления / блокирует счета / предъявляет штрафы к оплате</li>
                                </ul>
                            </p>
                            <p className="service__page-text">
                                <span>Для восстановления необходимы:</span>
                                <ul className='service__page-list'>
                                    <li>Все имеющиеся первичные документы и отчеты</li>
                                    <li>Доступ в учетную базу</li>
                                </ul>
                            </p>
                            <p className="service__page-text">
                                Стоимость зависит от налогового режима, количества восстанавливаемых документов и срочности восстановления:
                            </p>
                            <h3 className="service__page-title">Прайс</h3>
                            <ul className="service__page-prices">
                                <li className="service__page-price">
                                    <h3 className="service__page-price-title">1 восстанавливаемый месяц</h3>
                                    <button className="service__page-price-btn">От 30 000 тг</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Common>
    )
}

export default ServiceThree