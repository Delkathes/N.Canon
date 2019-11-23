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
const Section = styled.section`
    height: 100vh;
    width: 70%;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
`
const Container = styled.div`
    position: relative;
    margin: auto 0px;
    height: auto;
`
const Presentation = styled.div`
`
const Me = styled.div`
    font-size: 3em;
    font-weight: 900;
`
const Ido = styled.div`
    margin-bottom: 60px;
`
const Nav = styled.nav`
    
`
const NavLink = styled.li`
    margin-bottom: 14px;
    font-weight: bold;
`
const ProfilePic = styled.div`
    position: absolute;
    bottom: 0px;
    right: 0px;
`
//! Components
//! High-order-components
//!  Page : Home
//? EXPORT
const Home = () => {
    return (
        <>
            <Section>
                <Container>
                    <Presentation>
                        <Me>Hey, my name is Nicolas.</Me>
                        <Ido>{" I'm a self taught web developer based in Paris, FR."}</Ido>
                    </Presentation>
                    <Nav>
                        <ul>
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
                        </ul>
                    </Nav>
                </Container>
                <ProfilePic>Profile pic</ProfilePic>
            </Section>
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