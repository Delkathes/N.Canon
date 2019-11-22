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
//!  Page : About
//? EXPORT
const About = props => {
    return (
        <>
            {props.Page}
        </>
    )
}

//! Default Props
About.defaultProps = {
    Page: 'About'
}
About.propTypes = {
    Page: PropTypes.string
}

export default About