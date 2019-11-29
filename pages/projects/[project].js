//? IMPORT
//! Modules
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useSpring, useTransition, useChain, config, animated} from 'react-spring'

//! Content
import ProjectsData from '../../content/projects.json'
const ProjectsLength = ProjectsData.length - 1

//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Hero = styled.section`
    position: relative;
    height: 380px;
    width: 100%;
    background-color: ${({background}) => background};
    img {
        filter: blur(2px);
        position: absolute;
        bottom: 0;
        right: 4vw;
        max-width: 700px;
    }
`
const Title = styled.div`
    ${({dark, theme: {colors}}) => dark && `
        color: ${colors.reverse};
    `}
    position: absolute;
    bottom: 0;
    left: 16vw;
    z-index: 1;
    h2 {
        font-size: 1em;
        font-weight: 400;
        padding-bottom: 14px;
    }
    h3 {
        font-size: 4em;
        line-height: 0.76;
        text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 1em;
    }
`
const Description = styled.p`
    margin: 120px auto;
    width: 50%;
    font-size: 2em;
    color: ${({theme: {colors}}) => colors.secondary};
    line-height: 1.5em;
    font-weight: 300;
`
const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Li = styled.li`
    ${({position}) => position === 'left' ? `align-self: flex-start;` : position === 'right' ? `align-self: flex-end;` : `align-self: center;`}
    position: relative;
    margin-bottom: 280px;
    width: 70%;
    ${({dark, theme: {colors}}) => dark && `
        color: ${colors.reverse};
    `}
    div {
        position: absolute;
        bottom: -45px;
        ${({position}) => position === 'left' ? `right: -4vw;` : position === 'right' ? `left: -4vw;` : ``}
        width: 28%;
        padding: 40px 32px;
        background-color: ${({background}) => background};
        box-shadow: 0px 8px 18px 0px #0008;
        p {
        }
    }
    img {
        width: 100%;
    }
`

const BottomNav = styled.nav`
    ul {
        width: 100%;
        display: grid;
        grid-template-columns: ${({l}) => 100 / l}% ${({l}) => 100 / l}% ${({l}) => 100 / l}% ${({l}) => 100 / l}% ${({l}) => 100 / l}%;
        box-shadow: 0px -12px 20px 0px #0006;
    }
`
const Tile = styled.li`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 60%;
    transition-duration: 0.2s;
    z-index: 1;
    background-color: ${({background}) => background};
    &:hover {
        transform: translateY(-30px);
    }
`
const Filter = styled.div`
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${({background}) => `${background}60`};
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
        filter: blur(2px);
        ${({cover}) => cover ? `
            height: auto;
            width: 100%;
        ` : `
            height: 100%;
            width: auto;
        `}
    }
`
const Infos = styled.div`
    padding: 30px;
    position: absolute;
    z-index: 1;
    ${({dark, theme: {colors}}) => dark && `
        color: ${colors.reverse};
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
//! SubPage : Project
const Project = ({query, target: {slug, title, subtitle, description, image, background, dark, long, datas}}) => {
    return <>
        <Hero background={background}>
            <Title dark={dark}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </Title>
            <Filter background={background} />
            <img
                src={image} srcSet={image}
                alt={slug}
            />
        </Hero>
        <section>
            <Description>
                {description}
            </Description>
            <List>
                {datas.map((data, i) =>
                    <Li key={i} position={data.position} background={background} dark={dark}>
                        <img src={data.image} srcSet={data.image} alt={data.alt} />
                        {data.text && <div>
                            <h4>{data.alt}</h4>
                            <p>{data.text}</p>
                        </div>}
                    </Li>
                    )
                }
            </List>
        </section>
        <section>
            <BottomNav l={ProjectsLength}>
                <ul>
                    {ProjectsData.map((project, i) => project.slug !== query.project &&
                        <Link key={i} href={`/projects/[project]`} as={`/projects/${project.slug}`}>
                        <Tile l={ProjectsLength} background={project.background}>
                            <Filter background={project.background}/>
                            <Figure cover={project.cover}>
                                <Infos top={!project.top} bottom={!project.bottom} dark={project.dark}>
                                    <h3>{project.title}</h3>
                                    <h4>{project.subtitle}</h4>
                                </Infos>
                                <img
                                    src={`${project.image}`} srcSet={`${project.image}`}
                                    alt={project.slug}
                                />
                            </Figure>
                            </Tile>
                        </Link>
                    )}
                </ul>
            </BottomNav>
        </section>
    </>
}

//! Get initial props
Project.getInitialProps = async ({query}) => {
    const target = await ProjectsData.find(el => el.slug === query.project )
    return {query: query, target}
}
//! Default Props
Project.defaultProps = {
    SubPage: 'Project'
}
Project.propTypes = {
    SubPage: PropTypes.string,
    query: PropTypes.object,
    target: PropTypes.object,
}

//? EXPORT
export default Project
