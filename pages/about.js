//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, config} from 'react-spring'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled(animated.section)`
    width: 70%;
    margin: 0px auto;
`
const Container = styled.div`
    width: 100%;
    margin-top: 30vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 10px;
`
const Article = styled.article`
    p {
        line-height: 1.3em;
        margin: 20px 0px;
    }
`
const PageName = styled.div`
    font-weight: bold;
    font-size: 3em;
`

//! Components
//! High-order-components
//!  Page : About
//? EXPORT
const About = () => {
    const pageSpring = useSpring({
        config: config.default,
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        from: {
            transform: 'translateY(250px)',
            opacity: 0
        },
    })
    return (
        <>
            <Section style={pageSpring}>
                <Container>
                    <PageName>About me</PageName>
                    <Article>
                        <p>
                            {"I'm a UI/UX designer currently working for Bristol agency Proctor + Stevenson. My role is varied and always interesting, there is no typical day. I could be working on anything from design systems for international companies, user experience prototyping and testing, or creating animated interface demos with code or prototyping tools. I originally trained as a graphic designer, studying at the Arts University Bournemouth. My time here gave me a great foundation in layout, hierarchy and visual design. It’s also where my keen eye for typography originated."}
                        </p>
                        <p>
                            {"After finishing my degree in 2014 I jumped head first into the digital industry learning all I could about the world of user centred design and research from a variety of intern, freelance and permanent positions."}
                        </p>
                        <p>
                            {"Outside of work I like to work on full stack web applications with a combination of React and backend services like Firebase and Netlify. This allows me play around with new technology and gives me a better understanding of the digital industry as a whole. It's also incredibly fun! If I'm not designing or coding something I'll be hanging off the side of a mountain somewhere or exploring the ruins of an old castle."}
                        </p>
                        <p>
                            {"If that sounds like someone you’d like to collaborate with then"}
                            <a href="/contact"><span>get in touch.</span></a>
                        </p>
                        
                    </Article>

                </Container>
            </Section>
        </>
    )
}

//! Default Props
About.defaultProps = {
    Page: 'About'
}
About.propTypes = {
    Page: PropTypes.string
}

export default About