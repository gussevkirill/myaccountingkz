import { services } from 'data/services'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Button from 'ui/buttons/Button'
import Modal from './Modal'

function Header() {

    const [isDropDownOpen, setisDropDownOpen] = useState(false)

    const openDropDown = () => setisDropDownOpen(!isDropDownOpen)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(!isModalOpen)

    return (
        <header className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <span className="header__logo-title">   My.Accounting.KZ</span>
                        <span className="header__logo-second-title">Бухгалтерские услуги</span>
                    </div>
                    <ul className="header__items">
                        <li className="header__items-address">
                            <strong className='header__items-address-title'>Адрес</strong>
                            <span className='header__items-address-text'>
                                ул.Муканова 49/11 офис 30
                            </span>
                        </li>
                        <li className="header__items-phone">
                            <a className='header__items-phone-link' href="tel:+77073249723">
                                <strong className='header__items-phone-title'>Телефон</strong>
                                <span className='header__items-phone-text'>
                                    +7 (707) 324-97-23
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div className="header__btns">
                        <Button onClick={ openModal }>Обратная связь</Button>

                        <div className="header__user">
                            <NavLink to={ '/ask' }>
                                <div className="header__user-name">
                                    <span>+ Новый вопрос</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__nav-items">
                            <NavLink to={ '/' }>
                                <li className="header__nav-item"><span>Главная</span></li>
                            </NavLink>
                            <NavLink to={ '/about-me' }>
                                <li className="header__nav-item"><span>Обо мне</span></li>
                            </NavLink>
                            <li
                                className="header__nav-item"
                                onClick={ openDropDown }
                            >
                                <span>Услуги</span>
                                <div className={ `header__nav-drop-down ${isDropDownOpen && 'open'}` }>
                                    <ul className="header__nav-drop-down-items">
                                        {
                                            services && services.map(service =>
                                                <NavLink
                                                    key={ service.id }
                                                    to={ `/service/${service.id}` }
                                                >
                                                    <li
                                                        key={ service.id }
                                                        className="header__nav-drop-down-item"
                                                    >
                                                        <span>
                                                            { service.title }
                                                        </span>
                                                    </li>
                                                </NavLink>
                                            )
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Modal
                active={ isModalOpen }
                setActive={ setIsModalOpen }
            />
        </header>
    )
}

export default Header