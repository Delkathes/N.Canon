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

//! Components
import NavBar from './NavBar'
import Head from './Global/Head'

//! High-order-components
//! Component : Layout
//? EXPORT
const Layout = ({children}) => {
    return <>
        {children.props.Page && <Head head={children.props.Page + ' | Nicolas Canon'} />}
        {children.props.SubPage && <Head head={children.props.target.title + ' | Projects | Nicolas Canon'} />}
        <Logo>
            <Link href="/" as="/">
                <a>NC</a>
            </Link>
        </Logo>
        <NavBar />
        {children.props.Page && <main>{children}</main>}
        {children.props.SubPage && children}
        
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
