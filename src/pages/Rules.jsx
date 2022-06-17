import React from 'react'

function Rules({path}) {
    return (
        <div style={ { height: '100vh' } }>
            <embed src={ path } width='100%' height='100%' type="" />
        </div>
    )
}

export default Rules