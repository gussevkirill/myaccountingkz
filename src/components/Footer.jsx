import React from 'react'
import { Link } from 'react-router-dom'
import FooterTopItem from './FooterTopItem'


function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__top">
                    <ul className="footer__top-items">
                        <FooterTopItem />
                        <FooterTopItem
                            title='Адрес'
                            text='ул.Муканова 49/11 офис 30'
                        />
                        <FooterTopItem
                            title='E-mail'
                            text='lga-9797@mail.ru'
                        />
                        <FooterTopItem
                            title='Режим работы'
                            text='Пн-Пт с 09:00 до 18:00'
                        />
                    </ul>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom-left">
                        <span className='footer__bottom-left-text'>My.Accounting.KZ © 2022 | Все права защищены</span>
                        <Link to={ '/confidencial' }>
                            <span className='footer__bottom-left-text'>Политика конфиденциальности</span>
                        </Link>
                    </div>
                    <div className="footer__bottom-right">
                        <ul className="footer__bottom-right-items">
                            <li className="footer__bottom-right-item">
                                <a href="https://www.instagram.com/my.accounting.kz/">inst</a>
                            </li>
                            <li className="footer__bottom-right-item">
                                <a href="https://t.me/GussevaLA">telegram</a>
                            </li>
                            <li className="footer__bottom-right-item">
                                <a href="https://wa.me/77073249723">whatsapp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer