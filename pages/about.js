//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, config} from 'react-spring'

//! Content
import AboutData from '../content/about.json'

//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled(animated.section)`
    width: 66%;
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
            transform: 'translateY(200px)',
            opacity: 0
        },
    })
    return (
        <>
            <Section style={pageSpring}>
                <Container>
                    <PageName>About me</PageName>
                    <Article>
                        {AboutData.map((data, i) =>
                            <p key={i}>{data}</p>
                        )}
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