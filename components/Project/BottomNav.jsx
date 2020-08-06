//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//! Content
import projects from 'content/projects.json'
import { Image, Transformation } from 'cloudinary-react'
const projectsLength = projects.length - 1

//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Nav = styled.nav`
    ul {
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            width: 100%;
            display: grid;
            grid-template-columns: ${({ l }) => 100 / l}% ${({ l }) => 100 / l}% ${({
                    l
                }) => 100 / l}% ${({ l }) => 100 / l}% ${({ l }) => 100 / l}%;
            box-shadow: 0px -12px 20px 0px #0006;
        }
    }
`
const Tile = styled.li`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
    z-index: 1;
    background-color: ${({ background }) => background};
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        padding-top: 25%;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        padding-top: 60%;
        transition-duration: 0.2s;
        &:hover {
            transform: translateY(-30px);
        }
    }
`
const Filter = styled.div`
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${({ background }) => `${background}60`};
    z-index: 0;
`
const Figure = styled.figure`
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    display: flex;
    height: 100%;
    width: 100%;
    img {
        z-index: -1;
        transform-origin: bottom;
        transition-duration: 0.4s;
        filter: blur(1.5px);
        ${({ cover }) =>
            cover
                ? `
            height: auto;
            width: 100%;
        `
                : `
            height: 100%;
            width: auto;
        `}
    }
`
const Infos = styled.div`
    position: absolute;
    z-index: 1;
    ${({ dark, theme: { colors } }) =>
        dark &&
        `
        color: ${colors.reverse};
    `}
    h3 {
        font-weight: 400;
        font-size: 1em;
    }
    h4 {
        font-weight: bold;
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            font-size: 1.1em;
            line-height: 1.3em;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            font-size: 2em;
            line-height: 1.2em;
        }
        @media (${({ theme }) => theme.mediaQueries.laptop}) {
            font-size: 2.4em;
            line-height: 1.2em;
        }
    }
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        padding: 20px 15px;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        padding: 30px;
    }
`

//! Components
//! High-order-components
//! Component : BottomNav
//? EXPORT
const BottomNav = ({ querySlug }) => {
    return (
        <Nav l={projectsLength}>
            <ul>
                {projects.map(
                    (project, i) =>
                        project.slug !== querySlug && (
                            <Link
                                key={i}
                                href={`/projects/[slug]?anim=true`}
                                as={`/projects/${project.slug}`}
                                passHref
                            >
                                <Tile l={projectsLength} background={project.background}>
                                    <Filter background={project.background} />
                                    <Figure cover={project.cover}>
                                        <Infos
                                            top={!project.top}
                                            bottom={!project.bottom}
                                            dark={project.dark}
                                        >
                                            <h3>{project.title}</h3>
                                            <h4>{project.subtitle}</h4>
                                        </Infos>
                                        <Image
                                            alt={project.title}
                                            publicId={project.image.publicId}
                                            dpr="auto"
                                            height="100%"
                                            width="auto"
                                            responsive
                                        >
                                            <Transformation
                                                fetchFormat="auto"
                                                quality="auto:eco"
                                            />
                                            <Transformation flags="force_strip" />
                                            <Transformation flags="any_format" />
                                        </Image>
                                    </Figure>
                                </Tile>
                            </Link>
                        )
                )}
            </ul>
        </Nav>
    )
}

//! Default Props
BottomNav.defaultProps = {
    Component: 'BottomNav'
}
BottomNav.propTypes = {
    Component: PropTypes.string,
    querySlug: PropTypes.string
}
export default BottomNav
