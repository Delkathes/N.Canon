//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from "next/link"
import PropTypes from "prop-types"
import styled from "styled-components"

//! Content
//! Constants
const NavigationLinks = [
    {clean: 'Projets', href: 'projects'},
    {clean: 'A Propos', href: 'about'},
    {clean: 'Contact', href: 'contact'},
    {clean: 'Experiences', href: 'experiences'},
]
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Nav = styled.nav`
    position: absolute;
    bottom: 0px;
    right: calc(8.33333vw);
    font-weight: bold;
`
const ListLink = styled.ul`
    display: flex;
`
const NavLink = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 40px;
`
const CsLink = styled.a`
    
`

//! Components
//! High-order-components
//! Component : NavBar
//? EXPORT
const NavBar = () => {
    return (
        <>
            <Nav>
                <ListLink>
                    {NavigationLinks.map((link, i) => 
                        <NavLink key={i} >
                            <Link href={`/${link.href}`}>
                                <CsLink>
                                    {link.clean}
                            </CsLink>
                            </Link>
                        </NavLink>
                    )}
                    <NavLink>
                        <CsLink>
                            GitHub
                        </CsLink>
                    </NavLink>
                    <NavLink>
                        <CsLink>
                            LinkedIn
                        </CsLink>
                    </NavLink>
                </ListLink>
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
