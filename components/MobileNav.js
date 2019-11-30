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
    {clean: 'Home', href: '/'},
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
        /* transition-duration: 0.8s;
        transform: translateY(${({open}) => open ? '0vh' : '-100vh'}); */
        ul {
            position: relative;
            padding-right: 40px;
            height: 50%;
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        .bottom {
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
    @media(${({theme}) => theme.mediaQueries.tablet}) {
        display: none;
    }
`
const NavLink = styled.li`
    ${({bottom}) => bottom ? `padding-top: 20px;` : `padding-bottom: 20px;`}
    a {
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
        config: config.default,
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
                {NavigationLinks.map((link, i) =>
                    <NavLink key={i}  match={shortRoute === link.href.slice(0, 3)}>
                        <Link href={`${link.href}`} passHref>
                            <a onClick={() => setOpen(false)}>
                                {link.clean}
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


// const lol = <Nav open={open} key={key} style={props}>
//     <ul>
//         {NavigationLinks.map((link, i) =>
//             <NavLink key={i} match={shortRoute === link.href.slice(0, 3)}>
//                 <Link href={`${link.href}`} passHref>
//                     <a onClick={() => setOpen(false)}>
//                         {link.clean}
//                     </a>
//                 </Link>
//             </NavLink>
//         )}
//     </ul>
//     <ul>
//         <NavLink>
//             <a
//                 href="https://github.com/Delkathes"
//                 target="_blank"
//                 aria-label="GitHub"
//                 rel="noopener noreferrer"
//             >
//                 <Icon icon="GitHub" color="rgb(251, 251, 251)" />
//             </a>
//         </NavLink>
//         <NavLink>
//             <a
//                 href="https://www.linkedin.com/in/nicolas-canon-613296163/"
//                 target="_blank"
//                 aria-label="LinkedIn"
//                 rel="noopener noreferrer"
//             >
//                 <Icon icon="LinkedIn" color="rgb(251, 251, 251)" />
//             </a>
//         </NavLink>
//     </ul>
// </Nav>