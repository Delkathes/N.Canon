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
    z-index: 1;
`
const Logo = styled.div`
    position: relative;
    left: calc(8.33333vw);
    height: 60px;
    width: 60px;
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
                <Link href="/" as="/">
                    <Logo>NC</Logo>
                </Link>
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
