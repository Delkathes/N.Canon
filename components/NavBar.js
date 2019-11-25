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
    {clean: 'Projets', href: '/projects'},
    {clean: 'A Propos', href: '/about'},
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
    height: 60px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
    right: calc(8.33333vw);
    font-weight: bold;
    ul {
        display: flex;

    }
`
const NavLink = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    color: ${({match}) => match && 'rgb(26, 160, 203)'};
`
const CsLink = styled.a`
    cursor: pointer;
    margin-right: 20px;
    margin-left: 20px;
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
                <NavLink key={i} match={router.route === link.href}>
                    <Link href={`${link.href}`}>
                        <CsLink onMouseOver={(e) => handleHover(e)}>
                            {link.clean}
                        </CsLink>
                    </Link>
                </NavLink>
            )}
            <NavLink>
                <CsLink onMouseOver={(e) => handleHover(e)}>
                    <Icon icon="GitHub" />
                </CsLink>
            </NavLink>
            <NavLink>
                <CsLink onMouseOver={(e) => handleHover(e)}>
                    <Icon icon="LinkedIn" />
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
