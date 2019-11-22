//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from "next/link"
import styled from 'styled-components'
import PropTypes from 'prop-types'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Presentation = styled.div`   
`
const Nav = styled.nav`
    
`
const NavLink = styled.a`
`

//! Components
//! High-order-components
//!  Page : Home
//? EXPORT
const Home = () => {
    return (
        <>
            <Presentation>
                {"Hey, my name is Nicolas. I'm a self taught web developer based in Paris, FR."}
            </Presentation>
            <Nav>
                <Link href="/about">
                    <NavLink>More about me</NavLink>
                </Link>
                <Link href="/projects">
                    <NavLink>My recent projects</NavLink>
                </Link>
                <Link href="/contact">
                    <NavLink>Get in touch</NavLink>
                </Link>
                <Link href="/experiences">
                    <NavLink>View my experience</NavLink>
                </Link>
            </Nav>
        </>
    )
}

//! Default Props
Home.defaultProps = {
     Page: 'Home'
}
Home.propTypes = {
     Page: PropTypes.string
}

export default Home