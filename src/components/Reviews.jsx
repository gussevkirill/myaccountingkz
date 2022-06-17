import axios from 'axios'
import React, { useState } from 'react'
import Slider from 'react-slick'
import { reviews } from 'utils'

function Reviews() {

    const settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const [fields, setFields] = useState({
        name: { error: false, title: '' },
        text: { error: false, title: '' }
    })

    const [status, setStatus] = useState(null)

    const setField = field => e => {
        setFields(prev => ({ ...prev, [field]: { ...prev[field], title: e.target.value, error: !e.target.value.length } }))
    }


    const sendReview = async () => {
        const formData = new FormData()

        for (const key in fields) {
            if (!fields[key]['title'].length) {
                setFields(prev => ({ ...prev, [key]: { ...prev[key], error: true } }))
                return
            }
        }

        formData.append('message', 'review')
        formData.append('title', 'Отзыв')

        formData.append('name', fields['name']['title'])
        formData.append('text', fields['text']['title'])


        // const { data, status } = await axios.post('http://myaccounting97.ru:3001/letters', formData)
        const { data, status } = await axios.post('http://localhost:3001/letters', formData)

        if (status === 200) {
            setStatus(status)
            setTimeout(() => {
                setStatus(null)
            }, 1500);
            for (const key in fields) {
                setFields(prev => ({ ...prev, [key]: { ...prev[key], title: '' } }))
            }
        }
    }



    return (
        <div className='reviwes'>
            <div className="reviwes__inner">
                <div className="container">
                    <h1 className='reviwes__title'>Отзывы</h1>
                    <Slider { ...settings }>
                        {
                            reviews.map(review =>
                                <div key={ review.id } className="reviwes__item">
                                    <p className="reviwes__item-text">
                                        { review.text }
                                    </p>
                                    <span className="reviwes__item-name">- { review.author }</span>
                                </div>
                            )
                        }
                        <div className="reviwes__item">
                            <label className='reviwes__item-label'>
                                Имя
                                <input
                                    type="text"
                                    placeholder='Введите имя'
                                    value={ fields['name']['title'] }
                                    onChange={ setField('name') }
                                    style={ {
                                        borderColor: fields['name']['error'] ? 'red' : 'white'
                                    } }
                                />
                            </label>
                            <label className='reviwes__item-label'>
                                Отзыв
                                <textarea
                                    value={ fields['text']['title'] }
                                    onChange={ setField('text') }
                                    style={ {
                                        borderColor: fields['text']['error'] ? 'red' : 'white'
                                    } }
                                ></textarea>
                            </label>
                            <button
                                className='reviwes__item-btn btn'
                                onClick={ sendReview }
                            >Отправить</button>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className={ `notification ${status && 'show'}` }>
                <h1>Отзыв отправлен</h1>
            </div>
        </div>
    )
}

export default Reviews