import React from 'react'
import Benefit from './Benefit'

function Benefits() {
    return (
        <section className="main__benefits">
            <div className="container">
                <h3 className="main__content-benefits-title">Наши преимущества</h3>
                <ul className="main__content-benefits">
                    <Benefit />
                    <Benefit
                        title='Время'
                    />
                    <Benefit
                        title='Качество'
                    />
                </ul>
            </div>
        </section>
    )
}

export default Benefits