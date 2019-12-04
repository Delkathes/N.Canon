//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import {useSpring, animated, config} from 'react-spring'
import {animated} from 'react-spring'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const SliderSC = styled(animated.div)`
    position: fixed;
    top: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    background-color: ${({background}) => background};
    transform: translateX(-102vw);
`

//! Components
//! High-order-components
//! Component : Slider
//? EXPORT
const Slider = ({background, style}) => {
    // const spring = useSpring({
    //     config: {...config.default, duration: 1000},
    //     transform: 'translateX(140vw)',
    //     from: {transform: 'translateX(-140vw)'},
    //     reset: true
    // })
    return <SliderSC background={background} style={style} />
}

//! PropTypes
Slider.propTypes = {
    Component: PropTypes.string,
    background: PropTypes.string,
    style: PropTypes.object,

}
//! Default Props
Slider.defaultProps = {
    Component: 'Slider'
}

export default Slider