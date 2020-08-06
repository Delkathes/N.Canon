//? IMPORT
//! Modules
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { animated, useTrail } from 'react-spring'

//! Content
//! Constants
import ExpData from 'content/experiences.json'
const ExpLength = ExpData.length

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
const Experiences = ({ Page }) => {
    //* useState : mounted
    const [mounted, setMount] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setMount(true)
        }, 350)
    }, [])

    const pageSpring = useFadeIn()

    const trail = useTrail(ExpLength, {
        trail: 1000,
        transform: mounted ? 'translateX(0px)' : 'translateX(40px)',
        opacity: mounted ? 1 : 0
    })

    return (
        <Section>
            <Container>
                <PageInfoExt style={pageSpring}>
                    <h1 className="page-name">{Page}</h1>
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
                                <h3>{ExpData[i].title}</h3>
                                <div>
                                    {ExpData[i].from} - {ExpData[i].to}
                                </div>
                                <p>{ExpData[i].what}</p>
                            </Article>
                        </animated.li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}

//! Default Props
Experiences.defaultProps = {
    Page: 'Experiences',
    pageDescription:
        "Learn more about my experiences and/or download a copy of my CV in pdf format. I'm currently open to any project suggestion."
}
Experiences.propTypes = {
    Page: PropTypes.string,
    pageDescription: PropTypes.string
}

export default Experiences
