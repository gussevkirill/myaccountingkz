import React from 'react'

function Service({ title = 'Бухгалтерское и налоговое сопровождение (Аутсорсинг)' }) {
    return (
        <li className="main__content-sercvice">
            <div className="main__content-sercvice-wrapper">
                <h3 className="main__content-sercvice-title">{ title }</h3>
                <span className='main__content-sercvice-next'>Подробности →</span>
            </div>
        </li>
    )
}

export default Service