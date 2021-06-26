import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationLinks = [
    { clean: 'Home', href: '/' },
    { clean: 'Projects', href: '/projects' },
    { clean: 'About', href: '/about' },
    { clean: 'Contact', href: '/contact' },
    { clean: 'Experiences', href: '/experiences' }
]

const Nav = styled.nav`
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        z-index: 2;
        position: fixed;
        top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: ${({ theme: { colors } }) => colors.highlight};
        transition-duration: 500ms;
        transition-timing-function: ease-in-out;
        transform: ${({ open }) => (open ? 'translateY(0vh)' : 'translateY(-100vh)')};
        ul {
            position: fixed;
            height: 50%;
            width: 100%;
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            bottom: 50%;
        }
        .bottom {
            top: 50%;
            bottom: 0%;
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        display: none;
    }
`
const NavLink = styled.li`
    padding-right: 40px;
    ${({ bottom }) => (bottom ? `padding-top: 15px;` : `padding-bottom: 15px;`)}
    a {
        height: 30px;
        display: inline-flex;
        align-items: center;
        font-weight: 700;
        cursor: pointer;
        color: ${({ match, theme }) =>
            match ? theme.colors.reverse : theme.colors.primary};
    }
`
import Icon from './Global/Icon'

const MobileNav = ({ open, setOpen }) => {
    const { route } = useRouter()
    let shortRoute = route.slice(0, 3)

    return (
        <Nav open={open}>
            <ul className="links">
                {NavigationLinks.map(({ href, clean }, i) => (
                    <NavLink key={i} match={shortRoute === href.slice(0, 3)}>
                        <Link href={`${href}`} passHref>
                            <a onClick={() => setOpen(false)}>{clean}</a>
                        </Link>
                    </NavLink>
                ))}
            </ul>
            <ul className="links bottom">
                <NavLink bottom>
                    <a
                        href="https://github.com/Delkathes"
                        target="_blank"
                        aria-label="GitHub"
                        rel="noopener noreferrer"
                    >
                        <Icon icon="GitHub" color="rgb(251, 251, 251)" />
                    </a>
                </NavLink>
                <NavLink bottom>
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

MobileNav.defaultProps = {
    Component: 'MobileNav'
}
MobileNav.propTypes = {
    Component: PropTypes.string,
    open: PropTypes.bool,
    setOpen: PropTypes.func
}
export default memo(MobileNav)
