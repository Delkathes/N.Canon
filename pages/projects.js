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
//!  Page : Projects
//? EXPORT
const Projects = props => {
    return(
        <>
            {props.Page}
        </>
    )
}

//! Default Props
Projects.defaultProps = {
     Page: 'Projects'
}
Projects.propTypes = {
    Page: PropTypes.string
}

export default Projects