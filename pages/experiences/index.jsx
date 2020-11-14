//? IMPORT
//! Modules
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated, useTrail } from 'react-spring'

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
        grid-template-columns: 50% auto;
        grid-column-gap: 10px;
    }
`
const PageInfoExt = styled(PageInfo)`
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        margin-bottom: 70px;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        margin-bottom: 0;
    }
    p {
        margin: 16px 0px;
    }
    a {
        color: ${({ theme: { colors } }) => colors.highlight};
        font-weight: bold;
    }
    #CV-download {
        display: flex;
        align-items: center;
        margin: 16px 0px;
    }
    span {
        cursor: pointer;
        display: flex;
        align-items: center;
        svg {
            margin-left: 6px;
        }
    }
`
const Article = styled.article`
    display: flex;
    flex-direction: column;
    margin: ${({ first }) => (first ? '00px 0px 65px' : '35px 0px')};
    h3 {
    }
    div {
        color: ${({ theme: { colors } }) => colors.secondary};
        font-weight: 300;
    }
    p {
    }
`
//! Components
import Icon from 'components/Global/Icon'

//! High-order-components
//!  Page : Experiences
//? EXPORT
const Experiences = ({ experiences }) => {
    //* useState : mounted
    const [mounted, setMount] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setMount(true)
        }, 350)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    const pageSpring = useFadeIn()

    const trail = useTrail(experiences.data.length, {
        trail: 1000,
        transform: mounted ? 'translateX(0px)' : 'translateX(40px)',
        opacity: mounted ? 1 : 0
    })

    return (
        <Section>
            <Container>
                <PageInfoExt style={pageSpring}>
                    <h1 className="page-name">Experiences</h1>
                    <p>
                        Check my CV{' '}
                        <a
                            aria-label="CV-check"
                            href="https://res.cloudinary.com/nicolas-canon/image/upload/v1580690686/Personal%20Site/docs/CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>{' '}
                        or download a copy of it below.
                    </p>
                    <a
                        id="CV-download"
                        aria-label="CV-download"
                        href="https://res.cloudinary.com/nicolas-canon/image/upload/v1580690686/Personal%20Site/docs/CV.pdf"
                        download
                    >
                        Download CV
                        <span>
                            <Icon icon="PDF" color="rgb(26, 160, 203)" />
                        </span>
                    </a>
                </PageInfoExt>
                <ul>
                    {trail.map((props, i) => (
                        <animated.li key={i} style={props}>
                            <Article first={i === 0}>
                                <h3>{experiences.data[i].title}</h3>
                                <div>
                                    {experiences.data[i].from} - {experiences.data[i].to}
                                </div>
                                <p>{experiences.data[i].what}</p>
                            </Article>
                        </animated.li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}

export const getStaticProps = async () => {
    const experiences = await fileToJson('content/pages/experiences.json')
    return {
        props: {
            experiences
        }
    }
}

//! Prop-types
Experiences.propTypes = {
    experiences: PropTypes.object.isRequired
}

export default Experiences
