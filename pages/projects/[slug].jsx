import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

import { markedKeysToString } from 'utils/marked'
import { dirToJson } from 'utils/file-system'

import Main from 'components/Project/Main'

const Project = ({ project, projects }) => (
    <>
        <NextSeo
            title={`${project.title} | Projects | Nicolas Canon - Web developer`}
            description="Empty SEO description"
        />
        <Main projects={projects} {...project} />
    </>
)

Project.propTypes = {
    project: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
}

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

export default Project
