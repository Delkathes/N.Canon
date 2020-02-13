//? IMPORT
//! Modules
import PropTypes from 'prop-types'

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
import Head from '../../components/Global/Head'
import Main from '../../components/Project/Main'

//! High-order-components
//! SubPage : Project
const Project = ({ query, project }) => (<>
    <Head head={ project.title + ' | Projects | Nicolas Canon' } />
    <Main query={ query } target={ project } { ...project } />
</>)

//! Get initial props
Project.getInitialProps = async ({ query }) => {
    const project = ProjectsData.find(el => el.slug === query.project)
    return { query: query, project}
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
    project: PropTypes.object,
}

//? EXPORT
export default Project