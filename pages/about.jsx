//? IMPORT
//! Modules
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

//! Content
//! Constants
//! Utils
import { fileToJson } from 'utils/file-system'

//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
import { useFadeIn } from '@animations'
import { Container as Div, PageInfo } from 'styles/Theme'
const Section = styled(animated.section)`
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
const P = styled.p`
    font-size: 1.02em;
    line-height: 1.3em;
`

//! Components
//! High-order-components
//!  Page : About
//? EXPORT
const About = ({ about }) => {
    const pageSpring = useFadeIn()

    return (
        <>
            <NextSeo
                title={`About | Nicolas Canon - Web developer`}
                description={about.seo.description}
                canonical={`https://${process.env.DOMAIN}/about`}
            />
            <Section style={pageSpring}>
                <Container>
                    <PageInfo>
                        <h1 className="page-name">About me</h1>
                    </PageInfo>
                    <Article>
                        <P>{about.text}</P>
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

export const getStaticProps = async () => {
    const about = await fileToJson('content/pages/about.json')
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
