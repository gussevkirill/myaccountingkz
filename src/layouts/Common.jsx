import Footer from 'components/Footer'
import Header from 'components/Header'
import SliderWrapper from 'components/SliderWrapper'
import React from 'react'
import { useState, useEffect } from 'react'

function Common({ children }) {

    const [showArrowUp, setShowArrowUp] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = e => {
        const scrollTop = e.target.documentElement.scrollTop
        if (scrollTop > 500) setShowArrowUp(true)
        else setShowArrowUp(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='main__page-layout'>
            <Header />
            <div className="main">
                {
                    children
                }
            </div>
            <Footer />
            <div
                className={ `scroll_up ${showArrowUp && 'show'}` }
                onClick={ scrollToTop }
            ></div>
        </div>
    )
}

export default Common