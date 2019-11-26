//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
// import {useRouter} from 'next/router'
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
    }
`
const BottomLink = styled.li`
    position: relative;
    width: 100%;
    padding-top: 100%;
    background-color: ${({background}) => background};
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
//!  Page : Project
//? EXPORT
const Project = ({query, target}) => {

    console.log('query.project :', query.project)
    
    const {title, what, background} = target
    return(
        <>
            <Header background={background}>
                {title}
                {what}
            </Header>
            <section>
                Contenu
            </section>
            <section>
                <BottomNav l={ProjectsLength}>
                    <ul>
                        {ProjectsData.map((project, i) => project.slug !== query.project &&
                            <BottomLink l={ProjectsLength} key={i} background={project.background}>
                                <Figure>
                                    <Infos top={!project.top} bottom={!project.bottom}>
                                        <h3>{project.title}</h3>
                                        <h4>{project.what}</h4>
                                    </Infos>
                                    <img src={`/static/projects/${project.image}`} srcSet={`/static/projects/${project.image}`} height="100%" width="100%" />
                                </Figure>
                            </BottomLink>
                        )}
                    </ul>
                </BottomNav>
            </section>
        </>
    )
}

//! Get initial props
Project.getInitialProps = async ({query}) => {
    const target = await ProjectsData.find(el => el.slug === query.project )
    return {query: query, target}
}
//! Default Props
Project.defaultProps = {
    Page: 'Project'
}
Project.propTypes = {
    Page: PropTypes.string,
    query: PropTypes.object,
    target: PropTypes.object,
}


export default Project
