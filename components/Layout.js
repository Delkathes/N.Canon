//? IMPORT
//! Modules
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useTransition, config, animated} from 'react-spring'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Logo = styled.picture`
    cursor: pointer;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: flex-end;
    top: 0px;
    left: calc(8.33333vw);
    background-color: #488dbf;
    color: rgb(251, 251, 251);
    font-weight: bold;
    font-size: 2.6em;
`
const Slider = styled(animated.div)`
    position: fixed;
    top: 0;
    z-index: 2;
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
        config: {...config.stiff, duration: 800},
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

        <header>
            <Link href="/" as="/">
                <Logo>
                    <img src="/static/Logo.webp" srcSet="/static/Logo.webp" alt="Logo" />
                </Logo>
            </Link>
            <NavBar />
        </header>
        <main>{children}</main>
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
