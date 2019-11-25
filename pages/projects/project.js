//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
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
//!  Page : Project
//? EXPORT
const Project = props => {
    return(
        <>
            {props.Page}
        </>
    )
}

//! Default Props
Project.defaultProps = {
    Page: 'Project'
}
Project.propTypes = {
    Page: PropTypes.string
}

export default Project
