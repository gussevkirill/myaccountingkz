import About from 'components/About'
import Benefits from 'components/Benefits'
import Reviews from 'components/Reviews'
import Services from 'components/Services'
import SliderWrapper from 'components/SliderWrapper'
import Successed from 'components/Successed'
import Common from 'layouts/Common'
import React from 'react'

function Main() {
    return (
        <Common>
            <SliderWrapper />
            <Successed />
            <Services />
            <Benefits />
            <About />
            <Reviews />
        </Common>
    )
}

export default Main