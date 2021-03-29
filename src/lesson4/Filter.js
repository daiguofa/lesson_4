import React from 'react'
import { getOptions } from './services/filter'

function Filter(props) {
    const options = getOptions()
    const { filter, change } = props
    console.log("filter", filter)
    const getClass = (key) => (key === filter) ? 'selected' : ''
    return (
        <ul className="filters list-unstyled clearfix">
            {
                Object.keys(options).map(key => (
                    <li key={key}>
                        <a onClick={() => change(key)} className={getClass(key)}>
                            {options[key]}
                        </a>
                    </li>
                ))
            }
        </ul>

    )
}

export default Filter