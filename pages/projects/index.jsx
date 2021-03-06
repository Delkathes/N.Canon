//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import { Image, Transformation, Placeholder } from 'cloudinary-react'

//! Content
//! Constants
//! Utils
import { dirToJson } from 'utils/file-system'

//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
import { useFadeIn } from '@animations'
const Section = styled(animated.section)`
    height: auto;
    margin: 0px auto;

    padding-bottom: 100px;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        padding-top: 200px;
        width: 84%;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        padding-top: 220px;
        width: 78%;
    }
    @media (${({ theme }) => theme.mediaQueries.laptop}) {
        width: 62%;
    }
`
const Container = styled.div`
    height: auto;
    width: 100%;
    margin: auto;
`

const Grid = styled.ul`
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        display: flex;
        flex-direction: column;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        grid-template-columns: 50% 50%;
        display: grid;
        grid-gap: 10px;
    }
    @media (${({ theme }) => theme.mediaQueries.laptop}) {
    }
`
const Tile = styled.li`
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 100%;
    background-color: ${({ background }) => background};
    ${({ long }) =>
        long &&
        `
        grid-column: span 2 / auto;
        padding-top: 50%;
    `}
    &:hover {
        img {
            transform: scale(1.1);
        }
        .read {
            transform: translateY(
                ${({ top, bottom }) => (top ? '50px' : bottom ? '-50px' : '')}
            );
        }
    }
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        margin: ${({ i, l }) =>
            i === 0 ? '0px 0px 5px' : i === l ? '5px 0px 0px' : '5px 0px 5px'};
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        margin: 0;
    }
`
const Figure = styled.figure`
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
    img {
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            ${({ cover }) =>
                !cover &&
                `
                position: absolute;
                right: 4%;
                bottom: 8%;
                height: auto;
                max-width: 80%;
            `}
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            ${({ cover, top }) =>
                !cover &&
                `
                position: absolute;
                right: 4%;
                bottom: ${top ? 'initial' : '8%'};
                top: ${top ? '8%' : 'initial'};
                height: auto;
                max-width: 80%;
            `}
        }

        z-index: 0;
        transform-origin: bottom;
        transition-duration: 0.4s;
    }
`
const Read = styled.div`
    z-index: 2;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${({ top }) => top && '-50px'};
    bottom: ${({ bottom }) => bottom && '-50px'};
    right: ${({ right }) => right && '60px'};
    left: ${({ left }) => left && '60px'};
    padding: 0px 30px;
    background-color: rgb(34, 34, 34);
    color: ${({ theme: { colors } }) => colors.primary};
    transition-duration: 0.3s;
`
const Infos = styled.div`
    z-index: 1;
    position: absolute;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        padding: 20px;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        padding: 30px;
        top: ${({ top }) => top && '0px'};
        bottom: ${({ bottom }) => bottom && '0px'};
    }
    ${({ dark, theme: { colors } }) =>
        dark &&
        `
        color: ${colors.reverse};
    `}
    h2 {
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            font-weight: 300;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            font-weight: bold;
        }
    }
    h3 {
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            font-size: 1.2em;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            line-height: 1.2em;
            font-size: 2.6em;
            font-weight: bold;
        }
    }
`
//! Components
//! High-order-components
//!  Page : Projects
//? EXPORT
const Projects = ({ data, projects }) => {
    const pageSpring = useFadeIn()
    const dataLength = data.length - 1

    return (
        <>
            <NextSeo
                title={`Projects | Nicolas Canon - Web developer`}
                description={projects?.seo.description || 'description seo'}
                canonical={`https://${process.env.DOMAIN}/projects`}
            />
            <Section style={pageSpring}>
                <Container>
                    <h1 className="page-name">Projects</h1>
                    <Grid>
                        {data.map(
                            (
                                {
                                    slug,
                                    top,
                                    bottom,
                                    background,
                                    dark,
                                    title,
                                    subtitle,
                                    image,
                                    cover,
                                    long
                                },
                                i
                            ) => (
                                <Link
                                    key={i}
                                    href={`/projects/[slug]`}
                                    as={`/projects/${slug}`}
                                    passHref
                                >
                                    <Tile
                                        i={i}
                                        l={dataLength}
                                        top={top}
                                        bottom={bottom}
                                        background={background}
                                        long={long}
                                    >
                                        <Read
                                            className="read"
                                            right
                                            top={top}
                                            bottom={bottom}
                                        >
                                            Read More
                                        </Read>
                                        <Figure cover={cover} top={top} bottom={bottom}>
                                            <Infos
                                                top={!top}
                                                bottom={!bottom}
                                                dark={dark}
                                            >
                                                <h2>{title}</h2>
                                                <h3>{subtitle}</h3>
                                            </Infos>
                                            <Image
                                                alt={title}
                                                publicId={image}
                                                height="100%"
                                                width="auto"
                                                responsive
                                                loading="lazy"
                                            >
                                                <Placeholder />
                                                <Transformation
                                                    dpr="auto"
                                                    fetchFormat="auto"
                                                    quality="auto:good"
                                                />
                                                <Transformation flags="force_strip.strip_profile.immutable_cache" />
                                            </Image>
                                        </Figure>
                                    </Tile>
                                </Link>
                            )
                        )}
                    </Grid>
                </Container>
            </Section>
        </>
    )
}

export const getStaticProps = async () => {
    const data = await dirToJson('content/projects')

    return {
        props: {
            data
        }
    }
}
Projects.propTypes = {
    data: PropTypes.array.isRequired
}

export default Projects
