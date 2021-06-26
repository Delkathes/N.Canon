import { NextSeo } from 'next-seo'
// import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { animated, useTrail } from 'react-spring'

import { fileToJson } from 'utils/file-system'

// import { useFadeIn } from '@animations'
import { Container as Div, PageInfo } from 'styles/Theme'

// import Icon from 'components/Global/Icon'
import { FaFilePdf } from 'react-icons/fa'

const Experiences = ({ experiences }) => {
    return (
        <>
            <NextSeo
                title={`Experiences | Nicolas Canon - Web developer`}
                description={experiences.seo.description}
                canonical={`https://${process.env.DOMAIN}/experiences`}
            />
            <Section>
                <Container>
                    <PageInfoExt>
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
                                <FaFilePdf
                                    color="rgb(26, 160, 203)"
                                    style={{
                                        position: 'relative',
                                        zIndex: '-1'
                                    }}
                                />
                            </span>
                        </a>
                    </PageInfoExt>
                    <ul>
                        {experiences.data.map((experience, i) => (
                            <li key={i}>
                                <Article first={i === 0}>
                                    <h3>{experience.title}</h3>
                                    <div>
                                        {experience.from} - {experience.to}
                                    </div>
                                    <p>{experience.what}</p>
                                </Article>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
    overflow: hidden;
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
        letter-spacing: 1.2px;
    }
    div {
        color: ${({ theme: { colors } }) => colors.secondary};
        font-weight: 300;
        padding-top: 2px;
        padding-bottom: 2px;
    }
    p {
        padding-top: 4px;
        padding-bottom: 4px;
        line-height: 1.2rem;
    }
`

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
