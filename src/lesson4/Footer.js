import React from 'react'
import Filter from "./Filter"

function Footer(props) {
    const { count, filter, changeFilter } = props
    return (
        <div className="footer">
            <strong>
                <span className="count-todos">
                    {count}
                </span>
                {'items left'}
            </strong>
            <div>
                <Filter filter={filter} change={changeFilter} />
            </div>
        </div>
    )
}

export default Footer