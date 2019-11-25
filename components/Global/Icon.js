//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
// import {useSpring, animated, config} from 'react-spring'
import {animated} from 'react-spring'
import PropTypes from 'prop-types'
import {FaArrowRight, FaGithub, FaLinkedinIn, FaFilePdf} from 'react-icons/fa'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const styleIcon = {
    position: 'relative',
    zIndex: '-1'
}
//! Components
//! High-order-components
//! Component : Icon
const Icon = ({icon, color}) => {
    switch (icon) {
        case 'ArrowRight':
            return <FaArrowRight color={color} style={styleIcon} />
        case 'GitHub':
            return <FaGithub color={color} style={styleIcon} />
        case 'LinkedIn':
            return <FaLinkedinIn color={color} style={styleIcon} />
        case 'PDF':
            return <FaFilePdf color={color} style={styleIcon} />
        default:
            return ''
    }
}
//! Default Props
Icon.defaultProps = {
    Component: 'Icon'
}
//! PropTypes
Icon.propTypes = {
    Component: PropTypes.string,
    icon: PropTypes.string
}

//? EXPORT
export default Icon