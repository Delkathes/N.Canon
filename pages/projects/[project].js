//? IMPORT
//! Modules
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
const Header = styled.header`
    height: 340px;
    width: 100%;
    background-color: ${({background}) => background};
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
    width: 100%;
    padding-top: 60%;
    background-color: ${({background}) => background};
    transition-duration: 0.2s;
    &:hover {
        transform: translateY(-30px);
    }
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
const Infos = styled.div`
    padding: 30px;
    position: absolute;
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
const Project = ({query, target: {title, what, background}}) => {    
    
    return <>
        <Header background={background}>
            {title}
            {what}
        </Header>
        <section>
            <BottomNav l={ProjectsLength}>
                <ul>
                    {ProjectsData.map((project, i) => project.slug !== query.project &&
                        <Link key={i} href={`/projects/[project]`} as={`/projects/${project.slug}`}>
                            <Tile l={ProjectsLength} background={project.background}>
                                <Figure>
                                    <Infos top={!project.top} bottom={!project.bottom}>
                                        <h3>{project.title}</h3>
                                        <h4>{project.what}</h4>
                                    </Infos>
                                    <img
                                        src={`/static/projects/${project.image}`} srcSet={`/static/projects/${project.image}`}
                                        height="100%" width="100%"
                                        alt={project.image}
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
