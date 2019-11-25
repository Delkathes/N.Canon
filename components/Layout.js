//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import {animated, useSpring, config} from 'react-spring'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Header = styled.header`
    height: auto;
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 10;
`
const Logo = styled.div`
    cursor: pointer;
    a {
        height: 80px;
        width: 80px;
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
const Footer = styled.footer`   
`
//! Components
import NavBar from './NavBar'

//! High-order-components
//! Component : Layout
//? EXPORT
const Layout = ({children}) => {
    // const pageSpring = useSpring({
    //     config: config.default,
    //     to: {
    //         transform: 'translateY(0px)',
    //         opacity: 1
    //     },
    //     from: {
    //         transform: 'translateY(250px)',
    //         opacity: 0
    //     },
    // })
    return (
        <>
            <Header>
                <Logo>
                    <Link href="/" as="/">
                        <a>NC</a>
                    </Link>
                </Logo>
                <NavBar />
            </Header>
            <main>{children}</main>
            <Footer>

            </Footer>
      </>
    )
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
