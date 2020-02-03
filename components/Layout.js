//? IMPORT
//! Modules
import {useState} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useSpring, config, animated} from 'react-spring'

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
// import Slider from './Project/Slider'

//! High-order-components
//! Component : Layout
//? EXPORT
const Layout = ({children}) => {
    //* useState : open
    const [open, setOpen] = useState(false)


    
    const mainSpring = useSpring({
        to: {transform: open ? 'translateY(100vh)' : 'translateY(0vh)'},
        from: {transform: 'translateY(0vh)'}
    })
    const logoSpring = useSpring({
        config: config.default,
        to: {transform: open ? 'translateY(120vh)' : 'translateY(0vh)'},
        from: {transform: 'translateY(0vh)'}
    })

    return <>
        {children.props.Page && <Head head={children.props.Page + ' | Nicolas Canon'} />}
        <header>
            <Link href="/" as="/">
                <Logo open={open} style={logoSpring}>
                    <img src="https://res.cloudinary.com/dkgucotla/image/upload/v1580690659/Personal%20Site/logo.png" srcSet="https://res.cloudinary.com/dkgucotla/image/upload/v1580690659/Personal%20Site/logo.png" alt="Logo" />
                </Logo>
            </Link>
            <NavBar />
            <MobileNav open={open} setOpen={setOpen} />
            <MenuButton onClick={() => setOpen(!open)}>
                <Icon icon={open ? 'Cross' : 'Bars'} color="rgb(251, 251, 251)" />
            </MenuButton>
        </header>
        <Main open={open} style={mainSpring}>{children}</Main>
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
