//? IMPORT
//! Modules
import {useState, useEffect, useRef} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useSpring, useTransition, useChain, config, animated} from 'react-spring'
//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Logo = styled.div`
    cursor: pointer;
    z-index: 10;
    a {
        z-index: 10;
        height: 70px;
        width: 70px;
        display: flex;
        align-items: flex-end;
        position: absolute;
        top: 0px;
        left: calc(8.33333vw);
        background-color: #488dbf;
        color: rgb(251, 251, 251);
        font-weight: bold;
        font-size: 2.6em;
    }
`
const Slider = styled(animated.div)`
    position: absolute;
    z-index: 20;
    height: 100vh;
    width: 120vw;
    background-color: ${({background}) => background};
`

//! Components
import NavBar from './NavBar'
import Head from './Global/Head'

//! High-order-components
//! Component : Layout
//? EXPORT
const Layout = ({children}) => {
    console.log('children.props :', children.props)
    console.log('children.props.SubPage :', children.props.SubPage)
    //* useState : routeChange
    const [routeChange, setDyn] = useState(false)
    const [animateSlider, setAnim] = useState(false)

    const SliderRef = useRef()
    const PageRef = useRef()
    const sliderS = {
        ref: SliderRef,
        config: config.molasses,
        from: {transform: 'translateX(-120vw)'},
        enter: {transform: 'translateX(120vw)'},
        leave: {transform: 'translateX(120vw)'},
    }
    // const sliderS = {
    //     ref: SliderRef,
    //     config: config.molasses,
    //     to: {transform: 'translateX(120vw)'},
    //     from: {transform: 'translateX(-120vw)'}
    // }
    const pageS = {
        ref: PageRef,
        config: config.default,
        to: {opacity: 1},
        from: {opacity: 0}
    }
    const transSlider = useTransition(animateSlider, null, sliderS)
    // const springSlider = useSpring(sliderS)
    const springPage = useSpring(pageS)

    useChain([SliderRef, PageRef], [0, animateSlider ? 0.6 : 0])




    useEffect(() => {
        const handleRouteChange = url => {
            children.props.SubPage && setDyn(true)
        }
        const handleRouteComplete = url => {
            routeChange && setDyn(false)
        }

        Router.events.on('routeChangeStart', handleRouteChange)
        Router.events.on('routeChangeComplete', handleRouteComplete)
        return () => {
            Router.events.off('routeChangeStart', handleRouteChange)
            Router.events.off('routeChangeComplete', handleRouteComplete)
        }
    }, [])
    useEffect(() => {
        routeChange && setAnim(true)
        setTimeout(() => {
            setAnim(false)
        }, 600)
        return () => {
            
        }
    }, [routeChange])

    console.log('routeChange :', routeChange)
    console.log('animateSlider :', animateSlider)

    return <>
        {children.props.Page && <Head head={children.props.Page + ' | Nicolas Canon'} />}
        {children.props.SubPage && <Head head={children.props.target.title + ' | Projects | Nicolas Canon'} />}
        {transSlider.map(({item, props, key}) => item &&
            <Slider key={key} style={props} background={children.props.target.background} />
        )}
        {/* <Slider style={springSlider} background={children.props.target && children.props.target.background} /> */}
        <Logo>
            <Link href="/" as="/">
                <a>NC</a>
            </Link>
        </Logo>
        <NavBar />
        <animated.main style={children.props.SubPage && springPage}>{children}</animated.main>
    </>
}

//! Default Props
Layout.defaultProps = {
    Component: 'Layout'
}
Layout.propTypes = {
  Component: PropTypes.string,
  children: PropTypes.object
}

export default Layout
