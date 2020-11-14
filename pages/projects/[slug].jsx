//? IMPORT
//! Modules
import PropTypes from 'prop-types'

//! Content
//! Constants
//! Utils
import { dirToJson } from 'utils/file-system'

//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
//! Components
import Head from 'components/Global/Head'
import Main from 'components/Project/Main'

//! High-order-components
//! SubPage : Project
const Project = ({ project, projects }) => (
    <>
        <Head head={project.title + ' | Projects | Nicolas Canon'} />
        <Main projects={projects} {...project} />
    </>
)

export const getStaticProps = async ({ params }) => {
    const data = await dirToJson('content/projects')
    const project = data.find(el => el.slug === params.slug)
    return {
        props: {
            project,
            projects: data
        }
    }
}

export async function getStaticPaths() {
    const data = await dirToJson('content/projects')
    const paths = data.map(({ slug }) => ({ params: { slug } }))
    return { paths, fallback: false }
}

//! Prop-types
Project.propTypes = {
    project: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
}

//? EXPORT
export default Project
