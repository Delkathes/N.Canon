//? IMPORT
//! Modules
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//! Content
//! Constants
const NavigationLinks = [
    {clean: 'Projects', href: '/projects'},
    {clean: 'About', href: '/about'},
    {clean: 'Contact', href: '/contact'},
    {clean: 'Experiences', href: '/experiences'},
]

//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Nav = styled.nav`
    @media(${({theme}) => theme.mediaQueries.mobileS}) {
        z-index: 2;
        position: absolute;
        top: 0px;
        display: block;
        ul {
            display: ${({open}) => !open && 'none'};
        }
    }
    @media(${({theme}) => theme.mediaQueries.tablet}) {
        display: none;
    }
`
const NavLink = styled.li`
    
`
const MenuButton = styled.div`
    position: fixed;
    top: 20px;
    right: 30px;
    height: 36px;
    width: 36px;
    align-items: center;
    justify-content: center;
    svg {
        height: 65%;
        width: 65%;
    }
`
//! Components
import Icon from './Global/Icon'

//! High-order-components
//! Component : MobileNav
//? EXPORT
const MobileNav = ({open, setOpen}) => {
    const {route} = useRouter()
    //* useState : open
    let shortRoute = route.slice(0, 3)
    return(
        <Nav open={open}>
            <MenuButton onClick={()=>setOpen(!open)}>
                <Icon icon={open ? 'Cross' : 'Bars'} color="rgb(251, 251, 251)" />
            </MenuButton>
            <ul>
                {NavigationLinks.map((link, i) =>
                    <NavLink key={i}  match={shortRoute === link.href.slice(0, 3)}>
                        <Link href={`${link.href}`} passHref>
                            <a onClick={() => setOpen(false)}>
                                {link.clean}
                            </a>
                        </Link>
                    </NavLink>
                )}
                <NavLink>
                    <a
                        href="https://github.com/Delkathes"
                        target="_blank"
                        aria-label="GitHub"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="GitHub" color="rgb(251, 251, 251)" />
                    </a>
                </NavLink>
                <NavLink>
                    <a
                        href="https://www.linkedin.com/in/nicolas-canon-613296163/"
                        target="_blank"
                        aria-label="LinkedIn"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="LinkedIn" color="rgb(251, 251, 251)" />
                    </a>
                </NavLink>
            </ul>
        </Nav>
    )
}

//! Default Props
MobileNav.defaultProps = {
    Component: 'MobileNav'
}
MobileNav.propTypes = {
    Component: PropTypes.string,
    open: PropTypes.bool,
    setOpen: PropTypes.func
}
export default MobileNav
