//? IMPORT
//! Modules
import {useState, useEffect, useRef} from 'react'
import Router, {useRouter} from 'next/router'
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
    position: fixed;
    top: 0;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    background-color: ${({background}) => background};
`

//! Components
import NavBar from './NavBar'
import Head from './Global/Head'

//! High-order-components
//! Component : Layout
//? EXPORT
const Layout = ({children}) => {
    const router = useRouter()
    //* useState : mount
    const [mounted, setMount] = useState(false)
    //* useState : goodTiming
    const [goodTiming, setGood] = useState(false)


    const sliderTrans = useTransition(goodTiming, null, {
        config: {...config.stiff, duration: 1000},
        from: {
            transform: 'translateX(-120vw)'
        },
        enter: {
            transform: 'translateX(120vw)'
        },
        leave: {
            transform: 'translateX(120vw)'
        },
    })

    // useEffect
    useEffect(() => {
        !mounted && setMount(true)
        if (router.route === '/projects/[project]') {
            mounted && setGood(true)
            setTimeout(() => {
                setGood(false)
            }, 1200)
        }
    }, [router.asPath])

    // return
    return <>
        {children.props.Page && <Head head={children.props.Page + ' | Nicolas Canon'} />}
        {children.props.SubPage && <Head head={children.props.target.title + ' | Projects | Nicolas Canon'} />}
        
        {sliderTrans.map(({item, key, props}) => item && <Slider key={key} style={props} background={children.props.SubPage && children.props.target.background} />)}

        <Logo>
            <Link href="/" as="/">
                <a>NC</a>
            </Link>
        </Logo>
        <NavBar />
        
        <animated.main>{children}</animated.main>
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
