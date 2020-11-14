//? IMPORT
//! Modules
import { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
import LogoPng from 'public/Logo.png'
const Logo = styled.figure`
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: fixed;
    z-index: 10;
    display: flex;
    top: 0px;
    left: calc(8.33333vw);
    background-color: #488dbf;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(120vh)' : 'translateY(0vh)')};
    img {
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            height: 50px;
            width: 50px;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            height: 100%;
            width: 100%;
        }
    }
`
const Main = styled.main`
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(100vh)' : 'translateY(0vh)')};
`
const MenuButton = styled.div`
    z-index: 3;
    position: fixed;
    top: 20px;
    right: 30px;
    height: 36px;
    width: 36px;
    align-items: center;
    justify-content: center;
    svg {
        cursor: pointer;
        height: 65%;
        width: 65%;
    }
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        display: flex;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        display: none;
    }
`

//! Components
import NavBar from './NavBar'
import MobileNav from './MobileNav'
import { FaBars, FaTimes } from 'react-icons/fa'

//! High-order-components
//! Component : Layout
//? EXPORT
const Layout = ({ children }) => {
    //* useState : open
    const [open, setOpen] = useState(false)

    return (
        <>
            <header>
                <Link href="/" passHref>
                    <Logo open={open}>
                        <img alt="Logo of Nicolas Canon" src={LogoPng} loading="eager" />
                    </Logo>
                </Link>
                <NavBar />
                <MobileNav open={open} setOpen={setOpen} />
                <MenuButton onClick={() => setOpen(!open)}>
                    {open ? (
                        <FaTimes
                            color="rgb(251, 251, 251)"
                            style={{
                                position: 'relative',
                                zIndex: '-1'
                            }}
                        />
                    ) : (
                        <FaBars
                            color="rgb(251, 251, 251)"
                            style={{
                                position: 'relative',
                                zIndex: '-1'
                            }}
                        />
                    )}
                </MenuButton>
            </header>
            <Main open={open}>{children}</Main>
        </>
    )
}

//! Prop-types
Layout.propTypes = {
    children: PropTypes.object
}

export default Layout
