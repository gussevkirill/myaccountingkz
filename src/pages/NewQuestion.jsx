import { Form } from 'components/Form'
import Common from 'layouts/Common'
import React from 'react'
import { Link } from 'react-router-dom'

function NewQuestion() {
    return (
        <Common>
            <div className="container">
                <div className='new-question'>
                    <h3 className='new-question-title'>Выбор консультации</h3>
                    <ul className="new-question-items">
                        <Link to={ `/consultation-phone` }>
                            <li className="new-question-item">
                                <div className="new-question-item-img">
                                    <img src="/imgs/call.svg" alt="" />
                                </div>
                                <h3 className="new-question-item-title">Телефонная консультация</h3>
                                <button className='new-question-item-btn'>Запросить консультацию</button>
                            </li>
                        </Link>
                        <Link to={`/consultation-mail`}>
                        <li className="new-question-item">
                            <div className="new-question-item-img">
                                <img src="/imgs/mess.svg" alt="" />
                            </div>
                            <h3 className="new-question-item-title">Письменная консультация</h3>
                            <button className='new-question-item-btn'>Написать вопрос</button>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </Common>
    )
}

export default NewQuestion