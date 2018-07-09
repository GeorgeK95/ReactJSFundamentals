import React from 'react'
import Menu from './Menu'
import ViewComponent from './ViewComponent'

export default Wrapper => {
    return (
        <div>
            <Menu/>
            <ViewComponent/>
        </div>
    )
}
