import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationLinks = [
    { clean: 'Projects', href: '/projects' },
    { clean: 'About', href: '/about' },
    { clean: 'Contact', href: '/contact', prefetch: false },
    { clean: 'Experiences', href: '/experiences' }
]

function getOffset(el) {
    var _x = 0
    var _y = 0
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft
        _y += el.offsetTop - el.scrollTop
        el = el.offsetParent
    }
    return { top: _y, left: _x }
}

import useOnWindowResize from 'hooks/useOnWindowResize'

const Nav = styled.nav`
    position: fixed;
    top: 0px;
    right: calc(7.4vw);
    height: 70px;
    align-items: center;
    font-weight: bold;
    z-index: 10;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        display: none;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        display: flex;
    }
    ul {
        display: flex;
        height: 100%;
    }
`
const NavLink = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    transition-duration: 0.3s;
    margin-right: 25px;
    margin-left: 25px;
    a {
        cursor: pointer;
        color: ${({ match, theme }) =>
            match ? theme.colors.highlight : theme.colors.primary};
    }
`

const UnderBar = styled.span`
    position: fixed;
    top: 60px;
    left: ${({ position }) => position}px;
    background-color: ${({ theme: { colors } }) => colors.highlight};
    height: 2px;
    width: ${({ width }) => width}px;
    transform: translateX(0px);
    transition: all 0.666s cubic-bezier(0.06, 0.975, 0.195, 0.985) 0s;
`

import Icon from './Global/Icon'

const NavBar = () => {
    const { route } = useRouter()
    const [screenWidth] = useOnWindowResize()

    const [hoveredWidth, setWidth] = useState(0)
    const [hoveredPosition, setPosition] = useState(screenWidth)

    function handleHover(e) {
        const target = e.target,
            elWidth = target.offsetWidth,
            position = getOffset(target).left
        setWidth(elWidth)
        setPosition(position)
    }

    useEffect(() => {
        setPosition(screenWidth + 30)
    }, [screenWidth])

    let shortRoute = route.slice(0, 3)

    return (
        <Nav onMouseLeave={() => setPosition(document.body.clientWidth + 30)}>
            <ul>
                {NavigationLinks.map((link, i) => (
                    <NavLink
                        key={i}
                        onMouseOver={e => handleHover(e)}
                        match={shortRoute === link.href.slice(0, 3)}
                    >
                        <Link href={`${link.href}`} prefetch={link.prefetch} passHref>
                            <a>{link.clean}</a>
                        </Link>
                    </NavLink>
                ))}
                <NavLink>
                    <a
                        onMouseOver={e => handleHover(e)}
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
                        onMouseOver={e => handleHover(e)}
                        href="https://www.linkedin.com/in/nicolas-canon-613296163/"
                        target="_blank"
                        aria-label="LinkedIn"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="LinkedIn" color="rgb(251, 251, 251)" />
                    </a>
                </NavLink>
            </ul>
            <UnderBar
                width={hoveredWidth}
                position={hoveredPosition}
                hid={hoveredPosition === 1920}
            />
        </Nav>
    )
}

NavBar.defaultProps = {
    Component: 'NavBar'
}
NavBar.propTypes = {
    Component: PropTypes.string
}

export default NavBar
