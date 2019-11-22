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
  
`
const Logo = styled.div`
`
const SocialMedias = styled.div`
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
                <SocialMedias>
                    <div>GitHub</div>
                    <div>LinkedIn</div>
                </SocialMedias>
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
