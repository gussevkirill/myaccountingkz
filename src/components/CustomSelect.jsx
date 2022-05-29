import React, { useState, useEffect } from 'react'

function CustomSelect({ title, items = null, onClick, type, selectedSelect, selectedValue }) {

    const [_title, setTitle] = useState(title)

    const openDropDown = e => onClick(Number(e.target.dataset.type))

    const setSelectedValue = item => () => {
        setTitle(item.title)
        selectedValue(item.title)
    }

    return (
        <div
            className={ `select ${selectedSelect === type && 'open'}` }
            onClick={ openDropDown }
        >
            <div className="select__input" data-type={ type }>
                <span>{ _title }</span>
            </div>
            <div className="select__drop-down">
                <ul className="select__drop-down-items">
                    {
                        items && items.map(item =>
                            <li
                                key={ item.id }
                                className="select__drop-down-item"
                                onClick={ setSelectedValue(item) }
                            >
                                { item.title }
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default CustomSelect