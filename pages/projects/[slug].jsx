//? IMPORT
//! Modules
import PropTypes from 'prop-types'

//! Content
import projects from 'content/projects.json'

//! Constants
//! Utils
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
const Project = ({ slug, project }) => (
    <>
        <Head head={project.title + ' | Projects | Nicolas Canon'} />
        <Main querySlug={slug} {...project} />
    </>
)

export function getStaticProps({ params }) {
    const project = projects.find(el => el.slug === params.slug)
    return {
        props: {
            slug: params.slug,
            project
        }
    }
}
export function getStaticPaths() {
    const paths = projects.map(({ slug }) => ({ params: { slug } }))
    return { paths, fallback: false }
}

//! Default Props
Project.defaultProps = {
    SubPage: 'Project',
    route: '/projects/[slug]'
}
Project.propTypes = {
    SubPage: PropTypes.string,
    route: PropTypes.string,

    slug: PropTypes.string,
    project: PropTypes.object
}

//? EXPORT
export default Project
