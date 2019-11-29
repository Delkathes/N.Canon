//? IMPORT
//! Modules
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {useSpring, useTransition, useChain, config, animated} from 'react-spring'

//! Content
import ProjectsData from '../../content/projects.json'

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
const Filter = styled.div`
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${({background}) => `${background}60`};
    z-index: 0;
`

//! Components
import BottomNav from '../../components/Project/BottomNav'
import Content from '../../components/Project/Content'

//! High-order-components
//! SubPage : Project
const Project = ({query, target, target: {slug, title, subtitle, image, background, dark, long}}) => {
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
            <Content {...target} />
        </section>
        <section>
            <BottomNav query={query} />
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
