import React from 'react'
import FilterService from "./services/filter"

const options = FilterService.OPTIONS
export default function Filter(props) {
    const { filter, change } = props
    const getClass = (key) => (key == filter ? 'selected' : '')

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