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

  const emailPattern = /^([a-zA-Z]{1,})@([a-zA-Z]){1,5}.[a-zA-Z]{1,5}$/

  const setField = field => e => {
    setFields(prev => ({ ...prev, [field]: field === 'phone' ? e.target.value.replace(/\D/g, '') : e.target.value }))
  }



  const sendApplication = async () => {

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

    const { data, status } = await axios.post('http://localhost:3001/letters', formData)
    if (status === 200) {
      setMessage({ status: 200, title: 'Спасибо за обращение' })
      for (const key in fields) {
        setFields(prev => ({ ...prev, [key]: '' }))
      }
      closeModal()
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
                />
              </label>
              <label>
                Комментарий
                <textarea
                  value={ fields['comment'] }
                  onChange={ setField('comment') }
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