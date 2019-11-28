//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, config} from 'react-spring'

//! Content
//! Constants
import ProjectsData from '../../content/projects.json'

//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled(animated.section)`
    height: auto;
    width: 62%;
    margin: 0px auto;
    padding-top: 220px;
    padding-bottom: 100px;
`
const Container = styled.div`
    height: auto;
    width: 100%;
    margin: auto;
`
const PageName = styled.div`
    font-weight: bold;
    font-size: 3em;
`
const Grid = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
`
const ElGrid = styled.li`
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-top: 100%;
    background-color: ${({background}) => background};
    ${({long}) => long && `
        grid-column: span 2 / auto;
        padding-top: 50%;
    `}
    &:hover {
        img {
            transform: scale(1.1);
        }
        .read {
            transform: translateY(${({top, bottom}) => top ? '50px' : bottom ? '-50px' : ''});
        }
    }
`
const Article = styled.article`
`
const Figure = styled.figure`
    position: absolute;
    top: 0px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    /* display: flex; */
    height: 100%;
    width: 100%;
    z-index: 0;
    img {
        ${({cover}) => !cover && `
            position: absolute;
            right: 4%;
            bottom: 8%;
            height: 50%;
            width: auto;
        `}
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
    top: ${({top}) => top && '-50px'};
    bottom: ${({bottom}) => bottom && '-50px'};
    right: ${({right}) => right && '60px'};
    left: ${({left}) => left && '60px'};
    padding: 0px 30px;
    background-color: rgb(34, 34, 34);
    color: rgb(251, 251, 251);
    transition-duration: 0.3s;
`
const Infos = styled.div`
    z-index: 1;
    padding: 30px;
    position: absolute;
    top: ${({top}) => top && '0px'};
    bottom: ${({bottom}) => bottom && '0px'};
    ${({dark}) => dark && `
        color: #202020;
    `}
    h3 {

    }
    h4 {
        line-height: 1.2em;
        font-size: 2.6em;
        font-weight: bold;
    }
`
//! Components
//! High-order-components
//!  Page : Projects
//? EXPORT
const Projects = props => {

    const pageSpring = useSpring({
        config: config.default,
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        from: {
            transform: 'translateY(200px)',
            opacity: 0
        },
    })

    return <Section style={pageSpring}>
        <Container>
            <PageName>{props.Page}</PageName>
            <Grid>
                {ProjectsData.map(({slug, top, bottom, background, dark, title, subtitle, image, cover, long}, i) => 
                    <Link key={i} href={`/projects/[project]`} as={`/projects/${slug}`}>
                        <ElGrid top={top} bottom={bottom} background={background} long={long}>
                            <Article>
                                <Read className="read" right top={top} bottom={bottom}>Read More</Read>
                                <Figure cover={cover}>
                                    <Infos top={!top} bottom={!bottom} dark={dark}>
                                        <h3>{title}</h3>
                                        <h4>{subtitle}</h4>
                                    </Infos>
                                    <img
                                        alt={image}
                                        src={image} srcSet={image}
                                        height="100%" width="auto"
                                    />
                                </Figure>
                            </Article>
                        </ElGrid>
                    </Link>
                )}
            </Grid>
        </Container>
    </Section>
}

//! Default Props
Projects.defaultProps = {
     Page: 'Projects'
}
Projects.propTypes = {
    Page: PropTypes.string
}

export default Projects