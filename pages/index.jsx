import Link from 'next/link'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { animated } from 'react-spring'
// import { Image, Transformation } from 'cloudinary-react'
import Image from 'next/image'

const NavigationLinks = [
    { clean: 'More about me', href: 'about' },
    { clean: 'My recent projects', href: 'projects' },
    { clean: 'Get in touch', href: 'contact' },
    { clean: 'View my experience', href: 'experiences' }
]

import { fileToJson } from 'utils/file-system'

// import { useFadeIn } from '@animations'

import Icon from 'components/Global/Icon'

const Home = ({ home }) => {
    // const pageSpring = useFadeIn()

    return (
        <>
            <NextSeo
                title="Nicolas Canon - Web developer"
                description={home.seo.description}
            />
            <Section>
                <Container>
                    <Presentation>
                        <h1 hidden>Nicolas Canon - Web developer</h1>
                        <h2>{"Hey, I'm Nicolas."}</h2>
                        <p>{" I'm a self taught web developer based in Paris, FR."}</p>
                    </Presentation>
                    <Nav>
                        <ul>
                            {NavigationLinks.map((link, i) => (
                                <Link key={i} href={`/${link.href}`} passHref>
                                    <NavLink>
                                        <span>{link.clean}</span>
                                        <div>
                                            <Icon
                                                icon="ArrowRight"
                                                color="rgb(26, 160, 203)"
                                            />
                                        </div>
                                    </NavLink>
                                </Link>
                            ))}
                        </ul>
                    </Nav>
                </Container>
                <ProfilePic>
                    <Image
                        alt="profile pic from Nicolas Canon"
                        loading="eager"
                        priority
                        layout="intrinsic"
                        height={350}
                        width={525}
                        src="https://res.cloudinary.com/nicolas-canon/image/upload/fl_immutable_cache,q_auto:eco/v1580691256/Personal%20Site/hacker.webp"
                    />
                    {/* <Image
                        alt="profile pic from Nicolas Canon"
                        publicId="v1580691256/Personal%20Site/hacker"
                        width="auto"
                        responsive
                        loading="eager"
                    >
                        <Transformation
                            dpr="auto"
                            fetchFormat="auto"
                            quality="auto:eco"
                        />
                        <Transformation flags="force_strip.strip_profile.immutable_cache" />
                    </Image> */}
                </ProfilePic>
            </Section>
        </>
    )
}

const Section = styled.section`
    height: 100vh;
    width: 66%;
    margin: auto;
    position: relative;
    display: flex;
    align-items: center;

    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        width: 84%;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        width: 78%;
    }
    @media (${({ theme }) => theme.mediaQueries.laptop}) {
        width: 66%;
    }
`
const Container = styled.div`
    position: relative;
    margin: auto 0px;
    height: auto;
`
const Presentation = styled.div`
    h2 {
        font-weight: 900;
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            font-size: 2em;
        }
        @media (${({ theme }) => theme.mediaQueries.laptop}) {
            width: 100%;
            font-size: 3em;
        }
    }
    p {
        margin-top: 12px;
        margin-bottom: 58px;
    }
`
const Nav = styled.nav`
    z-index: 1;
    position: relative;
    height: 150px;
    ul {
        position: absolute;
    }
`
const NavLink = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        height: 36px;
        margin-bottom: 4px;
    }
    @media (${({ theme }) => theme.mediaQueries.laptop}) {
        height: auto;
        margin-bottom: 20px;
    }
    span {
        transition-duration: 0.3s;
    }
    div {
        transition-duration: 0.3s;
        display: flex;
        margin-top: 3px;
        margin-left: 8px;
    }
    &:hover {
        span {
            color: ${({ theme: { colors } }) => colors.highlight};
            transform: translateX(-6px);
        }
        div {
            transform: translateX(6px);
        }
    }
`

const ProfilePic = styled.figure`
    overflow: hidden;
    z-index: 0;
    position: fixed;
    bottom: 0px;
    display: flex;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        right: -8vw;
        width: 94%;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        right: -6vw;
        width: auto;
    }
    img {
        @media (${({ theme }) => theme.mediaQueries.mobileS}) {
            max-height: 20vw;
            min-height: 210px;
        }
        @media (${({ theme }) => theme.mediaQueries.tablet}) {
            max-height: 30vw;
            min-height: 230px;
        }
        @media (${({ theme }) => theme.mediaQueries.laptop}) {
            max-height: 40vw;
            min-height: 350px;
        }
    }
`

export const getStaticProps = async () => {
    const home = await fileToJson('content/pages/home.json')

    return {
        props: {
            home
        }
    }
}
Home.propTypes = {
    home: PropTypes.object.isRequired
}

export default Home
