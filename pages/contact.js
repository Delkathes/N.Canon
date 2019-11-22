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
//!  Page : Contact
//? EXPORT
const Contact = props => {
    return (
        <>
            {props.Page}
        </>
    )
}

//! Default Props
Contact.defaultProps = {
    Page: 'Contact'
}
Contact.propTypes = {
    Page: PropTypes.string
}

export default Contact