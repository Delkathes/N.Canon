//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, config} from 'react-spring'

//! Content
//! Constants
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
    /* background-color: #340303; */
    background-color: ${({background}) => background};
    ${({long}) => long && `
        grid-column: span 2 / auto;
        padding-top: 50%;
        color: #202020;
    `}
    &:hover {
        figure {
            /* background-color: black; */
        }
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
    display: flex;
    height: 100%;
    width: 100%;
    z-index: 0;
    img {
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
    padding: 30px;
    position: absolute;
    top: ${({top}) => top && '0px'};
    bottom: ${({bottom}) => bottom && '0px'};
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
            transform: 'translateY(250px)',
            opacity: 0
        },
    })
    return <Section style={pageSpring}>
        <Container>
            <PageName>{props.Page}</PageName>
            <Grid>
                <Link href="/projects/project?slug=Neo-Town" as="/projects/neo-town">
                    <ElGrid top background="#EF5F50">
                        <Article>
                            <Read className="read" right top>Read More</Read>
                            <Figure>
                                <Infos bottom>
                                    <h3>Simone Duez</h3>
                                    <h4>Paint artist</h4>
                                </Infos>
                                <img src="/static/projects/" srcSet="" height="100%" width="100%" />
                            </Figure>
                        </Article>
                    </ElGrid>
                </Link>
                <Link href="/projects/project?slug=Neo-Town" as="/projects/neo-town">
                    <ElGrid bottom background="#043144">
                        <Article>
                            <Read className="read" right bottom>Read More</Read>
                            <Figure>
                                <Infos top>
                                    <h3>Neo Town</h3>
                                    <h4>Meetup organizer</h4>
                                </Infos>
                                <img src="/static/projects/city.png" srcSet="" height="100%" width="100%" />
                            </Figure>
                        </Article>
                    </ElGrid>
                </Link>
                <Link href="/projects/project?slug=Neo-Town" as="/projects/neo-town">
                    <ElGrid long top background="#DAEBF1">
                        <Read className="read" right top>Read More</Read>
                        <Figure>
                            <Infos bottom>
                                <h3>Libertia Et Conscia</h3>
                                <h4>Online static newspaper</h4>
                            </Infos>
                            <img src="/static/projects/" srcSet="" height="100%" width="100%" />
                        </Figure>
                    </ElGrid>
                </Link>
                <Link href="/projects/project?slug=Neo-Town" as="/projects/neo-town">
                    <ElGrid bottom background="#0062af">
                        <Article>
                            <Read className="read" left bottom>Read More</Read>
                            <Figure>
                                <Infos top>
                                    <h3>To come</h3>
                                    <h4>Building project</h4>
                                </Infos>
                                <img src="/static/projects/" srcSet="" height="100%" width="100%" />
                            </Figure>
                        </Article>
                    </ElGrid>
                </Link>
                <Link href="/projects/project?slug=Neo-Town" as="/projects/neo-town">
                    <ElGrid top background="#E1AE2A">
                        <Article>
                            <Read className="read" right top>Read More</Read>
                            <Figure>
                                <Infos bottom>
                                    <h3>Personal projects</h3>
                                    <h4>Templates</h4>
                                </Infos>
                                <img src="/static/projects/webdesign.png" srcSet="" height="100%" width="100%" />
                            </Figure>
                        </Article>
                    </ElGrid>
                </Link>
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