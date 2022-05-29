import { services } from 'data/services'
import React from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'


function Services() {
    return (
        <section className="main__services">
            <div className="container">
                <ul className="main__content-services">
                    {
                        services && services.map(service =>
                            <Link
                                key={ service.id }
                                to={ `/service/${service.id}` }
                            >
                                <Service
                                    key={ service.id }
                                    title={ service.title }
                                />
                            </Link>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default Services