//? IMPORT
//! Modules
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import PropTypes from "prop-types"
import styled from "styled-components"


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
function getOffset (el) {
    var _x = 0
    var _y = 0
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft
        _y += el.offsetTop - el.scrollTop
        el = el.offsetParent
    }
    return {top: _y, left: _x}
}

//! Context
//! Hooks
//! Actions
//! Styles
const Nav = styled.nav`
    height: 72px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
    right: calc(8vw);
    font-weight: bold;
    z-index: 10;
    ul {
        display: flex;

    }
`
const NavLink = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    transition-duration: 0.3s;
`
const CsLink = styled.a`
    cursor: pointer;
    margin-right: 25px;
    margin-left: 25px;
    color: ${({match}) => match ? 'rgb(26, 160, 203)' : 'rgb(251, 251, 251)'};
`
const UnderBar = styled.span`
    position: fixed;
    top: 60px;
    left: ${({position}) => position}px;
    background-color: rgb(26, 160, 203);
    height: 2px;
    /* opacity: ${({hid}) => hid ? 0 : 1}; */
    width: ${({width}) => width}px;
    transform: translateX(0px);
    transition: all 0.666s cubic-bezier(0.06, 0.975, 0.195, 0.985) 0s;
`

//! Components
import Icon from './Global/Icon'

//! High-order-components
//! Component : NavBar
//? EXPORT
const NavBar = () => {
    const router = useRouter()
    const [hoveredWidth, setWidth] = useState(0)
    const [hoveredPosition, setPosition] = useState(2000)



    function handleHover (e) {
        const target = e.target,
            elWidth = target.offsetWidth,
            position = getOffset(target).left
        setWidth(elWidth)
        setPosition(position)
    }
    return <Nav onMouseLeave={() => setPosition(2000)}>
        <ul>
            {NavigationLinks.map((link, i) => 
                <NavLink key={i}>
                    <Link href={`${link.href}`} passHref>
                        <CsLink onMouseOver={(e) => handleHover(e)} match={router.route === link.href}>
                            {link.clean}
                        </CsLink>
                    </Link>
                </NavLink>
            )}
            <NavLink>
                <CsLink
                    onMouseOver={(e) => handleHover(e)}
                    href="https://github.com/Delkathes"
                    target="_blank"
                    aria-label="GitHub"
                    rel="noreferrer"
                >
                    <Icon icon="GitHub" color="rgb(251, 251, 251)" />
                </CsLink>
            </NavLink>
            <NavLink>
                <CsLink
                    onMouseOver={(e) => handleHover(e)}
                    href="https://www.linkedin.com/in/nicolas-canon-613296163/"
                    target="_blank"
                    aria-label="LinkedIn"
                    rel="noreferrer"
                >
                    <Icon icon="LinkedIn" color="rgb(251, 251, 251)" />
                </CsLink>
            </NavLink>
        </ul>
        <UnderBar width={hoveredWidth} position={hoveredPosition} hid={hoveredPosition === 2000} />
    </Nav>
}

//! Default Props
NavBar.defaultProps = {
    Component: 'NavBar'
}
NavBar.propTypes = {
  Component: PropTypes.string
}

export default NavBar
