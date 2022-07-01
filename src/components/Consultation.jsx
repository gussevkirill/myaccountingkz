import React, { useState } from 'react'
import CustomSelect from './CustomSelect'
import axios from 'axios'
import Common from 'layouts/Common'
import Rules from './Rules'
import Button from 'ui/buttons/Button'
import { useNavigate } from 'react-router-dom'

function Consultation({ consultationType }) {


    const [selectedSelect, setSelectedSelect] = useState(0)
    const [isRead, setIsRead] = useState(null)
    const history = useNavigate()

    const [fields, setFields] = useState({
        organization: '',
        type: '',
        mode: '',
        respresentation: '',
        name: '',
        email: '',
        phone: '',
        home_phone: '',
        // number: '',
        question: '',
        text: '',
        file: null,
        isPayer: false
    })


    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const setFieldValue = (type, item) => {
        setFields(prev => ({
            ...prev, [type]: type.match(/(phone|home_number|number)/) ? item.replace(/\D/g, '') : item
        }))
    }

    const loadFile = e => {
        const file = e.target.files[0]
        if (!file) return
        if (file.size <= 15 * (1024 ** 2)) {
            setFields(prev => ({ ...prev, 'file': e.target.files[0] }))
            setMessage({ status: 200, title: `Файл загружен (${e.target.files[0].name})` })
            return
        }

        setFields(prev => ({ ...prev, 'file': null }))
        setMessage({ status: 401, title: 'Большой размер файла' })
    }



    const orderConsultation = async (e) => {
        const formData = new FormData()
        const { file, isPayer, ...other } = fields

        formData.append('message', 'question')
        formData.append('title', consultationType === 'phone' ? 'Телефонная консультация' : 'Письменная консультация')
        formData.append('isPayer', isPayer)
        formData.append('consultation_type', consultationType)

        for (const key in other) {
            if (!fields[key].length) {
                setError(true)
                setMessage({ status: 401, title: 'Заполните все поля' })
                return
            }
            formData.append(key, fields[key])
        }

        if (file) formData.append('file', fields['file'])

        setError(false)
        const { data, status } = await axios.post(`${process.env.REACT_APP_BACKAND_URL}/letters`, formData)

        if (status === 200) {
            // setMessage({ status: 200, title: data.message })
            window.location.href = data.link
            // setTimeout(() => {
            //     history('/')
            // }, 2000);
        }
    }

    return (
        <Common>
            <div className="container">
                {
                    !isRead
                        ? <Rules
                            agree={ value => {
                                setIsRead(true)
                            } }
                            ruleType={ consultationType === 'phone' }
                        />
                        : <div className='phoneconsultation'>
                            {
                                <div className={ `message ${message ? message?.status === 200 ? 'success' : 'error' : null}` }>
                                    <span>{ message?.title }</span>
                                </div>
                            }
                            <h1 className="phoneconsultation__title">Создание вопроса</h1>
                            <div className="phoneconsultation__input">
                                <CustomSelect
                                    title={ 'Организационно-правовая форма организации' }
                                    items={
                                        [
                                            { id: 0, title: 'TOO' },
                                            { id: 1, title: 'АО' },
                                            { id: 2, title: 'ИП' },
                                            { id: 3, title: 'Организации, задействованные в социальной сфере' },
                                            { id: 4, title: 'Государственные учреждения' },
                                            { id: 5, title: 'Некоммерческие организации' },
                                            { id: 6, title: 'ГКП' },
                                        ]
                                    }
                                    type={ 1 }
                                    selectedSelect={ selectedSelect }
                                    selectedValue={ item => {
                                        setFieldValue('organization', item)
                                    } }
                                    onClick={ num => {
                                        setSelectedSelect(num)
                                    } }
                                />
                            </div>
                            <div className="phoneconsultation__input">
                                <CustomSelect
                                    title={ 'Вид деятельности' }
                                    items={
                                        [
                                            { id: 0, title: 'торговля(оптовая, розничная)' },
                                            { id: 1, title: 'строительство' },
                                            { id: 2, title: 'производство' },
                                            { id: 3, title: 'недропользование' },
                                            { id: 4, title: 'оказание услуг населению и юридическим лицам' },
                                            { id: 5, title: 'здравоохранение' },
                                            { id: 6, title: 'образование' },
                                            { id: 7, title: 'энергетика' },
                                            { id: 8, title: 'ГКП' },
                                            { id: 9, title: 'СНТ' },
                                            { id: 10, title: 'другое' },
                                        ]
                                    }
                                    type={ 2 }
                                    selectedSelect={ selectedSelect }
                                    selectedValue={ item => {
                                        setFieldValue('type', item)
                                    } }
                                    onClick={ num => {
                                        setSelectedSelect(num)
                                    } }
                                />
                            </div>
                            <div className="phoneconsultation__input toggle">
                                <CustomSelect
                                    title={ 'Налоговый режим' }
                                    items={
                                        [
                                            { id: 0, title: 'Общеустановленный режим налогообложения' },
                                            { id: 1, title: 'СНР на основе упрощенной декларации' },
                                            { id: 2, title: 'СНР для юридических лиц- производителей с/х продукции, аквакультуры и сельских потребительских кооперативов,  осуществление деятельности  на территориях СЭЗ' },
                                            { id: 3, title: 'СНР ИП: на основе патента' },
                                            { id: 4, title: 'СНР ИП: для крестьянских или фермерских хозяйств' },
                                        ]
                                    }
                                    type={ 3 }
                                    selectedSelect={ selectedSelect }
                                    selectedValue={ item => {
                                        setFieldValue('mode', item)
                                    } }
                                    onClick={ num => {
                                        setSelectedSelect(num)
                                    } }
                                />
                                <label>
                                    <div
                                        className="phoneconsultation__input-checkbox"
                                        onClick={ e => setFieldValue('isPayer', !fields['isPayer']) }
                                    >
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    Плательщик НДС
                                </label>
                            </div>
                            <div className="phoneconsultation__input">
                                <CustomSelect
                                    title={ 'Представительство ИП My.Accounting.KZ' }
                                    items={
                                        [
                                            { id: 0, title: 'Алматы' },
                                            { id: 1, title: 'Нур-Султан' },
                                            { id: 2, title: 'Актау' },
                                            { id: 3, title: 'Актобе' },
                                            { id: 4, title: 'Атырау' },
                                            { id: 5, title: 'Караганда' },
                                            { id: 6, title: 'Кокшетау' },
                                            { id: 7, title: 'Кустанай' },
                                            { id: 8, title: 'Павлодар' },
                                            { id: 9, title: 'Петропавловск' },
                                            { id: 10, title: 'Семипалатинск' },
                                            { id: 11, title: 'Талдыкорган' },
                                            { id: 12, title: 'Уральск' },
                                            { id: 13, title: 'Усть-Каменогорск' },
                                            { id: 14, title: 'Шымкент' },
                                        ]
                                    }
                                    type={ 4 }
                                    selectedSelect={ selectedSelect }
                                    selectedValue={ item => {
                                        setFieldValue('respresentation', item)
                                    } }
                                    onClick={ num => {
                                        setSelectedSelect(num)
                                    } }
                                />
                            </div>
                            <div className="phoneconsultation__input data">
                                <div className="phoneconsultation__input-left">
                                    <input
                                        type="text"
                                        placeholder='Контактное лицо'
                                        value={ fields['name'] }
                                        onChange={ e => setFieldValue('name', e.target.value) }
                                        maxLength='150'
                                    />
                                    <span className='phoneconsultation__input-error'></span>
                                </div>
                                <div className="phoneconsultation__input-right">
                                    <input
                                        type="text"
                                        placeholder='Электронная почта'
                                        value={ fields['email'] }
                                        onChange={ e => setFieldValue('email', e.target.value) }
                                        maxLength='150'
                                    />
                                    <span className='phoneconsultation__input-error'></span>
                                </div>
                            </div>
                            <div className="phoneconsultation__input number">
                                <div className="phoneconsultation__input-left">
                                    <input
                                        type="text"
                                        placeholder='Номер мобильного телефона'
                                        value={ fields['phone'] }
                                        onChange={ e => setFieldValue('phone', e.target.value) }
                                        maxLength='11'
                                    />
                                    <span className='phoneconsultation__input-error'></span>
                                </div>
                                <div className="phoneconsultation__input-right">
                                    <input
                                        type="text"
                                        placeholder='Номер городского телефона'
                                        value={ fields['home_phone'] }
                                        onChange={ e => setFieldValue('home_phone', e.target.value) }
                                        maxLength='14'
                                    />
                                    <span className='phoneconsultation__input-error'></span>
                                </div>
                                {/* <div className="phoneconsultation__input-right">
                                    <input
                                        type="text"
                                        placeholder='Вн. номер'
                                        value={ fields['number'] }
                                        onChange={ e => setFieldValue('number', e.target.value) }
                                        maxLength='50'
                                    />
                                    <span className='phoneconsultation__input-error'></span>
                                </div> */}
                            </div>
                            <div className="phoneconsultation__input">
                                <CustomSelect
                                    title={ 'Тема вопроса' }
                                    items={
                                        [
                                            { id: 0, title: 'Не указана' },
                                            { id: 1, title: 'Консультации по 1С' },
                                            { id: 2, title: 'Оплата труда' },
                                            { id: 3, title: 'Налоговый учет' },
                                            { id: 4, title: 'Бухгалтерский учет' },
                                            { id: 5, title: 'Прочее' },
                                        ]
                                    }
                                    type={ 5 }
                                    selectedSelect={ selectedSelect }
                                    selectedValue={ item => {
                                        setFieldValue('question', item)
                                    } }
                                    onClick={ num => {
                                        setSelectedSelect(num)
                                    } }
                                />
                            </div>
                            <textarea
                                className="phoneconsultation__input-text"
                                placeholder='Текст вопроса'
                                value={ fields['text'] }
                                onChange={ e => setFieldValue('text', e.target.value) }
                                maxLength='255'
                            ></textarea>
                            <div className="phoneconsultation__btn">
                                <label>
                                    <input
                                        type="file"
                                        onChange={ loadFile }
                                    />

                                    Прикрепить файл
                                </label>
                                <Button onClick={ orderConsultation }>Задать вопрос</Button>
                            </div>
                        </div>
                }
            </div>
        </Common>

    )
}

export default Consultation