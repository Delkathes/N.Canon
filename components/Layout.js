//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
`
const LogoLink = styled.a`
    position: absolute;
    left: calc(8.33333vw);
    height: 80px;
    width: 80px;
    background-color: #68adef;
    top: 0px;
    display: flex;
    align-items: flex-end;
    font-size: bold;
`
const Footer = styled.footer`   
`
//! Components
import NavBar from './NavBar'

//! High-order-components
//! Component : Layout
//? EXPORT
const Layout = ({children}) => {
    return (
        <>
            <Header>
                <Logo>
                    <Link href="/" as="/">
                        <LogoLink>NC</LogoLink>
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
