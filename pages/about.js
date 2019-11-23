//? IMPORT
//! Modules
// import {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled.section`
    width: 70%;
    margin: 0px auto;
`
const Container = styled.div`
    width: 100%;
    margin-top: 30vh;
    display: grid;
    grid-template-columns: 45% 55%;
    grid-column-gap: 10px;
`
const Article = styled.article`
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
    return (
        <>
            <Section>
                <Container>
                    <PageName>A propos</PageName>
                    <Article>
                        Ma putain de life
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