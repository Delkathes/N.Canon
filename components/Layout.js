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
const Logo = styled.figure`
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 10;
    display: flex;
    top: 0px;
    left: calc(8.33333vw);
    background-color: #488dbf;
    img {
        @media(${({theme}) => theme.mediaQueries.mobileS}) {
            height: 50px;
            width: 50px;
        }
        @media(${({theme}) => theme.mediaQueries.tablet}) {
            height: 100%;
            width: 100%;
        }
    }
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
import MobileNav from './MobileNav'
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
    //* useState : open
    const [open, setOpen] = useState(false)

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
            <MobileNav open={open} setOpen={setOpen} />
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
