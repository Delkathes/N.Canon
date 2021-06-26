import Link from 'next/link'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { fileToJson } from 'utils/file-system'
import { markedKeysToString, Marked } from 'utils/marked'

import { Container as Div, PageInfo } from 'styles/Theme'

const About = ({ about }) => {
    return (
        <>
            <NextSeo
                title={`About | Nicolas Canon - Web developer`}
                description={about.seo.description}
            />
            <Section>
                <Container>
                    <PageInfo>
                        <h1 className="page-name">About me</h1>
                    </PageInfo>
                    <Article>
                        <P>
                            <Marked markdown={about.text} />
                        </P>
                        <p id="contact">
                            {
                                'If that sounds like someone you’d like to collaborate with then'
                            }
                            <Link href="/contact" as="/contact">
                                <a> get in touch.</a>
                            </Link>
                        </p>
                    </Article>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        width: 84%;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        width: 78%;
    }
    @media (${({ theme }) => theme.mediaQueries.laptop}) {
        width: 66%;
    }
    margin: 0px auto;
`
const Container = styled(Div)`
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        display: flex;
        flex-direction: column;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-column-gap: 10px;
    }
`

const Article = styled.article`
    #contact {
        margin-top: 30px;
        margin-bottom: 60px;
    }
    a {
        color: ${({ theme: { colors } }) => colors.highlight};
        font-weight: bold;
    }
`
const P = styled.div`
    p {
        font-size: 1.02em;
        line-height: 1.3em;
        margin-bottom: 14px;
    }
`

export const getStaticProps = async () => {
    let about = await fileToJson('content/pages/about.json')
    about = await markedKeysToString(about, ['text'])

    return {
        props: {
            about
        }
    }
}
About.propTypes = {
    about: PropTypes.object.isRequired
}

export default About
