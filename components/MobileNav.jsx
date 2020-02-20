//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useTransition, config, animated} from 'react-spring'

//! Content
//! Constants
const NavigationLinks = [
    { prefetch: true, clean: 'Home', href: '/'},
    { prefetch: true, clean: 'Projects', href: '/projects' },
    { prefetch: true, clean: 'About', href: '/about' },
    { prefetch: false, clean: 'Contact', href: '/contact' },
    { prefetch: true, clean: 'Experiences', href: '/experiences' },
]

//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Nav = styled(animated.nav)`
    @media(${({theme}) => theme.mediaQueries.mobileS}) {
        z-index: 2;
        position: fixed;
        top: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: ${({theme: {colors}}) => colors.highlight};
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
    @media(${({theme}) => theme.mediaQueries.tablet}) {
        display: none;
    }
`
const NavLink = styled.li`
    padding-right: 40px;
    ${({bottom}) => bottom ? `padding-top: 15px;` : `padding-bottom: 15px;`}
    a {
        height: 30px;
        display: inline-flex;
        align-items: center;
        font-weight: 700;
        cursor: pointer;
        color: ${({match, theme}) => match ? theme.colors.reverse : theme.colors.primary};
    }
`
//! Components
import Icon from './Global/Icon'

//! High-order-components
//! Component : MobileNav
//? EXPORT
const MobileNav = ({open, setOpen}) => {
    const {route} = useRouter()
    let shortRoute = route.slice(0, 3)

    const menuTrans = useTransition(open, null, {
        config: config.slow,
        from: {
            transform: 'translateY(-100vh)'
        },
        enter: {
            transform: 'translateY(0vh)'
        },
        leave: {
            transform: 'translateY(-100vh)'
        },
    })

    return menuTrans.map(({item, props, key}) => item && 
        <Nav open={open} key={key} style={props}>
            <ul className="links">
            { NavigationLinks.map(({ href, clean, prefetch}, i) =>
                    <NavLink key={i}  match={shortRoute === href.slice(0, 3)}>
                        <Link href={ `${href}` } prefetch={ prefetch } passHref>
                            <a onClick={() => setOpen(false)}>
                                {clean}
                            </a>
                        </Link>
                    </NavLink>
                )}
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