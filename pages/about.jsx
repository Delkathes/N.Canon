//? IMPORT
//! Modules
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

//! Content
import AboutData from 'content/about.json'
const AboutLength = AboutData.length

//! Constants
//! Utils
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
    margin: ${({ i, l }) =>
        i === 0 ? '0px 0px 20px' : i === l ? '20px 0px 0px' : '20px 0px'};
`

//! Components
//! High-order-components
//!  Page : About
//? EXPORT
const About = () => {
    const pageSpring = useFadeIn()

    return (
        <Section style={pageSpring}>
            <Container>
                <PageInfo>
                    <h1 className="page-name">About me</h1>
                </PageInfo>
                <Article>
                    {AboutData.map((data, i) => (
                        <P key={i} i={i} l={AboutLength - 1}>
                            {data}
                        </P>
                    ))}
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
    )
}

//! Default Props
About.defaultProps = {
    Page: 'About',
    pageDescription:
        "Learn more about me and how I started my journey in web development. I'm currently open to any project suggestion."
}
About.propTypes = {
    Page: PropTypes.string,
    pageDescription: PropTypes.string
}

export default About
