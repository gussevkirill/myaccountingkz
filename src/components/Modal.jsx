import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Input from './Input'

function Modal({ active, setActive }) {

  const closeModal = () => {
    setActive(false)
    setMessage(null)
  }

  const [fields, setFields] = useState({
    'name': '',
    'email': '',
    'phone': '',
    'comment': '',
  })

  const [message, setMessage] = useState(null)

  const emailPattern = /^([\w\d]{1,})@([\w]){1,5}.[\w]{1,5}$/

  const setField = field => e => {
    setFields(prev => ({ ...prev, [field]: field === 'phone' ? e.target.value.replace(/\D/g, '') : e.target.value }))
  }



  const sendApplication = async (e) => {

    const formData = new FormData()

    for (const key in fields) {
      if (!fields[key].length) {
        setMessage({ status: 401, title: 'Заполните все поля' })
        return
      }
      setMessage(null)
      formData.append(key, fields[key])
    }

    if (!emailPattern.test(String(fields['email']).toLowerCase())) {
      setMessage({ status: 401, title: 'Невалидный email' })
      return
    }

    formData.append('message', 'letter')
    formData.append('title', 'Обратная связь')
    e.target.disabled = true
    const { data, status } = await axios.post(`${process.env.REACT_APP_BACKAND_URL}/letters`, formData)

    if (status === 200) {
      setMessage({ status: 200, title: 'Письмо доставленно' })

      for (const key in fields) {
        setFields(prev => ({ ...prev, [key]: '' }))
      }
      setTimeout(() => {
        closeModal()
        e.target.disabled = false
      }, 1500);
    }
  }

  return (
    <div className={ `modal ${active && 'active'}` }>
      <div
        className="modal__parandja"
      >
        <div className="modal__inner">
          <div className="modal__modal">
            <div className="modal__top">
              <h3 className="modal__top-title">Оставить заявку</h3>
              {
                message && <span style={
                  {
                    color: message.status === 401 ? 'red' : 'green',
                    marginRight: '15px'
                  }
                }>{ message.title }</span>
              }

              <img
                className='modal__top-exit'
                src="/imgs/exit.svg"
                onClick={ closeModal }
              />
            </div>
            <div className="modal__body">
              <label>
                Введите имя
                <Input
                  value={ fields['name'] }
                  onChange={ setField('name') }
                  className="modal__body-input"
                  placeholder='Как к вам обращаться'
                  maxLength='50'
                />
              </label>
              <label>
                Введите E-mail
                <Input
                  className="modal__body-input"
                  placeholder='Контактный E-mail'
                  value={ fields['email'] }
                  onChange={ setField('email') }
                  type='email'
                  maxLength='150'
                />
              </label>
              <label>
                Введите телефон
                <Input
                  className="modal__body-input"
                  placeholder='Контактный телефон'
                  value={ fields['phone'] }
                  onChange={ setField('phone') }
                  type='text'
                  maxLength='11'
                />
              </label>
              <label>
                Комментарий
                <textarea
                  value={ fields['comment'] }
                  onChange={ setField('comment') }
                  maxLength='255'
                ></textarea>
              </label>
              <button
                className="modal__body-btn btn"
                onClick={ sendApplication }
              >Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal