//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
//! Components
//! High-order-components
//!  Page : Experiences
//? EXPORT
const Experiences = props => {
    return (
        <>
            {props.Page}
        </>
    )
}

//! Default Props
Experiences.defaultProps = {
    Page: 'Experiences'
}
Experiences.propTypes = {
    Page: PropTypes.string
}

export default Experiences