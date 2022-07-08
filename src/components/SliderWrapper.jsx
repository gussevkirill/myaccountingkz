import React from 'react'
import Slider from 'react-slick'
import SliderItem from './SliderItem'


function SliderWrapper() {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false
    }


    return (
        <div className="main__slider">
            <Slider { ...settings }>
                <SliderItem />
                <SliderItem
                    title={`Бухгалтерия это просто!`}
                    secondTitle='Онлайн бухгалтерия для вашего бизнеса'
                    text='"My.Accounting.KZ" – это автоматизированный сервис, позволяющий вести бухгалтерию вашей фирмы максимально просто, не затрачивая много времени и средств.'
                    slide='slide2'
                />
                <SliderItem
                    title='Оптимизация налогов законно'
                    secondTitle='"My.Accounting.KZ" поможет Вам законно сэкономить на налогах'
                    text='Снижение налоговой нагрузки законными методами называется налоговой оптимизацией и кардинально отличается от налоговых схем.'
                    slide='slide3'
                />
            </Slider>
        </div>
    )
}

export default SliderWrapper