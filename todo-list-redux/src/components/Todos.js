import React from 'react'
import PropTypes from 'prop-types'

export default function Todo(props){
    return(
        <div onClick={props.onClick}>{props.text}</div>
    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}