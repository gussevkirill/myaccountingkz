import { Children, cloneElement,useState } from "react";

export function Form({ children }) {

    const [activeItem, setActiveItem] = useState(0)

    return (
        Children.map(children, (child, index) =>
            child && <div className={`elem ${index === activeItem && 'display'}`}>
                { cloneElement(child) }
            </div>
        )
    )
}