//? IMPORT
//! Modules
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useSpring, useTransition, config, animated} from 'react-spring'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Logo = styled(animated.figure)`
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 10;
    display: flex;
    top: 0px;
    left: calc(8.33333vw);
    background-color: #488dbf;
    /* transition-duration: 0.8s;
    transform: translateY(${({open}) => open ? '120vh' : '0vh'}); */
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
const Main = styled(animated.main)`
    /* transition-duration: 0.8s;
    transform: translateY(${({open}) => open ? '100vh' : '0vh'}); */
`
const Slider = styled(animated.div)`
    position: fixed;
    top: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    background-color: ${({background}) => background};
`
const MenuButton = styled.div`
    z-index: 3;
    position: fixed;
    top: 20px;
    right: 30px;
    height: 36px;
    width: 36px;
    align-items: center;
    justify-content: center;
    svg {
        height: 65%;
        width: 65%;
    }
    @media(${({theme}) => theme.mediaQueries.mobileS}) {
        display: flex;
    }
    @media(${({theme}) => theme.mediaQueries.tablet}) {
        display: none;
    }
`

//! Components
import NavBar from './NavBar'
import MobileNav from './MobileNav'
import Head from './Global/Head'
import Icon from './Global/Icon'

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
    
    const springMain = useSpring({
        to: {transform: open ? 'translateY(100vh)' : 'translateY(0vh)'},
        from: {transform: 'translateY(0vh)'}
    })
    const springLogo = useSpring({
        config: config.default,
        to: {transform: open ? 'translateY(120vh)' : 'translateY(0vh)'},
        from: {transform: 'translateY(0vh)'}
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

    return <>
        {children.props.Page && <Head head={children.props.Page + ' | Nicolas Canon'} />}
        {children.props.SubPage && <Head head={children.props.target.title + ' | Projects | Nicolas Canon'} />}
        
        {sliderTrans.map(({item, key, props}) => item && <Slider key={key} style={props} background={children.props.SubPage && children.props.target.background} />)}

        <header>
            <Link href="/" as="/">
                <Logo open={open} style={springLogo}>
                    <img src="/static/Logo.webp" srcSet="/static/Logo.webp" alt="Logo" />
                </Logo>
            </Link>
            <NavBar />
            <MobileNav open={open} setOpen={setOpen} />
            <MenuButton onClick={() => setOpen(!open)}>
                <Icon icon={open ? 'Cross' : 'Bars'} color="rgb(251, 251, 251)" />
            </MenuButton>
        </header>
        <Main open={open} style={springMain}>{children}</Main>
        {/* <style global jsx>{`
            #__next {
                transition-duration: 0.8s;
                transform: translateY(${open ? '100vh' : '0vh'});
            }
            `}</style> */}
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
