//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from "next/link"
import PropTypes from "prop-types"
import styled from "styled-components"

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Nav = styled.nav`
`
const NavLink = styled.nav``

//! Components
//! High-order-components
//! Component : NavBar
//? EXPORT
const NavBar = () => {
    return (
        <>
            <Nav>
                <Link href="/projects">
                    <NavLink>Projets</NavLink>
                </Link>
                <Link href="/about">
                    <NavLink>A propos</NavLink>
                </Link>
                <Link href="/contact">
                    <NavLink>Contact</NavLink>
                </Link>
                <Link href="/experiences">
                    <NavLink>Experience</NavLink>
                </Link>
            </Nav>
        </>
    )
}

//! Default Props
NavBar.defaultProps = {
    Component: 'NavBar'
}
NavBar.propTypes = {
  Component: PropTypes.string
}

export default NavBar
