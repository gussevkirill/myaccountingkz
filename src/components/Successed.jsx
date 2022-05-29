import React from 'react'
import Result from './Result'

function Successed() {
    return (
        <section className="main__content">
            <div className="container">
                <ul className="main__content-items">
                    <Result />
                    <Result
                        number={ 357 }
                        text='клиентов'
                    />
                    <Result
                        number='22,5'
                        text='миллиона экономии клиентов'
                    />
                    <Result
                        number={ 4737 }
                        text='чашек кофе'
                    />
                </ul>
            </div>
        </section>
    )
}

export default Successed