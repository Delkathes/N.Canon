//? IMPORT
//! Modules
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

//! Content
//! Constants
//! Utils
import { markedKeysToString } from 'utils/marked'
import { dirToJson } from 'utils/file-system'

//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
//! Components
import Main from 'components/Project/Main'

//! High-order-components
//! SubPage : Project
const Project = ({ project, projects }) => (
    <>
        <NextSeo
            title={`${project.title} | Projects | Nicolas Canon - Web developer`}
            description={project.seo?.description || 'Empty SEO description'}
            canonical={`https://${process.env.DOMAIN}/${project.slug}`}
        />
        <Main projects={projects} {...project} />
    </>
)

export const getStaticProps = async ({ params }) => {
    const data = await dirToJson('content/projects')
    let project = data.find(el => el.slug === params.slug)
    project = await markedKeysToString(project, ['description'])

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
