//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from "next/link"
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, config} from 'react-spring'

//! Content
//! Constants
const NavigationLinks = [
    {clean: 'More about me', href: 'about'},
    {clean: 'My recent projects', href: 'projects'},
    {clean: 'Get in touch', href: 'contact'},
    {clean: 'View my experience', href: 'experiences'},
]

//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled(animated.section)`
    height: 100vh;
    width: 66%;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;
    @media(${({theme}) => theme.mediaQueries.mobileS}) {
        width: 84%;
    }
    @media(${({theme}) => theme.mediaQueries.tablet}) {
        width: 78%;
    }
    @media(${({theme}) => theme.mediaQueries.laptop}) {
        width: 66%;
    }
`
const Container = styled.div`
    position: relative;
    margin: auto 0px;
    height: auto;
`
const Presentation = styled.div`
    h2 {
        font-weight: 900;
        @media(${({theme}) => theme.mediaQueries.mobileS}) {
            font-size: 2em;
        }
        @media(${({theme}) => theme.mediaQueries.laptop}) {
            width: 100%;
            font-size: 3em;
        }
    }
    p {
        margin-top: 12px;
        margin-bottom: 58px;
    }
`
const Nav = styled.nav`
    z-index: 1;
    position: relative;
    height: 140px;
    ul {
        position: absolute;
    }
`
const NavLink = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-weight: bold;
    span {
        transition-duration: 0.3s;
    }
    div {
        transition-duration: 0.3s;
        display: flex;
        align-self: flex-end;
        margin-left: 8px;
    }
    &:hover {
        span {
            color: ${({theme: {colors}}) => colors.highlight};
            transform: translateX(-6px);
        }
        div {
            transform: translateX(6px);
        }
    }
`

const ProfilePic = styled.figure`
    overflow: hidden;
    z-index: 0;
    position: fixed;
    bottom: 0px;
    display: flex;
    @media(${({theme}) => theme.mediaQueries.mobileS}) {
        right: -8vw;
        width: 94%;
    }
    @media(${({theme}) => theme.mediaQueries.tablet}) {
        right: -6vw;
        width: auto;
    }
    img {
        @media(${({theme}) => theme.mediaQueries.mobileS}) {
            max-height: 20vw;
            min-height: 210px;
        }
        @media(${({theme}) => theme.mediaQueries.tablet}) {
            max-height: 30vw;
            min-height: 230px;
        }
    }
`
//! Components
import Icon from "../components/Global/Icon"

//! High-order-components
//!  Page : Home
//? EXPORT
const Home = () => {
    const pageSpring = useSpring({
        config: config.default,
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        from: {
            transform: 'translateY(200px)',
            opacity: 0
        },
    })
    return <Section style={pageSpring}>
        <Container>
            <Presentation>
                <h2>{"Hey, I'm Nicolas."}</h2>
                <p>{" I'm a self taught web developer based in Paris, FR."}</p>
            </Presentation>
            <Nav>
                <ul>
                    {NavigationLinks.map((link, i) => 
                        <Link key={i} href={link.href}>
                            <NavLink>
                                <span>{link.clean}</span>
                                <div>
                                    <Icon icon="ArrowRight" color="rgb(26, 160, 203)" />
                                </div>
                            </NavLink>
                        </Link>
                    )}
                </ul>
            </Nav>
        </Container>
        <ProfilePic>
            <img src="/static/img/hacker.png" srcSet="/static/img/hacker.png" alt="profile-pic" />
        </ProfilePic>
    </Section>
}

//! Default Props
Home.defaultProps = {
     Page: 'Home'
}
Home.propTypes = {
     Page: PropTypes.string
}

export default Home