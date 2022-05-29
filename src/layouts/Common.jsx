import Footer from 'components/Footer'
import Header from 'components/Header'
import SliderWrapper from 'components/SliderWrapper'
import React from 'react'

function Common({ children }) {
    return (
        <div className='main__page-layout'>
            <Header />
            <div className="main">
                {
                    children
                }
            </div>
            <Footer />
        </div>
    )
}

export default Common