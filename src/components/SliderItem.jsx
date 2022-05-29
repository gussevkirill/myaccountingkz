import React from 'react'

function SliderItem(config) {

    const {
        title = 'Аутсорсинг',
        secondTitle = 'Бухгалтерских и налоговых услуг',
        text = 'Занимайтесь бизнесом, а мы позаботимся о бухгалтерии',
        slide = 'slide1'
    } = config

    return (
        <div className={ `slider__item slide1 ${slide}` }>
            <div className="container">
                <div className="slider__item-wrapper">
                    <div className="slider__item-inner">
                        <h1 className='slider__item-title'>{ title }</h1>
                        <span className='slider__item-second-title'>{ secondTitle }</span>
                        <p className="slider__item-text">{ text }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem