import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import '../App.css'

export default function Footer() {
    return (
        <div id="container">
            <span>Show: </span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        </div>
    )
}