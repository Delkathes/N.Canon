//? IMPORT
//! Modules
import PropTypes from 'prop-types'
import {useTransition, config} from 'react-spring'

//! Content
import ProjectsData from '../../content/projects.json'

//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
//! Components
import Main from '../../components/Project/Main.js'
import Head from '../../components/Global/Head'

//! High-order-components
//! SubPage : Project
const Project = ({query}) => {
    
    const trans = useTransition(query.project, p => p, {
        config: {...config.default},
        from: {transform: 'translateX(-100vw)'},
        enter: {transform: 'translateX(0)'},
        leave: {display: 'none'}
    })
    const {title} = ProjectsData.find(el => el.slug === query.project)
    return <>
        <Head head={title + ' | Projects | Nicolas Canon'} />
        {trans.map(({item, props, key}) => {
            const objective = ProjectsData.find(el => el.slug === item)
            return <Main key={key} query={query} target={objective} {...objective} style={props} />
        })}
    </>
}

//! Get initial props
Project.getInitialProps = async ({query}) => {
    return {query: query}
}

//! Default Props
Project.defaultProps = {
    SubPage: 'Project',
    route: '/projects/[project]',
}
Project.propTypes = {
    SubPage: PropTypes.string,
    route: PropTypes.string,
    query: PropTypes.object,
    target: PropTypes.object,
}

//? EXPORT
export default Project