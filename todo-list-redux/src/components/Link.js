import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

export default function Link(props) {
    return (
        <>
            <div id="show" onClick={props.onClick}
                 disabled={props.active}
            >{props.children}</div>
        </>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}